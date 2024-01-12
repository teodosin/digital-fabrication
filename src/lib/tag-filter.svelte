<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    /**
    * @type {any[]}
    */
    export let tags = [];
    /**
    * @type {null}
    */
    let activeTag = null;
    /**
    * @param {any} tag
    */
    function selectTag(tag) {
      if (activeTag === tag) {
        activeTag = null;
        dispatch('tagselected', null);
      } else {
        activeTag = tag;
        dispatch('tagselected', tag);
      }
    }
  </script>
  
  <div class="tags-body">
    {#each tags as tag (tag)}
      <button 
        class:active={tag === activeTag} 
        class="tag_button"
        on:click={() => selectTag(tag)}>{tag}
    </button>
    {/each}
  </div>
  
  <style>
    .tag_button {
      background-color: #f5f5f5;
      border: none;
      color: black;
      padding: 0.5rem 1rem;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 1rem;
      margin: 0.25rem 0.25rem;
      cursor: pointer;
      border-radius: 0.25rem;
    }
    .active {
      background-color: #007BFF;
      color: white;
    }

    .tags-body {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
  </style>