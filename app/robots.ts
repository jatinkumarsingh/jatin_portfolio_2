import type { MetadataRoute } from "next";

const SITE_URL = "https://jatin-kumar-singh.dev"; // TODO: Replace with actual portfolio domain

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
