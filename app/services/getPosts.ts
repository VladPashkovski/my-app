


export const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error("Unable to fetch posts");
    return response.json();
}

export const getPostBySearch = async (search: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?q=${search}`);
    if (!response.ok) throw new Error("Unable to fetch posts");
    return response.json();
}
