import Image from "next/image";
import Link from "next/link";

import { ProfileProps } from "@/types";
import { PROFILE } from "@/constants/index";
import Tag from "./ui/Tag";
import Socials from "./ui/Socials";
import { buttonVariants } from "./ui/button";
import { Zap } from "lucide-react";

import profileImage from "@/assets/profile_photo.jpg";

const Profile = ({ className }: ProfileProps) => {
	return (
		<div className={className}>
			<Image
				src={profileImage}
				alt="Profile Image"
				className="w-40 h-40 rounded-full"
			/>
			<h1 className="mt-12 ">{PROFILE.name}</h1>
			<div className="flex gap-2 mt-1">
				<div className="text-muted-foreground font-medium">{`/${PROFILE.username}`}</div>
				{PROFILE.tags &&
					PROFILE.tags.map(tag => {
						return <Tag type={tag} key={tag} />;
					})}
			</div>
			<p className="mt-6">{PROFILE.bio}</p>
			{<Socials socialLinks={PROFILE.socials} />}
			{PROFILE.button && (
				<Link
					href={PROFILE.button?.text}
					className={`${buttonVariants({
						variant: "default",
					})} w-full bg-primary-custom hover:text-[#000] mt-6`}
				>
					<Zap size={20} strokeWidth={1.5} /> {PROFILE.button?.text}
				</Link>
			)}
		</div>
	);
};

export default Profile;
