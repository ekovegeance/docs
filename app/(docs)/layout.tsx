import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import {FooterBanner} from "@/components/footer-banner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
        {...baseOptions}
        tree={source.pageTree}
        githubUrl="https://github.com/vngne"
        sidebar={{
          banner: (
              <FooterBanner/>
          )
        }}
    >
      {children}
    </DocsLayout>
  );
}
