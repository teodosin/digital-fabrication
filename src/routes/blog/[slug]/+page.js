// src/routes/blog/[slug]/+page.js

// @ts-ignore
export async function load({ params }) {
    try {
        const posts = import.meta.glob('/src/routes/blog/*.md');
        const post = await posts[`/src/routes/blog/${params.slug}.md`]();
        // @ts-ignore
        const { title, date } = post.metadata;
        // @ts-ignore
        const content = post.default;
        return {
            content,
            title,
            date
        };
    } catch (error) {
        console.error(`Error loading post ${params.slug}:`, error);
        throw error; // Re-throw the error to ensure it gets handled
    }
}