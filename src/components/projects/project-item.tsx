import { Project } from '@/types/types';
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import Image from 'next/image';
import { ChevronsDownUpIcon, ChevronsUpDownIcon, InfinityIcon, LinkIcon } from 'lucide-react';
import { SimpleTooltip } from '../ui/tooltip';
import Tag from '../ui/tag';
import TextWithLinks from '../ui/TextWithLinks';

const ProjectItem = ({project, className} : {className?: string, project: Project}) => {

    const {start, end} = project.period;
    const isOngoing = !end;

    return (
        <Collapsible defaultOpen={project.isExpanded} asChild>
            
            <div className="border-b border-edge">

                <div className='flex items-center'>

                    <Image
                        src={project.logo}
                        alt={project.title}
                        width={32}
                        height={32}
                        quality={100}
                        className="mx-4 size-6 shrink-0 select-none"
                    />

                    <div className='grow flex border-l border-dashed border-edge'>

                        <CollapsibleTrigger className='group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none'>

                            <div className='grow'>

                                <h3 className='mb-1 leading-snug font-medium text-balance'>
                                    {project.title}
                                </h3>
                                <dl className="text-sm text-muted-foreground">
                                    <dt className="sr-only">Period</dt>
                                    <dd className="flex items-center gap-0.5">
                                        <span>{start}</span>
                                        <span className="font-mono">—</span>
                                        {isOngoing ? (
                                        <>
                                            <InfinityIcon
                                            className="size-4.5 translate-y-[0.5px]"
                                            aria-hidden
                                            />
                                            <span className="sr-only">Present</span>
                                        </>
                                        ) : (
                                            <span>{end}</span>
                                        )}
                                    </dd>
                                </dl>
                            </div>

                            <SimpleTooltip content="Open Project">
                                <a
                                    className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <LinkIcon className="pointer-events-none size-4" />
                                    <span className="sr-only">Open Project Link</span>
                                </a>
                            </SimpleTooltip>

                            <div
                                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                                aria-hidden
                            >
                                <ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
                                <ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
                            </div>

                        </CollapsibleTrigger>
                    </div>

                </div>

                <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    <div className="space-y-4 border-t border-dashed border-edge p-3 pl-6 ">
                        {project.description.map((description, ind) => (
                            <ul key={ind} className="pt-2">

                                <li className='group/desc w-full text-sm flex items-start justify-start gap-3'>

                                    <span className='block shrink-0 size-1.5 mt-2 rounded-full bg-zinc-300 group-hover/desc:bg-zinc-400/60 dark:group-hover/desc:bg-zinc-500 dark:bg-zinc-600' aria-hidden='true' aria-label='Bullet: dark:bg-zinc-600' />

                                    <div><TextWithLinks text={description}/></div>
                                    
                                </li>
                            </ul>
                        ))}

                        {project.techstack.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5">
                            {project.techstack.map((tech, index) => (
                            <li key={index} className="flex">
                                <Tag>{tech}</Tag>
                            </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
};

export default ProjectItem;