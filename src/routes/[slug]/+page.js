// src/routes/blog/[slug]/+page.js

// @ts-ignore
export async function load({ params }) {
    try {
        const posts = import.meta.glob('/src/posts/*.md');
        const post = await posts[`/src/posts/${params.slug}.md`]();
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