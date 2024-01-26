import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "work Blog",
	description: "lalalla",
};

export default function BlogPage() {
	return <Blog />;
}
