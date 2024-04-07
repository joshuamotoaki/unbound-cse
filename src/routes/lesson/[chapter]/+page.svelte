<svelte:head>
  <title>
    UnboundCSE
  </title>
</svelte:head>

<script lang='ts'>
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import './github.css'
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

  :global(pre code.hljs) {
    display: block;
    overflow-x: auto;
    padding: 1em
  }

  :global(code.hljs) {
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
  
  :global(.hljs:is(.dark *)) {
    color: #c9d1d9;
    background: #0d1117
  }
  :global(.hljs-doctag:is(.dark *)),
  :global(.hljs-keyword:is(.dark *)),
  :global(.hljs-meta:is(.dark *) .hljs-keyword:is(.dark *)),
  :global(.hljs-template-tag:is(.dark *)),
  :global(.hljs-template-variable:is(.dark *)),
  :global(.hljs-type:is(.dark *)),
  :global(.hljs-variable.language_:is(.dark *)) {
    /* prettylights-syntax-keyword */
    color: #ff7b72
  }
  :global(.hljs-title:is(.dark *)),
  :global(.hljs-title.class_:is(.dark *)),
  :global(.hljs-title.class_.inherited__:is(.dark *)),
  :global(.hljs-title.function_:is(.dark *)) {
    /* prettylights-syntax-entity */
    color: #d2a8ff
  }
  :global(.hljs-attr:is(.dark *)),
  :global(.hljs-attribute:is(.dark *)),
  :global(.hljs-literal:is(.dark *)),
  :global(.hljs-meta:is(.dark *)),
  :global(.hljs-number:is(.dark *)),
  :global(.hljs-operator:is(.dark *)),
  :global(.hljs-variable:is(.dark *)),
  :global(.hljs-selector-attr:is(.dark *)),
  :global(.hljs-selector-class:is(.dark *)),
  :global(.hljs-selector-id:is(.dark *)) {
    /* prettylights-syntax-constant */
    color: #79c0ff
  }

  :global(.hljs-regexp:is(.dark *)),
  :global(.hljs-string:is(.dark *)),
  :global(.hljs-meta:is(.dark *) .hljs-string:is(.dark *)) {
    /* prettylights-syntax-string */
    color: #a5d6ff
  }
  :global(.hljs-built_in:is(.dark *)),
  :global(.hljs-symbol:is(.dark *)) {
    /* prettylights-syntax-variable */
    color: #ffa657
  }
  :global(.hljs-comment:is(.dark *)),
  :global(.hljs-code:is(.dark *)),
  :global(.hljs-formula:is(.dark *)) {
    /* prettylights-syntax-comment */
    color: #8b949e
  }
  :global(.hljs-name:is(.dark *)),
  :global(.hljs-quote:is(.dark *)),
  :global(.hljs-selector-tag:is(.dark *)),
  :global(.hljs-selector-pseudo:is(.dark *)) {
    /* prettylights-syntax-entity-tag */
    color: #7ee787
  }
  :global(.hljs-subst:is(.dark *)) {
    /* prettylights-syntax-storage-modifier-import */
    color: #c9d1d9
  }
  :global(.hljs-section:is(.dark *)) {
    /* prettylights-syntax-markup-heading */
    color: #1f6feb;
    font-weight: bold
  }
  :global(.hljs-bullet:is(.dark *)) {
    /* prettylights-syntax-markup-list */
    color: #f2cc60
  }
  :global(.hljs-emphasis:is(.dark *)) {
    /* prettylights-syntax-markup-italic */
    color: #c9d1d9;
    font-style: italic
  }
  :global(.hljs-strong:is(.dark *)) {
    /* prettylights-syntax-markup-bold */
    color: #c9d1d9;
    font-weight: bold
  }
  :global(.hljs-addition:is(.dark *)) {
    /* prettylights-syntax-markup-inserted */
    color: #aff5b4;
    background-color: #033a16
  }
  :global(.hljs-deletion:is(.dark *)) {
    /* prettylights-syntax-markup-deleted */
    color: #ffdcd7;
    background-color: #67060c
  }
}

</style>