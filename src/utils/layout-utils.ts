export const isHomePage = (pathname: string): boolean => {
	const baseUrl = import.meta.env.BASE_URL || "/";
	const baseUrlNoSlash = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

	return (
		pathname === baseUrl || pathname === baseUrlNoSlash || pathname === "/"
	);
};
