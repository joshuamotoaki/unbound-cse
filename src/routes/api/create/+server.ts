import type { RequestHandler } from "@sveltejs/kit";
import fs from 'fs';

export const PUT: RequestHandler = async ({ request }) => {
    const body = await request.json();
    let title: string = body.title;
    if (!title || title.trim() === '') {
        return new Response('Title is required', { status: 400 });
    }
    title = title.replace(/ /g, '-').toLowerCase();
    const content: string = body.md;

    if (!content || content.trim() === '') {
        return new Response('Content is required', { status: 400 });
    }
    
    fs.writeFileSync(`src/lib/markdown/lessons/${title}.md`, content);
    return new Response('Success', { status: 200 });
};