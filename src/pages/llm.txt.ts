import type { APIRoute } from "astro";
import config from "src/config";
import { getSortedDocs, getDocs } from "src/utils";

const docs = await getDocs();

export const GET: APIRoute = async () => {
    return new Response(
        `# ${config.SITE_NAME} Documentation Overview\n\n${docs
            .map((category) => {
                return `${category.category}\n\n${category.docs
                    .map((doc) => {
                        return `${doc.data.title}:\n${config.SITE}${config.BASE}/${doc.id}\n\n`;
                    })
                    .join("")}`;
            })
            .join("\n\n")}`,
        { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
};