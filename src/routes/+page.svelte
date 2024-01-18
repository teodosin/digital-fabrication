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
  let categories = [];

  onMount(async () => {
    posts = await fetchMarkdownPosts();
    // posts = await fetchMarkdownPosts("about", "digital-fabrication");
    filteredPosts = posts;
    categories = Array.from(
      new Set(posts.flatMap((post) => post.meta.categories)),
    );
  });

  function handlecategoryselected(event) {
    const selectedTag = event.detail;
    if (selectedTag) {
      filteredPosts = posts.filter((post) =>
        post.meta.categories.includes(selectedTag),
      );
    } else {
      filteredPosts = posts;
    }
  }
</script>

<div class="container">
  <h2 class="site-header">Teodosin's Digital Fabrication Portfolio</h2>

  <TagFilter {categories} on:categoryselected={handlecategoryselected} />

  <div class="grid-container">
    {#each filteredPosts as post}
      <a href={`${base}${post.path}`}>
        <article
          class="post"
          style="background-image: url({post.meta.cover
            ? post.meta.cover
            : '/static/default-cover.jpg'});"
        >
          <div class="text-cont">
            <h3 class="post-title">{post.meta.title}</h3>
            <p class="post-desc">{post.meta.description}</p>
          </div>
        </article>
      </a>
    {/each}
  </div>
</div>

<style>
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

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .post {
    display: grid;
    aspect-ratio: 1/1;
    margin-bottom: 0rem;
    border: none;
    overflow: hidden;
    align-content: end;

    position: relative;
    background-color: #2fb3bd13;

    background-size: cover;
    background-position: center;
  }
  .post:hover {
    box-shadow: 0px 4px 58px 2px rgba(156, 15, 102, 0.425);
    transition: box-shadow 0.3s ease;
    transform: scale(1.02); /* On hover, enlarge the background image slightly */
  }

  .text-cont {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
    display: flex;
    flex-direction: column;
    align-content: end;
    padding-left: 1rem;
    padding-right: 1rem;
    color: #a7a7a7;
    transition: background 0.3s ease; /* Add transition for smooth effect */
  }
  .post:hover .text-cont {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.521));
    color: #f5f5f5;
  }

  .post-title {
    position: relative;

    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: -1.0rem;
  }
  .post-desc {
    word-wrap: break-word;
    max-height: 0; /* Initially set the maximum height to 0 */
    overflow: hidden; /* Hide the overflow */
    margin-top: 1.5rem;
    transform: scaleY(0); /* Initially scale the description's height to 0 */
    transform-origin: top; /* Set the origin of the transform to the top of the element */
    transition: max-height 0.2s ease, transform 0.2s ease; /* Add transition for max-height and transform */
  }
  .post:hover .post-desc {
    max-height: 100px; /* On hover, increase the maximum height */
    transform: scaleY(1); /* On hover, scale the description's height back to its original size */
  }
</style>
