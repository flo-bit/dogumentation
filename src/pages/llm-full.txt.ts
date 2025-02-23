import type { APIRoute } from "astro";
import config from "src/config";
import { getSortedDocs } from "src/utils";

const docs = await getSortedDocs();

export const GET: APIRoute = async () => {
    return new Response(
        `# ${config.SITE_NAME} Full Documentation\n\n${docs
            .map((doc) => {
                return `${doc.body}\n\n`;
            })
            .join("")}`,
        { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
};