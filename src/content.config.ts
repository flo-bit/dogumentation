import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const docs = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/docs/" }),
 	// Type-check frontmatter using a schema
  schema: z.object({
    // title of the blog post, don't repeat this in the markdown part
    title: z.string(),

    // will be shown in the blog post list
    description: z.string(),
    
    order: z.number().optional(),

    category: z.string().optional(),

    categoryOrder: z.number().optional(),

    // short description will be used for og image (fallback to description)
    shortDescription: z.string().optional(),

    // array of tags
    tags: z.array(z.string()).optional(),

    customOGImage: z.string().optional(),
    
    // wether to show title and short description in the og image
    noTextInOGImage: z.boolean().optional(),
  }),
});

export const collections = { docs };
