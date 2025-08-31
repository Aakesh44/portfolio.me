import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { VerifiedIcon } from '../icons';
import { SimpleTooltip, Tooltip } from '../ui/tooltip';
import SayMyName from './say-my-name';
import FlipSentences from './flip-sentenses';
import { USER } from '@/data/user';
import india from "@/assets/images/indian-flag.jpg";
import me from "@/assets/images/aakesh.jpg"

const ProfileHeader = () => {
    return (
        <section className='screen-line-after flex border-x border-edge'>
            
            <aside className='relative shrink-0 border-r border-edge'>
                <div className='relative mx-[2px] my-[4px]'>
                    <Image
                        className='size-32 object-fill rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40'
                        src={'/assets/images/aakesh.jpg'}
                        alt="avatar"
                        width={40}
                        height={40}
                    />
                </div>
                <div className='absolute top-0 left-0 h-10 aspect-3/2 bg-lime-400 hidden'>
                    <div className='relative size-full'>
                        <Image
                            className='size-full'
                            src={india}
                            alt="indian flag"
                            fill
                            quality={100}
                            
                        />
                    </div>
                </div>
            </aside>

            <aside className='grow flex flex-col'>
                <div
                    className={cn(
                        "grow flex items-end pb-1 pl-4",
                        "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
                    )}
                >
                    <div className='line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-muted-foreground/60'>
                        {"text-3xl "}
                        <span className='inline dark:hidden'>text-zinc-950</span>
                        <span className='hidden dark:inline'>text-zinc-50</span>
                        {" font-medium"}
                    </div>

                </div>
                <div className='border-t border-edge'>
                    <div className='flex items-center gap-2 pl-4 text-3xl font-semibold'>

                        <h1>{USER.name}</h1>

                        <SimpleTooltip content="Verified">
                            <VerifiedIcon className="size-[0.6em] mt-px translate-y-px text-info select-none" />
                        </SimpleTooltip>
                        
                        <SayMyName/>

                    </div>
                </div>

                <div className='h-12 flex items-center border-t border-edge pl-4 py-1 sm:h-auto overflow-hidden'>
                    <FlipSentences/>
                </div>
            </aside>
        </section>
    );
};

export default ProfileHeader;