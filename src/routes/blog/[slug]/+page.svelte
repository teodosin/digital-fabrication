<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="centered-container">
    <article>
        <h1>{data.title}</h1>
        <p>Published: {data.date}</p>
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
</style>