// @ts-check
import { defineConfig } from "astro/config";
import { resolve } from "path";
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import pagefind from "astro-pagefind";
import customEmbeds from 'astro-custom-embeds';

import { transformerMetaHighlight, transformerNotationHighlight } from '@shikijs/transformers'

import LinkCardEmbed from './src/embeds/link-card/embed'
import YoutubeEmbed from './src/embeds/youtube/embed'
import ExcalidrawEmbed from "./src/embeds/excalidraw/embed";
import GithubEmbed from "./src/embeds/github/embed";

import react from "@astrojs/react";

import config from "./src/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $components: resolve("./src/components"),
        $layouts: resolve("./src/layouts"),
        $pages: resolve("./src/pages"),
        $assets: resolve("./src/assets"),
        $content: resolve("./src/content"),
      },
    },
  },

  integrations: [pagefind(), customEmbeds({
    embeds: [
      ExcalidrawEmbed,
      YoutubeEmbed,
      GithubEmbed,
      LinkCardEmbed,
    ]
  }), mdx(), sitemap(), tailwind(), svelte(), react()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      defaultColor: false,
      transformers: [transformerMetaHighlight(), transformerNotationHighlight()],
      wrap: true
    },

    remarkPlugins: [
      remarkMath
    ],
    rehypePlugins: [
      rehypeMathjax
    ]
  },

  prefetch: {
    prefetchAll: true,
  },
  site: config.SITE,
  base: config.BASE,
  output: "static",
});