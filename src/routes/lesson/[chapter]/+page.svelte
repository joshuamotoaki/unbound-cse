<svelte:head>
  <title>
    UnboundCSE
  </title>
</svelte:head>

<script lang='ts'>
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

export let data;
const pageText = data.props.html;

console.log(pageText);

</script>

<main class="p-6 pt-2">
  {@html pageText}
</main>


<style lang='scss'>
  
// Inside the @html block
main {
  :global(h1) {
    font-size: 30px;
    line-height: 36px;
  }
  :global(h2) {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 8px;
  }
  :global(.katex-html) {
    display: none;
  }
}

  /* Light Code Theme (github) */

  /* Dark Code Theme (github-dark) */
  pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em
  }
  code.hljs {
    padding: 3px 5px
  }
  /*!
    Theme: GitHub Dark
    Description: Dark theme as seen on github.com
    Author: github.com
    Maintainer: @Hirse
    Updated: 2021-05-15

    Outdated base version: https://github.com/primer/github-syntax-dark
    Current colors taken from GitHub's CSS
  */

  main :global(.hljs:is(.dark *)) {
    color: #c9d1d9;
    background: #0d1117
  }
  main :global(.hljs-doctag:is(.dark *)),
  main :global(.hljs-keyword:is(.dark *)),
  main :global(.hljs-meta:is(.dark *) .hljs-keyword:is(.dark *)),
  main :global(.hljs-template-tag:is(.dark *)),
  main :global(.hljs-template-variable:is(.dark *)),
  main :global(.hljs-type:is(.dark *)),
  main :global(.hljs-variable.language_:is(.dark *)) {
    /* prettylights-syntax-keyword */
    color: #ff7b72
  }
  .hljs-title,
  .hljs-title.class_,
  .hljs-title.class_.inherited__,
  .hljs-title.function_ {
    /* prettylights-syntax-entity */
    color: #d2a8ff
  }
  .hljs-attr,
  .hljs-attribute,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-operator,
  .hljs-variable,
  .hljs-selector-attr,
  .hljs-selector-class,
  .hljs-selector-id {
    /* prettylights-syntax-constant */
    color: #79c0ff
  }
  .hljs-regexp,
  .hljs-string,
  .hljs-meta .hljs-string {
    /* prettylights-syntax-string */
    color: #a5d6ff
  }
  .hljs-built_in,
  .hljs-symbol {
    /* prettylights-syntax-variable */
    color: #ffa657
  }
  .hljs-comment,
  .hljs-code,
  .hljs-formula {
    /* prettylights-syntax-comment */
    color: #8b949e
  }
  .hljs-name,
  .hljs-quote,
  .hljs-selector-tag,
  .hljs-selector-pseudo {
    /* prettylights-syntax-entity-tag */
    color: #7ee787
  }
  .hljs-subst {
    /* prettylights-syntax-storage-modifier-import */
    color: #c9d1d9
  }
  .hljs-section {
    /* prettylights-syntax-markup-heading */
    color: #1f6feb;
    font-weight: bold
  }
  .hljs-bullet {
    /* prettylights-syntax-markup-list */
    color: #f2cc60
  }
  .hljs-emphasis {
    /* prettylights-syntax-markup-italic */
    color: #c9d1d9;
    font-style: italic
  }
  .hljs-strong {
    /* prettylights-syntax-markup-bold */
    color: #c9d1d9;
    font-weight: bold
  }
  .hljs-addition {
    /* prettylights-syntax-markup-inserted */
    color: #aff5b4;
    background-color: #033a16
  }
  .hljs-deletion {
    /* prettylights-syntax-markup-deleted */
    color: #ffdcd7;
    background-color: #67060c
  }
  .hljs-char.escape_,
  .hljs-link,
  .hljs-params,
  .hljs-property,
  .hljs-punctuation,
  .hljs-tag {
    /* purposely ignored */
    
  }
</style>