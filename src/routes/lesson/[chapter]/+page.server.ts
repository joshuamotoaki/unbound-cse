import { Marked } from 'marked';
import fs from 'fs';
import type { PageServerLoad } from './$types';
import hljs from 'highlight.js';
import { markedHighlight } from 'marked-highlight';
import markedCodeFormat from 'marked-code-format';
import markedAlert from 'marked-alert';
import markedKatex from 'marked-katex-extension';
import { markedSmartypants } from "marked-smartypants";

export const load: PageServerLoad = async ({ params }) => {
    const { chapter } = params;
    const filePath = `src/lib/markdown/lessons/${chapter}.md`;
    const fileText = fs.readFileSync(filePath, 'utf-8');

    const marked = new Marked(
        markedHighlight({
            langPrefix: 'hljs language-',
            highlight(code, lang, info) {
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            }
        })
    ).use(
        markedCodeFormat({
            tabWidth: 4,
            removeEmptyLines: false,
            semi: true,
            singleQuote: true,
        }),
        markedAlert(),
        markedKatex({
            throwOnError: true,
        }),
        markedSmartypants()
    );

    const html = await marked.parse(fileText);

    return {
        props: {
            html,
        },
    };

};