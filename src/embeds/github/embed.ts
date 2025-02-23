import type { EmbedsOption } from "astro-custom-embeds";
import GithubMatcher from "./matcher";

const GithubEmbed: EmbedsOption = {
  componentName: "Github",
  urlArgument: "href",
  urlMatcher: GithubMatcher,
  directiveName: "github",
  importPath: "src/embeds",
};

export default GithubEmbed;