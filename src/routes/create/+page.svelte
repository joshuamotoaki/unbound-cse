<script lang='ts'>
	import { convertToHtml } from "$lib/scripts/convert";
    import hljs from 'highlight.js/lib/core';
    import javascript from 'highlight.js/lib/languages/javascript';
    import 'highlight.js/styles/github.css'
    hljs.registerLanguage('javascript', javascript);

    export let md = '';
    let html = '';
    let title = '';

    const refresh = async (event: any) => {
        if (!event.target) return;
        const value = event.target.value;
        html = await convertToHtml(value);
    }

    const save = async () => {
        await fetch('/api/create', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                md
            })
        });
    }
</script>

<main class='flex h-[92vh]'>
    <div class='left flex-1 overflow-y-auto pt-2 p-4'>
        {#if html === ''}
            <p class='text-center text-gray-500'>Nothing to preview</p>
        {/if}
        {@html html}
    </div>
    <div class='right flex-1 overflow-y-auto flex flex-col pt-2 p-4 gap-2'>
        <textarea class="textarea h-full variant-form-material language-md" rows="4" 
        placeholder="Type your markdown here..." bind:value={md}
        on:input={refresh} />
        <div class='flex gap-2'>
            <input type="text" bind:value={title}
            class="input variant-form-material">
            <button class="btn variant-filled-success"
            on:click={save}>
                Save
            </button>
        </div>
    </div>
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
    
      // Markdown-alert
      :global(.markdown-alert) {
        padding: 1em;
        margin: 1em 0;
        border-radius: 6px;
        font-size: 16px;
        line-height: 24px;
      }
    
      :global(.markdown-alert-title) {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
      }
    
      :global(.markdown-alert-caution) {
        background: rgba(var(--color-warning-600) / 0.8);
        color: rgba(var(--on-warning) / 1);
      }
    
      :global(.markdown-alert-warning) {
        background: rgba(var(--color-error-600) / 0.8);
        color: rgba(var(--on-error) / 1);
      }
    
      :global(.markdown-alert-important) {
        background: rgba(var(--color-primary-600) / 0.8);
        color: rgba(var(--on-primary) / 1);
      }
    
      :global(.markdown-alert-note) {
        background: rgba(var(--color-secondary-600) / 0.8);
        color: rgba(var(--on-secondary) / 1);
      }
    
      :global(.markdown-alert-tip) {
        background: rgba(var(--color-success-600) / 0.8);
        color: rgba(var(--on-success) / 1);
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