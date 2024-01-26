import { Metadata } from "next";

async function getData(id: string) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	if (!response.ok) throw new Error("Unable to Ж:::))) fetch posts");
	return response.json();
}

interface IProps {
	params: {
		id: string;
	};
}

export async function generateMetadata({
	params: { id },
}: IProps): Promise<Metadata> {
	const post = await getData(id);
	return {
		title: post.title,
	};
}

interface IPost {
	id: number;
	title: string;
}

export default async function Post({ params: { id } }: IProps) {
	const post: IPost = await getData(id);
	return (
		<>
			<h1>{post.id}</h1>
			<div>{post.title}</div>
		</>
	);
}
