// src/routes/blog/[slug]/+page.js

export async function load({ params }) {
    try {
        const posts = import.meta.glob('/src/routes/blog/*.md');
        const post = await posts[`/src/routes/blog/${params.slug}.md`]();
        const { title, date } = post.metadata;
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