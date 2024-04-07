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

<main>
  {@html pageText}
</main>

<style lang='postcss'>
  :global(h1) {
    @apply text-red-500;
  }
</style>