<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="centered-container">
    <article class="post">
        <h1>{data.title}</h1>
        <p class="date">Published: {data.date}</p>
        <svelte:component this={data.content} />
    </article>
</div>

<style>
    .centered-container {
		margin-left: auto;
		margin-right: auto;
		max-width: 40rem;
    }

    .post {
        display: flex;
        flex-direction: column;
    }

    .centered-container :global(img){
        width: 100%;
        align-self: center;
        margin-top: 2rem;
        margin-bottom: 2rem;    
        
    }

    .centered-container :global(.tiny){
        width: 6rem;
    }
    .centered-container :global(.round){
        border-radius: 5rem;
    }

    .date {
        margin-top: -2rem;
        margin-bottom: 3rem;
        font-size: 0.8rem;
        font-style: italic;
    }
</style>