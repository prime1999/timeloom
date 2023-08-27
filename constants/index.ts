import { ProfileType, TimelineType } from "@/types/index";

export const PROFILE: ProfileType = {
	name: "Adarsh Dubey",
	username: "adarsh",
	tags: ["Founder", "First 100", "Dev"],
	bio: "Founder @BIO-S, Team @WeMakeDevs & @CNCF_Nashik, UX Designer, Full Stack Web Dev, Machine Learning Enthusiast.",
	socials: {
		email: "dubeyadarshmain@gmail.com",
		github: "inclinedadarsh",
		twitter: "inclinedadarsh",
		instagram: "inclinedadarsh",
		linkedin: "dubeyadarsh",
		web: "https://adarshdubey.com",
	},
	button: {
		text: "Sponsor Me",
		link: "https://github.com/sponsors/inclinedadarsh",
	},
};

export const TIMELINE: TimelineType = [
	{
		title: "Launched a Toy version of Timeloom",
		description:
			"Timeloom is a timeline generator for your GitHub profile. It is a tool that helps you create a timeline of your GitHub contributions. It is a fun way to showcase your GitHub contributions.",
		date: new Date("2023-08-27"),
		icon: "Star",
		link: {
			text: "Toy Version",
			url: "https://github.com/inclinedadarsh/timeloom",
		},
		location: "Buildspace",
	},
	{
		title: "Finished basic design of Timeloom",
		date: new Date("2023-08-20"),
		icon: "Zap",
		link: {
			text: "Design Link",
			url: "https://twitter.com/inclinedadarsh",
		},
	},
];
