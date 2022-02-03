import clsx from "clsx";
import MarkdownIt from "markdown-it";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { Ad } from "../components/Ad";
import { Title } from "../components/Title";
import Container from "../components/ui/Container";
import Dropdown from "../components/ui/Dropdown";
import Searchbox from "../components/ui/Searchbox";
import { Item, PageProps } from "../types";
import { unauthenticatedRoute } from "../util/redirects";
import { withSession } from "../util/session";

const itemsData = require("../data/itemsData.json");
const rarityNames: Record<number, string> = {
	0: "Common",
	1: "Uncommon",
	2: "Rare",
	3: "Epic",
	4: "Legendary",
	5: "Godly",
} as const;

export default function ItemsPage({ user }: PageProps) {
	const [search, setSearch] = useState("");
	const [item, setItem] = useState<Item["id"]>("aplus");
	const [itemData, setItemData] = useState<Item>(itemsData[item]);
	const [category, setCategory] = useState("");

	const mdParser = new MarkdownIt();

	const categories = [
		...new Set(
			Object.values(itemsData as Record<Item["id"], Item>).map(
				({ type }) => type
			)
		),
	];
	const allItems = Object.values(itemsData as Record<Item["id"], Item>).sort(
		(a, z) => a.name.localeCompare(z.name)
	);
	const [items, setItems] = useState(allItems);

	const buyPrice = () =>
		!itemData.showInShop
			? "Not Buyable"
			: "⏣ " + Math.ceil(itemData.cost).toLocaleString();

	const sellPrice = () =>
		itemData.type.toLowerCase() === "collectable"
			? "Not Sellable"
			: itemData.type.toLowerCase() === "loot box"
			? "⏣ " + itemData.cost.toLocaleString()
			: itemData.type.toLowerCase() === "tool" ||
			  itemData.type.toLowerCase() === "power-up" ||
			  itemData.type.toLowerCase() === "item pack"
			? "⏣ " + Math.ceil(itemData.cost / 10).toLocaleString()
			: "⏣ " + Math.ceil(itemData.cost).toLocaleString();

	useEffect(() => {
		setItemData(itemsData[item]);
	}, [item]);

	useEffect(() => {
		if (category === "") {
			setItems([...allItems]);
		} else {
			setItems([...allItems].filter((i) => i.type === category));
		}
	}, [category]);

	useEffect(() => {
		setCategory("");
		setItems(
			[...allItems].filter((i) =>
				i.name.toLowerCase().includes(search.toLowerCase())
			)
		);
	}, [search]);

	return (
		<Container title="Items" user={user}>
			<div className="mt-20">
				<Ad
					id="top"
					platform="mobile"
					sizes={[
						[320, 50],
						[300, 50],
						[300, 250],
					]}
				/>
				<Ad id="top" platform="desktop" sizes={[[728, 90]]} />
			</div>
			<div className="my-20 flex flex-col space-y-4">
				<div className="flex flex-col space-y-2">
					<Title size="big">Item directory</Title>
					<div className="flex items-center xl:space-x-2">
						<div className="text-md hidden space-x-2 text-light-600 dark:text-light-300 xl:flex ">
							{categories.map((ccategory) => (
								<div
									key={ccategory}
									className={clsx(
										"cursor-pointer rounded-md border-2 bg-light-500 px-4 py-1 text-dark-500 dark:bg-dark-100 dark:text-white",
										ccategory === category
											? "border-dank-300"
											: "border-light-500 dark:border-dark-100"
									)}
									onClick={() =>
										setCategory(
											ccategory === category
												? ""
												: ccategory
										)
									}
								>
									{ccategory}
								</div>
							))}
						</div>
						<div className="inline-block xl:hidden">
							<Dropdown
								content={
									<div className="flex w-full w-40 justify-between p-2 px-4 text-dark-100 dark:text-white">
										<span>
											{category == "" ? "All" : category}
										</span>
										<span className="material-icons">
											expand_more
										</span>
									</div>
								}
								options={categories
									.concat("All")
									.map((ccategory) => ({
										label: ccategory,
										onClick: () => {
											setCategory(
												ccategory == "All"
													? ""
													: ccategory
											);
										},
									}))}
							/>
						</div>
						<div className="ml-2 xl:ml-0">
							<Searchbox
								placeholder="Search for an item"
								setSearch={setSearch}
							/>
						</div>
					</div>
				</div>
				<div className="relative flex flex-col-reverse justify-between space-x-0 lg:flex-row lg:space-x-8">
					<div className="mt-4 grid grid-cols-2 content-start gap-4 sm:grid-cols-4 md:grid-cols-6 lg:mt-0 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
						{items.map((citem) => (
							<div
								key={citem.id}
								className={clsx(
									"flex h-24 max-h-24 w-24 cursor-pointer items-center justify-center rounded-md border-4  bg-light-500 dark:bg-dark-100",
									item == citem.id
										? "border-dank-300"
										: "border-light-500 dark:border-dark-100"
								)}
								onClick={() => setItem(citem.id as Item["id"])}
							>
								<img src={citem.image} className="w-12" />
							</div>
						))}
					</div>
					<div className="sticky top-0 h-full flex-1 rounded-md bg-light-500 p-8 align-top dark:bg-dark-100 lg:top-4 lg:max-w-xl">
						<div className="flex flex-col items-center space-y-20">
							<div className="flex flex-col items-center space-y-2">
								<img src={itemData.image} className="w-20" />
								<div className="text-center font-montserrat text-3xl font-bold text-dark-500 dark:text-white">
									{itemData.name}
								</div>
								<div className="flex flex-col items-center">
									<div className="text-gray-600 dark:text-gray-400">
										Type: {itemData.type}
									</div>
									<div className="text-gray-600 dark:text-gray-400">
										Rarity: {rarityNames[itemData.rarity]}
									</div>
									<div className="text-gray-600 dark:text-gray-400">
										ID: {itemData.id}
									</div>
								</div>

								<div
									className="text-center leading-5 text-dark-500 dark:text-gray-200"
									dangerouslySetInnerHTML={{
										__html: mdParser.renderInline(
											itemData.longdescription ||
												itemData.description
										),
									}}
								></div>
							</div>
							{itemData.effects && (
								<div className="flex flex-col items-center text-dark-500 dark:text-white">
									<div className="text-lg font-bold ">
										Effects
									</div>
									<div className="text-center">
										{itemData.effects}
									</div>
								</div>
							)}
							{itemData.items && (
								<div className="flex flex-col items-center">
									<div className="text-lg font-bold text-dark-500 dark:text-white">
										Items Inside
									</div>
									<div className="grid grid-cols-6 gap-2">
										{itemData.items.map((i) => (
											<div
												className="flex cursor-pointer items-center justify-center rounded-md bg-gray-300 p-2 dark:bg-dank-400"
												onClick={() => setItem(i)}
											>
												<img
													src={itemsData[i].image}
													className="w-6"
												/>
											</div>
										))}
									</div>
								</div>
							)}
							{itemData.reward?.items && (
								<div className="flex flex-col items-center">
									<div className="text-lg font-bold text-dark-500 dark:text-white">
										Possible Items
									</div>
									<div className="grid grid-cols-6 gap-2">
										{itemData.reward.items
											.map((a) => Object.keys(a)[0])
											.map((i) => (
												<div
													className="flex cursor-pointer items-center justify-center rounded-md bg-gray-300 p-2 dark:bg-dank-400"
													onClick={() => setItem(i)}
												>
													<img
														src={itemsData[i].image}
														className="w-6"
													/>
												</div>
											))}
									</div>
								</div>
							)}
							{itemData.components && (
								<div className="flex flex-col items-center">
									<div className="text-lg font-bold text-dark-500 dark:text-white">
										Craftable From
									</div>
									<div className="grid grid-cols-6 gap-2">
										{Object.entries(
											itemData.components
										).map(([id, amount]) => (
											<div
												className="relative flex cursor-pointer items-center justify-center rounded-md bg-gray-300 p-2 dark:bg-dank-400"
												onClick={() => setItem(id)}
											>
												<img
													src={itemsData[id].image}
													className="w-6"
												/>
												<div className="absolute right-0.5 bottom-0 text-xs text-dark-500 dark:text-white">
													x{amount}
												</div>
											</div>
										))}
									</div>
								</div>
							)}
							<div className="flex w-2/3 flex-col justify-between sm:flex-row">
								<div className="flex flex-col items-center">
									<div className="font-montserrat text-lg font-bold text-dark-500 dark:text-white">
										Buy Price
									</div>
									<div className="text-sm text-dank-300">
										{buyPrice()}
									</div>
								</div>
								<div className="flex flex-col items-center">
									<div className="font-montserrat text-lg font-bold text-dark-500 dark:text-white">
										Sell Price
									</div>
									<div className="text-sm text-dank-300">
										{sellPrice()}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Ad
					id="bottom"
					platform="mobile"
					sizes={[
						[320, 50],
						[300, 50],
						[300, 250],
					]}
				/>
				<Ad
					id="bottom"
					platform="desktop"
					sizes={[
						[728, 90],
						[970, 90],
						[970, 250],
					]}
				/>
			</div>
		</Container>
	);
}

export const getServerSideProps: GetServerSideProps =
	withSession(unauthenticatedRoute);
