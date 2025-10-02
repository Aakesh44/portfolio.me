import React from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
    return (
        <>
            <div className='screen-line-before screen-line-after h-8 px-4 border-x border-edge'/>

            <div className='screen-line-after h-24 w-full flex items-center justify-center border-x border-edge'>
                <div className='w-8 h-full'/>

                <div
                        className={cn(
                        "h-full grow border-x border-edge select-none sm:aspect-3/1",
                        "flex items-center justify-center text-black dark:text-white",
                        // "screen-line-before screen-line-after before:-top-px after:-bottom-px",
                        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
                        )}
                >

                </div>
                
                <div className='w-8 h-full'/>
            </div>
            <div className='screen-line-after h-24 w-full flex items-center justify-center border-x border-edge'>
                <div className='w-8 h-full'/>

                <div
                        className={cn(
                        "h-full grow border-x border-edge select-none sm:aspect-3/1",
                        "flex items-center justify-center text-black dark:text-white",
                        // "screen-line-before screen-line-after before:-top-px after:-bottom-px",
                        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
                        )}
                >

                </div>
                
                <div className='w-8 h-full'/>
            </div>
            <div className='screen-line-after h-8 px-4 border-x border-edge'/>

        </>
    );
};

export default Footer;