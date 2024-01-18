<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  /**
   * @type {any[]}
   */
  export let categories = [];
  /**
   * @type {null}
   */
  let activecategory = null;
  /**
   * @type {boolean}
   */
  export let capitalizeFirstLetter = true;
  /**
   * @param {any} category
   */

  function selectcategory(category) {
    if (activecategory === category) {
      activecategory = null;
      dispatch("categoryselected", null);
    } else {
      activecategory = category;
      dispatch("categoryselected", category);
    }
  }
</script>

<div class="categories-body">
  <button
    class:active={activecategory === null}
    class="category_button"
    on:click={() => selectcategory(null)}
  >
    {capitalizeFirstLetter ? "All" : "all"}
  </button>

  {#each categories as category (category)}
    <button
      class:active={category === activecategory}
      class="category_button"
      on:click={() => selectcategory(category)}
    >
      {capitalizeFirstLetter
        ? category.charAt(0).toUpperCase() + category.slice(1)
        : category}
    </button>
  {/each}
</div>

<style>
  .category_button {
    background-color: #6f778069;
    border: none;
    color: rgb(14, 14, 14);
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    font-weight: 100;
    margin: 0.25rem 0.25rem;
    cursor: pointer;
    border-radius: 1rem;
  }
  .category_button:not(.active):hover {
    background-color: #8596a869;
    box-shadow: 0px 4px 58px 2px rgba(156, 15, 102, 0.425);
    transition: box-shadow 0.3s ease;
  }
  .active {
    font-weight: 800;
    background-color: #b97f00;
    color: rgb(255, 255, 255);
  }

  .categories-body {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
</style>
