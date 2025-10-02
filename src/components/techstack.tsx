import React from 'react';
import { Panel, PanelContent, PanelHeader, PanelTitle } from './ui/panel';
import { cn } from '@/lib/utils';
import { TECH_STACK } from '@/data/tech-stack';
import { SimpleTooltip } from './ui/tooltip';
import Image from 'next/image';

const Techstack = () => {
    return (
        <Panel id="techstack">
            <PanelHeader>
                <PanelTitle>Techstack</PanelTitle>
            </PanelHeader>

            <PanelContent
                className={cn(
                "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
                "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
                "bg-zinc-950/0.75 dark:bg-white/0.75"
                )}
            >
                <ul className="flex flex-wrap gap-4 select-none">

                    {TECH_STACK.map(tech => {
                        return (
                            <li key={tech.name}>
                                <SimpleTooltip content={tech.name}>
                                    <a
                                        href={tech.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={tech.name}
                                    >

                                        {tech.darkIcon ? (
                                            <>
                                                <Image
                                                    src={tech.icon}
                                                    alt={`${tech.name} light icon`}
                                                    width={32}
                                                    height={32}
                                                    className="hidden [html.light_&]:block "
                                                    unoptimized
                                                />
                                                <Image
                                                    src={tech.darkIcon}
                                                    alt={`${tech.name} dark icon`}
                                                    width={32}
                                                    height={32}
                                                    className="hidden [html.dark_&]:block rounded-full"
                                                    unoptimized
                                                />
                                            </>
                                        ):(
                                            <Image
                                                src={tech.icon}
                                                alt={`${tech.name} dark icon`}
                                                width={32}
                                                height={32}
                                                className=""
                                                unoptimized
                                            />
                                        )}
                                        <span className='sr-only'>{tech.name}</span>
                                    </a>
                                </SimpleTooltip>
                            </li>
                        )
                    })}
                </ul>
            </PanelContent>
        </Panel>
    );
};

export default Techstack;