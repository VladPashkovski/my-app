"use client";

import { getPostBySearch } from "@/app/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
	onSearch: (value: any[]) => void;
};
const SearchPanel = ({ onSearch }: Props) => {
	const [search, setSearch] = useState("");

	const handlerSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const posts = await getPostBySearch(search);
		onSearch(posts);
	};

	return (
		<>
			<form onSubmit={handlerSubmit}>
				<input
					type="search"
					placeholder="search"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
};

export default SearchPanel;
