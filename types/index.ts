export interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

type TagType = "Founder" | "First 100" | "Dev";

// export type tagColorsType = {
// 	background: string;
// 	border: string;
// 	foreground: string;
// };

// export const tagColors: Record<TagType, tagColorsType> = {
// 	"First 100": {
// 		background: "rgba(162, 238, 239, .18)",
// 		foreground: "rgba(162, 238, 239, 1)",
// 		border: "rgba(162, 238, 239, 0.5)",
// 	},
// 	Founder: {
// 		background: "rgba(112, 87, 255, 0.18)",
// 		foreground: "rgba(193, 184, 255, 1)",
// 		border: "rgba(193, 184, 255, .5)",
// 	},
// 	Dev: {
// 		background: "rgba(0, 134, 144, 0.18)",
// 		foreground: "rgba(0, 230, 196, 1)",
// 		border: "rgba(0, 230, 196, .7)",
// 	},
// };

export interface ProfileType {
	name: string;
	username: string;
	tags?: TagType[];
	bio: string;
	socials?: {
		email?: string;
		github?: string;
		twitter?: string;
		instagram?: string;
		linkedin?: string;
		web?: string;
	};
	button?: {
		text: string;
		link: string;
	};
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
	type: TagType;
	className?: string;
}

export interface SocialsProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
	socialLinks: ProfileType["socials"];
}

type TimelineIconType =
	| "GitHub"
	| "Twitter"
	| "Star"
	| "Quote"
	| "ThumbsDown"
	| "Zap";

type ShortLogType = {
	title: string;
	date: Date;
	link?: {
		text: string;
		url: string;
	};
	icon: TimelineIconType;
};

type LongLogType = {
	title: string;
	date: Date;
	link?: {
		text: string;
		url: string;
	};
	icon: TimelineIconType;
	description: string;
	location?: string;
};

type LogType = ShortLogType | LongLogType;
export type TimelineType = LogType[];
