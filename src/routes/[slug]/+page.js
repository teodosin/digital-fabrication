// src/routes/blog/[slug]/+page.js

// @ts-ignore
export async function load({ params }) {
    try {
        const posts = import.meta.glob('/src/posts/*.md');
        if (!posts[`/src/posts/${params.slug}.md`]) {
            console.error(`Post ${params.slug} does not exist`);
            return;
        }
        const post = await posts[`/src/posts/${params.slug}.md`]();
        // @ts-ignore
        const { title, date, categories, tags, cover } = post.metadata;
        // @ts-ignore
        const content = post.default;
        return {
            content,
            title,
            date,
            categories,
            tags,
            cover
        };
    } catch (error) {
        console.error(`Error loading post ${params.slug}:`, error);
        throw error; // Re-throw the error to ensure it gets handled
    }
}