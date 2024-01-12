<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="centered-container">
    <article>
        <h1>{data.title}</h1>
        <p class="date">Published: {data.date}</p>
        <svelte:component this={data.content} />
    </article>
</div>

<style>
    .centered-container {
		margin-left: auto;
		margin-right: auto;
        justify-content: center;
		max-width: 40rem;
    }

    .date {
        margin-top: -2rem;
        margin-bottom: 3rem;
        font-size: 0.8rem;
        font-style: italic;
    }
</style>