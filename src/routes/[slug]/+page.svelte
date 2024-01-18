<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
    import type { PageData } from "./$types";
    import { afterUpdate } from "svelte";

    export let data: PageData;

    afterUpdate(() => {
        const tocHeader = document.querySelector("h3");
        if (tocHeader) {
            const tocList = tocHeader.nextElementSibling;
            if (tocList && tocList.tagName === "UL") {
                let toc = document.querySelector(".toc");
                if(toc !== null){
                    toc.innerHTML = "";
                    toc.appendChild(tocHeader);
                    toc.appendChild(tocList);
                }
            }
        }
    });
</script>


<div class="post-header">
    <h1>{data.title}</h1>
    <p class="date">Published: {data.date}</p>
</div>
<div class="centered-container">
    <div class="toc"></div>
    <article class="post">

        <svelte:component this={data.content} />
    </article>
</div>

<style>
    .post-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 50rem;
        border-bottom: 1px solid #333;
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
    }

    .toc {
        position: sticky; 
        top: 0;
        max-width: 10rem;
        padding-top: 2rem;
        height: 100%;
    }
    .toc:not(:empty) {
        padding-right: 2rem;
    }

    .toc :global(h3) {
        /* styles for h3 elements inside .toc */
        color: #333;
    }

    .toc :global(ul) {
        /* styles for ul elements inside .toc */
        list-style-type: none;
        padding: 0;
    }

    .toc :global(ul > li) {
        /* styles for li elements that are direct children of ul elements inside .toc */
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }

    .toc :global(ul){
        border-left: 1px solid #333;
    } 

    .centered-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 60rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .post {
        display: flex;
        flex-direction: column;
        max-width: 50rem;
    }

    @media (max-width: 600px) {
        .toc {
            display: inline;
            top: auto;
            width: 100%;
            height: auto;
        }

        .centered-container {
            flex-direction: column;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
        }
    }

    .centered-container :global(img) {
        width: 100%;
        align-self: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .centered-container :global(.tiny) {
        width: 6rem;
    }
    .centered-container :global(.round) {
        border-radius: 5rem;
    }

    .date {
        margin-top: -2rem;
        margin-bottom: 3rem;
        font-size: 0.8rem;
        font-style: italic;
    }

    :global(ul) {
        margin-block-start: 0px;
    }
</style>
