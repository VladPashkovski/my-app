import { Metadata } from "next";
import Link from "next/link";

async function getData() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
		next: {
			revalidate: 60, //кешировать на 60 секунд
		},
	});
	if (!response.ok) throw new Error("Unable to Ж))) fetch posts");
	return response.json();
}

interface IPost {
	id: number;
	title: string;
}

export const metadata: Metadata = {
	title: "Blog",
};
export default async function Blog() {
	const posts = await getData();

	return (
		<>
			<ul>
				{posts.map((post: IPost) => {
					return (
						<li key={post.id} className="post">
							<Link href={`/blog/${post.id}`}>{post.title}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
