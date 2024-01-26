"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
	label: string;
	href: string;
};

type Props = {
	navLinks: NavLink[];
};
const Navigation = ({ navLinks }: Props) => {
	const pathname = usePathname();
	return (
		<div className="wrapper navbar">
			{navLinks.map((navLink: NavLink) => {
				const isActive = navLink.href === pathname;
				return (
					<Link
						href={navLink.href}
						key={navLink.label}
						className={isActive ? "active_link" : "link"}
					>
						{navLink.label}
					</Link>
				);
			})}
		</div>
	);
};

export { Navigation };
