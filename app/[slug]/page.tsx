"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button, buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Page = ({ params }: { params: { slug: string } }) => {
	const [data, setData] = useState<Data | undefined>(undefined);
	const [loading, setLoading] = useState(true);
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const router = useRouter();
	const { toast } = useToast();

	interface Data {
		isLoggedIn: boolean;
		isSelf: boolean;
		isAvailable: boolean;
	}

	useEffect(() => {
		setLoading(true);

		const getData = async (slug: string) => {
			try {
				const response = await axios.post(
					"/api/users/user",
					{
						username: slug,
					},
					{
						withCredentials: true,
					}
				);
				setData(response.data);
			} catch (error) {
				console.log(error);
				setData(undefined);
			}
		};

		getData(params.slug);
		setLoading(false);
	}, [params.slug]);

	const logout = async () => {
		try {
			setIsLoggingOut(true);
			await axios.get("/api/users/logout");
			toast({
				title: "Logged out successfully",
				description: "Redirecting you to the homepage...",
			});
			router.push("/");
		} catch (error) {
			console.log(error);
			toast({
				title: "Failed to log out",
				description: error.message,
				variant: "destructive",
			});
		} finally {
			setIsLoggingOut(false);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="max-w-2xl mx-auto mt-10">
			<h1 className="lg:text-5xl spacing tracking-normal text-4xl font-bold">
				/{params.slug}
			</h1>
			<p className="mt-4">
				{data?.isSelf &&
					"Congratulations 🎉. You have successfully claimed this username. I'll shoot you an email as soon as I am done with the development so you can get started."}
				{data?.isAvailable
					? data?.isLoggedIn
						? "Yayy 🎉. This username is available! But as you're already logged in, you'll first have to logout and then create a new account to claim this username."
						: "Yayy 🎉. This username is available! If you want to claim this username, you can simply create a new account and claim this username."
					: data?.isSelf
					? ""
					: "Unfortunately, this username is not available. But heyy, this isn't the end of the world. Go ahead and try a different username :)"}
			</p>
			<p className="mt-4">
				Once the product is launched, you&apos;ll be able to create your
				own timeline like{" "}
				<Link
					href="/adarsh"
					className="underline hover:no-underline text-link"
				>
					this one
				</Link>
				.
			</p>
			{data?.isLoggedIn ? (
				<Button
					onClick={logout}
					variant="outline"
					disabled={isLoggingOut ? true : false}
					className="mt-6"
				>
					{isLoggingOut && <Loader2 className="animate-spin" />}
					Log out
				</Button>
			) : (
				<Link
					href="/signup"
					className={`${buttonVariants({ variant: "default" })} mt-6`}
				>
					{data?.isAvailable
						? "Claim this username!"
						: "Create an account"}
				</Link>
			)}
		</div>
	);
};

export default Page;
