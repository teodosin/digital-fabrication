<script lang="ts">
	import { base } from "$app/paths";
</script>

<nav class="nav">
	<a href="{base}/">Home</a>
</nav>

<slot />


<style>
    :global(body) {
        background-color: #121212;
        color: #f5f5f5;
    }

    :global(a) {
        color: #bb86fc;
    }

	.nav {
		margin-left: auto;
		margin-right: auto;
		max-width: 40rem;
		display: flex;
		justify-content: left;
	}
</style>
