<script>
  // @ts-nocheck
	import { base } from "$app/paths";
  import { onMount } from "svelte";
  import { fetchMarkdownPosts } from "$lib/utils";
  import TagFilter from "$lib/tag-filter.svelte";

  /**
   * @type {any[]}
   */
  let posts = [];
  let filteredPosts = [];
  let tags = [];

  onMount(async () => {
    posts = await fetchMarkdownPosts();
    filteredPosts = posts;
    tags = Array.from(new Set(posts.flatMap((post) => post.meta.tags)));
  });

  function handleTagSelected(event) {
    const selectedTag = event.detail;
    if (selectedTag) {
      filteredPosts = posts.filter((post) =>
        post.meta.tags.includes(selectedTag),
      );
    } else {
      filteredPosts = posts;
    }
  }
</script>

<div class="container">
  <h2 class="site-header">Teodosin's Digital Fabrication Portfolio</h2>

  <TagFilter {tags} on:tagselected={handleTagSelected} />

  {#each filteredPosts as post}
    <article class="post">
      <h3><a href={`${base}${post.path}`}>{post.meta.title}</a></h3>
      <p>{post.meta.description}</p>
    </article>
  {/each}
</div>

<style>
  .post {
    margin-bottom: 3rem;
  }

  .container {
    max-width: 40rem;
    margin: 0 auto;
    padding: 20px;
  }

  .site-header {
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
</style>  