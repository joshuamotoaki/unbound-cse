import hljs from "highlight.js";
import { Marked } from "marked";
import markedAlert from "marked-alert";
import markedCodeFormat from "marked-code-format";
import { markedHighlight } from "marked-highlight";
import markedKatex from "marked-katex-extension";
import { markedSmartypants } from "marked-smartypants";

/**
 * Converts a Markdown string to HTML
 * @param mdInput Markdown string to convert to HTML
 * @returns HTML string
 */
export const convertToHtml = async (mdInput: string) => {
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

    const html = await marked.parse(mdInput);
    return html;
}