import Link from "next/link";
interface IPost {
	id: number;
	title: string;
}
interface Props {
	posts: IPost[];
}
const Posts = ({ posts }: Props) => {
	return (
		<>
			{posts.map((post: IPost) => {
				return (
					<li key={post.id} className="post">
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				);
			})}
		</>
	);
};

export default Posts;
