import { Sandpack } from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";
import colors from "tailwindcss/colors";
import config from "../../config";

function getColor(color: string, shade: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950') {
	return colors[color.toLowerCase() as keyof typeof colors][shade];
}

function getStyling(isDark: boolean) {
	return `body {
	background-color: ${isDark ? getColor(config.BASE_COLOR, "950") : getColor(config.BASE_COLOR, "50")};
	color: ${isDark ? getColor(config.BASE_COLOR, "50") : getColor(config.BASE_COLOR, "950")};
	${isDark ? "@apply dark;" : ""}
}`
}
export const SandpackCodeEditor = ({ files }: { files: Record<string, { code: string; active: boolean }> }) => {
	const [isDark, setIsDark] = useState(true);

	const [stylingFile, setStylingFile] = useState<string | null>();

	useEffect(() => {
		console.log("stylingFile", stylingFile);
	}, [stylingFile]);

	useEffect(() => {
		// Initial theme check
		const dark = document.documentElement.classList.contains("dark");
		console.log("dark", dark);
		setIsDark(dark);
		setStylingFile(getStyling(dark));

		// Listen for theme changes
		const handleThemeChange = (e: CustomEvent<{ darkMode: boolean }>) => {
			console.log("handleThemeChange", e.detail.darkMode);
			setIsDark(e.detail.darkMode);
			setStylingFile(getStyling(e.detail.darkMode));
		};

		document.addEventListener("theme-toggle", handleThemeChange as EventListener);

		return () => {
			document.removeEventListener("theme-toggle", handleThemeChange as EventListener);
		};
	}, []);

	if (!stylingFile) return null;

	return <Sandpack template="react" 
		options={{
			classes: {
				"sp-layout": "!rounded-2xl",
			},
			externalResources: ["https://cdn.tailwindcss.com"],
			showLineNumbers: true
		  }} 
		  theme={isDark ? "dark" : "light"}
		  files={{
			"/styles.css": {code: stylingFile, hidden: true},
			...files
		  }}
	/>
}