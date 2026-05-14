import {docs} from 'collections/server';
import {loader} from 'fumadocs-core/source';
import {lucideIconsPlugin} from "fumadocs-core/source/lucide-icons";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
    // it assigns a URL to your pages
    baseUrl: '/',
    source: docs.toFumadocsSource(),
    plugins: [lucideIconsPlugin()],
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
export function getPageImage(page: (typeof source)['$inferPage']) {
    const segments = [...page.slugs, 'image.png'];

    return {
        segments,
        url: `/og/docs/${segments.join('/')}`,
    };
}
