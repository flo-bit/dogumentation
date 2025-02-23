
export const config: Config = {
	SITE: "https://flo-bit.dev",
	BASE: "/dogumentation",

	SITE_NAME: "Dogumentation",
	SITE_DESCRIPTION: "Simple, minimalistic documentation template using astro",
	SITE_FAVICON: "🐶",

	SHOW_THEME_TOGGLE: true,
	SEARCH_ENABLED: true,

	BASE_COLOR: "zinc",
	ACCENT_COLOR: "cyan",

	SOCIAL_LINKS: {
	  FACEBOOK_URL: "",
	  TWITTER_URL: "",
	  GITHUB_URL: "#",
	  LINKEDIN_URL: "",
	  YOUTUBE_URL: "",
	  BLUESKY_URL: "",
	  DISCORD_URL: "#",
	  EMAIL: ""
	}
  };

  type Config = {
	SITE: string;
	BASE: string;

	SITE_NAME: string;
	SITE_DESCRIPTION: string;
	SITE_FAVICON: string;

	SHOW_THEME_TOGGLE: boolean;
	SEARCH_ENABLED: boolean;

	BASE_COLOR: BASE_COLORS;
	ACCENT_COLOR: ACCENT_COLORS;

	SOCIAL_LINKS: Partial<{
		FACEBOOK_URL: string;
		TWITTER_URL: string;
		GITHUB_URL: string;
		LINKEDIN_URL: string;
		YOUTUBE_URL: string;
		BLUESKY_URL: string;
		DISCORD_URL: string;
		EMAIL: string;
	}>;
  }

  type BASE_COLORS = "zinc" | "slate" | "neutral" | "stone" | "gray";
  type ACCENT_COLORS = "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
  
  export default config;