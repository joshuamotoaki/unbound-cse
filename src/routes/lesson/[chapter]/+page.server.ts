import fs from 'fs';
import type { PageServerLoad } from './$types';
import { convertToHtml } from '$lib/scripts/convert';

export const load: PageServerLoad = async ({ params }) => {
    const { chapter } = params;
    const filePath = `src/lib/markdown/lessons/${chapter}.md`;
    const fileText = fs.readFileSync(filePath, 'utf-8');

    return {
        props: {
            html: await convertToHtml(fileText),
            title: chapter,
        },
    };

};