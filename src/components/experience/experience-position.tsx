import { ExperiencePositionType } from '@/types/types';
import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { cn } from '@/lib/utils';
import { ChevronsDownUpIcon, ChevronsUpDownIcon, CodeXmlIcon, GraduationCapIcon, InfinityIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import TextWithLinks from '../ui/TextWithLinks';
import Tag from '../ui/tag';

const ExperiencePosition = (position: ExperiencePositionType) => {

    const {start, end} = position.period;
    const isOngoing = !end;
    return (
        <Collapsible defaultOpen={position.isExpanded} asChild>
            <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
                <CollapsibleTrigger
                className={cn(
                    "group/experience block w-full text-left select-none",
                    "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent/50"
                )}
                >
                    <div className="relative z-1 mb-1 flex items-center gap-3 ">
                        <div
                            className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
                            aria-hidden
                        >
                            {position.icon === "code" ? 
                                <CodeXmlIcon className="size-4"/>:
                            position.icon === "education" ? 
                                <GraduationCapIcon className="size-4"/>:<></>
                            }
                        </div>

                        <h4 className="flex-1 font-medium text-balance">
                        {position.title}
                        </h4>

                        <div
                            className="shrink-0  text-muted-foreground [&_svg]:size-4"
                            aria-hidden
                        >
                            <ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
                            <ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
                        {position.employmentType && (
                        <>
                            <dl>
                                <dt className="sr-only">Employment Type</dt>
                                <dd>{position.employmentType}</dd>
                            </dl>

                            <Separator
                            className="data-[orientation=vertical]:h-4"
                            orientation="vertical"
                            />
                        </>
                        )}

                        <dl>
                            <dt className="sr-only">Employment Period</dt>
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
                </CollapsibleTrigger>

                <CollapsibleContent className="font-mono overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    
                    {position.description.map((description, ind) => (
                        <ul key={ind} className="pt-2 pl-9">

                            <li className='group/desc w-full text-sm flex items-start justify-start gap-3'>

                                <span 
                                    className={cn(
                                        "block shrink-0 size-1.5 mt-2 rounded-full bg-zinc-300 dark:bg-zinc-600",
                                        isOngoing ? "group-hover/desc:bg-green-500/60 dark:group-hover/desc:bg-green-500" : "group-hover/desc:bg-zinc-500/40 dark:group-hover/desc:bg-zinc-500"
                                    )} 

                                    aria-hidden='true' 
                                    aria-label='Bullet: dark:bg-zinc-600' 
                                />

                                <div><TextWithLinks text={description}/></div>
                                
                            </li>
                        </ul>
                    ))}

                    {Array.isArray(position.skills) && position.skills.length > 0 && (
                        <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
                        {position.skills.map((skill, index) => (
                            <li key={index} className="flex">
                                <Tag>{skill}</Tag>
                            </li>
                        ))}
                        </ul>
                    )}
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
};

export default ExperiencePosition;
