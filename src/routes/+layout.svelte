<script lang="ts">
	import { base } from "$app/paths";
	import rust from "svelte-highlight/languages/rust";
	import '../styles/code.css';

	import { onMount } from "svelte";
	// Uncomment all this stuff to enable silly p5 sketch in background
	// import { runSketch } from "../lib/sketch";

	// let sketchContainer: HTMLElement;

	// onMount(() => {
	// 	runSketch(sketchContainer);
	// });
</script>

<!-- <div bind:this={sketchContainer} class="sketch-container"></div> -->

<nav class="nav">
	<a class="nav-button" href="{base}/">Home</a>
</nav>

<slot />

<style>
	@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	:global(body) {
		font-family: "Nunito", sans-serif;
		margin: 0;
		font-weight: 300;
		font-size: 18px;
		background-color: #121212;
		color: #f5f5f5;
	}

	/* .sketch-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	} */

	:global(h1) {
		font-family: "Playfair Display", serif;
		font-weight: 700;
		font-size: 3rem;
	}
	:global(h2) {
		font-family: "Playfair Display", serif;
		font-weight: 700;
		font-size: 2rem;
	}

	:global(h3) {
		font-family: "Playfair Display", serif;
		font-weight: 700;
		font-size: 1.5rem;
	}

	:global(a) {
		color: #bb86fc;
		text-decoration: none;
	}
	:global(a:hover) {
		color: #e3cdff;
	}

	:global(hr){
		margin-top: 5rem;
		border: 0;
		width: 100%;
		height: 2px;
		background: #333;
	}

	.nav {
		position: absolute;
		left: 50%; /* Move the left edge of the element to the center of the container */
		transform: translateX(-50%);
		margin-top: 1rem;
		width: 95vw;
		display: flex;
		justify-content: left;
		z-index: 1;
		padding: 0.5rem;
	}
	.nav-button {
		padding: 0.7rem;
		border-radius: 2.5rem;
		background-color: #12121279;
	}

	/* width */
	:root::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	:root::-webkit-scrollbar-track {
		background: #000000;
	}

	/* Handle */
	:root::-webkit-scrollbar-thumb {
		background: #5f5f5f;
	}

	/* Handle on hover */
	:root::-webkit-scrollbar-thumb:hover {
		background: #383838;
	}
</style>
