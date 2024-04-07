<svelte:head>
  <title>
    UnboundCSE
  </title>
</svelte:head>

<script lang='ts'>
export let data;
const pageText = data.props.html;

console.log(pageText);
</script>

<main class="p-6 pt-2">
  {@html pageText}
</main>

<style lang='postcss'>
  main :global(h1) {
    @apply text-3xl font-bold;
  }

  main :global(h2) {
    @apply text-2xl font-bold mt-2;
  }

  main :global(.katex-html) {
    @apply hidden;
  }
</style>