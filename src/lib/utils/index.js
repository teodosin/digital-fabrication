export const fetchMarkdownPosts = async (category = null, tag = null) => {
    const allPostFiles = import.meta.glob('/src/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            // @ts-ignore
            const { metadata } = await resolver();
            const postPath = path.slice(11, -3);

            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    // Filter posts by category or tag if they are provided
    const filteredPosts = category || tag
        ? allPosts.filter(post => 
            (category ? post.meta.categories.includes(category) : false) ||
            (tag ? post.meta.tags.includes(tag) : false)
        )
        : allPosts;

    return filteredPosts;
};