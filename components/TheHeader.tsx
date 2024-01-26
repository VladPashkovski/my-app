import { Navigation } from "./Navigation";

//Пример точечного подключения клиентского компонента в серверный компонент.
//предположим что тут делаем запрос к БД по кукам полученным
// понимаем какая роль у юзера и отдаём разные наборы для навигационной панели

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" },
];

const TheHeader = () => {
	return (
		<header className="header">
			<Navigation navLinks={navItems} />
		</header>
	);
};

export default TheHeader;
