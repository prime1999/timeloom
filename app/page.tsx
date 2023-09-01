import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center items-center min-h-screen">
			<p className="">
				The Toy version is available on{" "}
				<Link
					href="/adarsh"
					className="text-link hover:underline hover:decoration-link"
				>
					/adarsh
				</Link>
			</p>
		</main>
	);
}
