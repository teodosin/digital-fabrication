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
      background-color: #007bff11;
      border: 1px solid white;
      color: white;
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
    .tag_button:hover {
      border: 1px solid #007bff;
    }
    .active {
      font-weight: 800;
      border: 1px solid #790127;
      background-color: #ffef15;
      color: black;
    }

    .tags-body {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
  </style>