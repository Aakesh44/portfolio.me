import { cn } from '@/lib/utils';
import { SocialLink } from '@/types/types';
import { ArrowUpRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SocialLinkItem = ({ icon, title,href, username}: SocialLink) => {

    return (
        <a
            className={cn(
                "group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none",
                "max-sm:screen-line-before max-sm:screen-line-after",
                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
            )}
            href={href}
            target="_blank"
            rel="noopener"
        >

            <Image
                className="shrink-0"
                src={icon}
                alt={title}
                width={48}
                height={48}
                quality={100}
                unoptimized
            />

            <div className="flex-1">
                <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
                {title}
                </h3>

                <p className="text-sm text-muted-foreground">{username}</p>
            </div>

            <ArrowUpRightIcon className="size-4 text-muted-foreground" />
        </a>
    );
};

export default SocialLinkItem;