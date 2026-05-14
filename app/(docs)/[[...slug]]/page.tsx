import {getPageImage, source} from '@/lib/source';
import {DocsBody, DocsDescription, DocsPage, DocsTitle, PageLastUpdate} from 'fumadocs-ui/page';
import {notFound} from 'next/navigation';
import {createRelativeLink} from 'fumadocs-ui/mdx';
import {getMDXComponents} from '@/mdx-components';
import {getGithubLastEdit} from 'fumadocs-core/content/github';
import {ViewOptionsPopover} from "fumadocs-ui/layouts/docs/page";
import Author from "@/components/author";

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    const MDXContent = page.data.body;

    const lastModifiedTime = await getGithubLastEdit({
        owner: 'ekovegeance',
        repo: 'docs',
        // example: "content/docs/index.mdx"
        path: `content/docs/${page.path}`,
    });

    const githubUrl = `https://github.com/ekovegeance/docs/blob/main/content/docs/${page.path}`

    return (
        <DocsPage
            toc={page.data.toc}
            full={page.data.full}
            tableOfContent={{
                // style: 'clerk',
                single: false,
                header: (
                    <div className="flex flex-col gap-6 mb-6">
                        {lastModifiedTime && <PageLastUpdate date={lastModifiedTime}/>}
                        <Author/>
                        <ViewOptionsPopover className="w-fit" githubUrl={githubUrl} markdownUrl={`${page.url}.mdx`}/>
                    </div>
                )
            }}
        >

            <DocsTitle>{page.data.title}</DocsTitle>
            <DocsDescription>{page.data.description}</DocsDescription>
            <DocsBody>
                <MDXContent
                    components={getMDXComponents({
                        // this allows you to link to other pages with relative file paths
                        a: createRelativeLink(source, page),
                    })}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);
    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
        openGraph: {
            images: getPageImage(page).url,
        },
    };
}
