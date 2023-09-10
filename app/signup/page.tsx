"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardTitle,
	CardContent,
	CardDescription,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import { Loader2Icon } from "lucide-react";

const formSchema = z.object({
	username: z
		.string()
		.min(3, {
			message: "Username must be at least 3 characters long",
		})
		.max(16, {
			message: "Username must be at most 16 characters long",
		})
		.regex(/^[a-zA-Z]{3,16}$/, {
			message:
				"Username cannot contain special characters, numbers or spaces",
		})
		.refine(
			async username => {
				try {
					const response = await axios.post(
						"/api/validation/username",
						{
							username,
						}
					);

					return response.data.available;
				} catch (error) {
					console.log(error.response.data.message);
				}
			},
			{
				message: "Username not available",
			}
		),
	email: z
		.string()
		.email({
			message: "Invalid email address",
		})
		.refine(
			async email => {
				try {
					const response = await axios.post("/api/validation/email", {
						email,
					});

					return response.data.available;
				} catch (error) {
					console.log(error.response.data.message);
				}
			},
			{
				message: "Email address already in use",
			}
		),
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters long",
		})
		.max(30, {
			message: "Password must be at most 30 characters long",
		})
		.regex(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
			{
				message:
					"Password must contain at least one uppercase letter, one lowercase letter, and one number",
			}
		)
		.refine(
			password => {
				return !password.includes(" ");
			},
			{
				message: "Password cannot contain spaces",
			}
		),
});

const Page = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});
	const { toast } = useToast();

	const router = useRouter();

	const { handleSubmit, control } = form;

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// console.log(values);
		setIsLoading(true);
		try {
			const response = await axios.post("/api/users/signup", values);
			console.log(response);
			toast({
				title: "Account successfully created",
				description:
					"Your account has been created. Redirecting to login page. Please login to continue.",
				type: "background",
			});

			setTimeout(() => {
				router.push("/login");
			}, 4000);
		} catch (error) {
			console.log(error.response.data.message);
			toast({
				title: "Error! Account not created",
				description: error.response.data.message,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card className="max-w-md mx-auto">
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl">Create an account</CardTitle>
				<CardDescription>
					Enter your email and choose a username to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="">
					<Form {...form}>
						<form
							onSubmit={(event: FormEvent<HTMLFormElement>) => {
								event.preventDefault();
								handleSubmit(onSubmit)();
							}}
							className="space-y-6"
						>
							<FormField
								control={control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="email">
											Email Address
										</FormLabel>
										<FormControl>
											<Input
												placeholder="example@something.com"
												id="email"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="username">
											Username
										</FormLabel>
										<FormControl>
											<Input
												placeholder="coolusername"
												id="username"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel htmlFor="password">
											Password
										</FormLabel>
										<FormControl>
											<Input
												placeholder="secretlol"
												{...field}
												type="password"
												id="password"
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								disabled={isLoading ? true : false}
								className="w-full"
							>
								{isLoading && (
									<Loader2Icon className="animate-spin inline-block mr-2" />
								)}
								Create account
							</Button>
						</form>
					</Form>
				</div>
			</CardContent>
			<CardFooter>
				<p className="mx-auto text-muted-foreground">
					Already have an account?{" "}
					<Link
						href="/login"
						className="font-medium hover:underline text-primary-foreground"
					>
						Login
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
};

export default Page;
