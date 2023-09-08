"use client";

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
} from "@/components/ui/card";

const formSchema = z.object({
	username: z
		.string()
		.min(3, {
			message: "Username must be at least 3 characters long",
		})
		.max(16, {
			message: "Username must be at most 16 characters long",
		})
		.refine(
			username => {
				return !username.includes(" ");
			},
			{
				message: "Username cannot contain spaces",
			}
		),
	email: z.string().email({
		message: "Invalid email address",
	}),
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

	const { handleSubmit, control } = form;

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values);
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
							onSubmit={handleSubmit(onSubmit)}
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
							<Button type="submit" className="w-full">
								Create account
							</Button>
						</form>
					</Form>
				</div>
			</CardContent>
		</Card>
	);
};

export default Page;
