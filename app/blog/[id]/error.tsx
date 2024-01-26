"use client";

import React from "react";

// //нюанс с компонентом ошибок они на стороне сервака
export default function ErrorWrapper({ error }: { error: Error }) {
	return <h1>Oppssssssssssssssssssss. {error.message}</h1>;
}
