import clsx from "clsx";
import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TIME } from "../../../constants";
import { Blog, User, UserData } from "../../../types";
import { truncate } from "../../../util/string";
import Button from "../../ui/Button";

interface Props {
	data: Blog;
	user?: User;
}

export function BlogPost({ data, user }: Props) {
	const [read, setRead] = useState(false);

	useEffect(() => {
		if (data && localStorage.getItem(`read-${data._id}`)) {
			if (Date.now() - data.date > TIME.week * 2) {
				localStorage.removeItem(`read-${data._id}`);
			} else {
				setRead(true);
			}
		}
	}, []);

	return (
		<div
			className={clsx(
				"w-full rounded-md bg-light-500 p-4 dark:bg-dark-100",
				user?.developer ? " sm:h-64 lg:h-80" : "sm:h-52 lg:h-72"
			)}
		>
			<div className="flex h-full flex-col justify-between space-y-4">
				<div className="flex flex-col space-y-4">
					<div className="flex flex-col">
						{data.draft && (
							<div className="text-xs font-bold text-dank-100">
								DRAFT
							</div>
						)}
						<div
							className={clsx(
								"flex items-center font-montserrat font-bold text-black dark:text-white",
								data.title.length > 25
									? "text-md leading-1"
									: data.title.length > 15
									? "text-xl"
									: "leading-2 text-2xl"
							)}
						>
							<div>{data.title}</div>
							{Date.now() - data.date < TIME.week * 2 &&
								!read && (
									<div className="ml-2 rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
										NEW
									</div>
								)}
						</div>
						<div className="text-sm text-light-600">
							Written by{" "}
							<Link
								href={`/@${
									(data.author as UserData).vanity ||
									(data.author as UserData).id
								}`}
							>
								<a className="hover:underline">
									{(data.author as UserData).name || "???"}
								</a>
							</Link>
							<br /> On {format(data.date, "MMMM dd, yyyy")}
						</div>
					</div>
					<div className="text-sm text-black dark:text-white">
						{truncate(data.description, 80)}
					</div>
				</div>
				<div className="flex flex-col space-y-2">
					{user?.developer && (
						<Button
							block
							variant="dark"
							href={`/community/blog/${data._id}/edit`}
						>
							Edit
						</Button>
					)}
					<Button
						variant="dark"
						href={`/community/blog/${data._id}`}
						block
					>
						Continue Reading
					</Button>
				</div>
			</div>
		</div>
	);
}
