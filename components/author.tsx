import React from 'react';
import {ViewOptionsPopover} from "fumadocs-ui/layouts/docs/page";
import Link from "next/link";

export default function Author() {
    return (
        <div>
            <Link
                href={`https://github.com/ekovegeance`}
                className="text-foreground transition-colors flex flex-row items-center gap-2 group"
            >
                <img
                    src={`https://github.com/ekovegeance.png?size=16`}
                    className="w-4 h-4 rounded-full border border-background group-hover:border-muted-foreground transition-colors"
                />
                <span className="grow truncate text-sm text-fd-secondary-foreground">ekovegeance</span>
            </Link>
        </div>
    );
}