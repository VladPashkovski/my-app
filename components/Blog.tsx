"use client";

import { getAllPosts } from "@/app/services/getPosts";
import { useEffect, useState } from "react";
import Posts from "./Posts";
import SearchPanel from "./SearchPanel";

interface IPost {
	id: number;
	title: string;
}

const Blog = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [loading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllPosts()
			.then(setPosts)
			.finally(() => setIsLoading(false));
	}, []);
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<>
					<SearchPanel onSearch={setPosts} />
					<ul>
						<Posts posts={posts} />
					</ul>
				</>
			)}
		</>
	);
};

export default Blog;
