export default function urlMatcher(url: string): string | undefined {
	if (url.startsWith("https://github.com/") || url.startsWith("https://www.github.com/")) {
		return url;
	}
	return undefined;
}