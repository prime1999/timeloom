import Link from "next/link";

import { GithubIcon, TwitterIcon, ToyBrickIcon } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
	return (
		<div className="max-w-5xl mx-auto flex px-4 py-10 justify-between">
			<h1 className="font-semibold text-2xl">
				<Link href="/">
					Timeloom<span className="text-primary-custom">.</span>
				</Link>
			</h1>
			<div className="hidden md:flex gap-5 items-center">
				<Link
					href="https://x.com/inclinedadarsh/"
					className={`${buttonVariants({
						variant: "icon",
						size: "icon",
					})}`}
				>
					<TwitterIcon size={20} strokeWidth={1.5} />
				</Link>
				<Link
					href="https://github.com/inclinedadarsh/timeloom"
					className={`${buttonVariants({
						variant: "icon",
						size: "icon",
					})}`}
				>
					<GithubIcon size={20} strokeWidth={1.5} />
				</Link>
				<Link
					href="/adarsh"
					className={`${buttonVariants({
						variant: "default",
						size: "default",
					})} bg-primary-custom hover:text-[#000]`}
				>
					Toy Version <ToyBrickIcon size={20} strokeWidth={2} />
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
