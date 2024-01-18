<!-- src/lib/TableOfContents.svelte -->
<script>
  import { onMount } from "svelte";
  export let content = "";
  /**
   * @type {any[]}
   */
  let toc = [];

  onMount(() => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(content, "text/html");
    const headers = htmlDocument.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headers.forEach((header) => {
      toc.push({
        text: header.textContent,
        id: header.id,
        tagName: header.tagName,
      });
    });
  });
</script>

<div class="toc">
  {#each toc as item (item.id)}
    <a href={`#${item.id}`} class={item.tagName}>{item.text}</a>
  {/each}
</div>

<style>
  /* Add styles for small and large screens... */
  .toc {
    /* Styles for the TOC container */
  }
  .toc a {
    /* Styles for the TOC links */
  }
  .toc .H1 {
    /* Styles for H1 links */
  }
  .toc .H2 {
    /* Styles for H2 links */
  }
  /* Add more styles for other header levels if needed */
</style>
