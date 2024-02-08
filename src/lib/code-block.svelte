<script>
    export let code = "";
    let lines = code.split("\n");
</script>

<pre>
    {#each lines as line, i}
        <code>
        <span class="line-number">{i + 1}</span>
        {line}
      </code>
    {/each}
  </pre>

<style>
    .line-number {
        display: inline-block;
        width: 2em;
        color: #888;
    }
</style>
