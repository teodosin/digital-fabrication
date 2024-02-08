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
    // posts = await fetchMarkdownPosts();
    posts = await fetchMarkdownPosts("about", "digital-fabrication");
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

  let selectedPost = null;

  let colors = ['#6B8E23', '#556B2F', '#483D8B', '#4B0082', '#696969', '#800000', '#8B4513'];
  let bcolor = colors[Math.floor(Math.random() * colors.length)];</script>

<div class="container">
  <h2 class="site-header">Teodosin's Digital Fabrication Portfolio</h2>

  <TagFilter {categories} on:categoryselected={handlecategoryselected} />

  <div class="grid-container">
    {#each filteredPosts as post}
      <a href={`${base}/${post.path}`}>
        <article
          class="post"
          on:mouseover={() => (selectedPost = post.path)}
          on:mouseout={() => (selectedPost = null)}
          on:focus={() => (selectedPost = post.path)}
          on:blur={() => (selectedPost = null)}
          class:unselected={selectedPost && selectedPost !== post.path}
          style="background-image: url({post.meta.cover
            ? post.meta.cover
            : '/default-cover.jpg'});
            background-color: {bcolor};
            "
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
    margin-top: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .post {
    display: grid;
    aspect-ratio: 1/1;
    margin-bottom: 0rem;
    border: none;
    overflow: hidden;
    align-content: end;

    position: relative;

    background-size: cover;
    background-position: center;

    /* Add transition for opacity */
    transition: opacity 0.3s ease;
  }
  .post:hover {
    box-shadow: 0px 0px 88px 2px rgb(0, 0, 0);
    transition: box-shadow 0.3s ease;
    transform: scale(
      1.005
    ); /* On hover, enlarge the background image slightly */
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
  .post.unselected {
    opacity: 0.2;
  }

  .post-title {
    position: relative;
    color: #f2f2f2aa;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: -1rem;
  }
  .post:hover .post-title {
    color: #f5f5f5;
  }
  .post-desc {
    word-wrap: break-word;
    max-height: 0; /* Initially set the maximum height to 0 */
    overflow: hidden; /* Hide the overflow */
    margin-top: 1.5rem;
    transform: scaleY(0); /* Initially scale the description's height to 0 */
    transform-origin: top; /* Set the origin of the transform to the top of the element */
    transition:
      max-height 0.2s ease,
      transform 0.2s ease; /* Add transition for max-height and transform */
  }
  .post:hover .post-desc {
    max-height: 100px; /* On hover, increase the maximum height */
    transform: scaleY(
      1
    ); /* On hover, scale the description's height back to its original size */
  }

  @media (max-width: 600px) {
    .container {
      padding: 4px;
    }
    .post-title {
      font-size: 1.2rem;
    }

    .post-desc {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 900px) {
    .container {
      max-width: 80rem;
    }
    .grid-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
