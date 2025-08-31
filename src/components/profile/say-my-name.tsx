"use client";
import soundManager from '@/lib/sound-manager';
import { cn } from '@/lib/utils';
import { Volume2 } from 'lucide-react';
import React from 'react';
import { SimpleTooltip } from '../ui/tooltip';

const SayMyName = () => {

    const sayMyName = () => {
        soundManager.sayMyName();
    }

    return (
        <SimpleTooltip 
            content="Say My Name"
            onClick={sayMyName} 
            className={cn(
                "relative mt-[2px] text-muted-foreground transition-all select-none hover:text-foreground active:scale-[0.9]",
                "after:absolute after:-inset-1",
            )}
        >

            <Volume2 className='size-[18px]'/>

        </SimpleTooltip>
    )

    return (
        <button
            onClick={sayMyName}
            className={cn(
                "relative mt-px text-muted-foreground transition-all select-none hover:text-foreground active:scale-[0.9]",
                "after:absolute after:-inset-1",
            )}
        >
            <Volume2 className='size-[18px]'/>

            <span className="sr-only border-zinc-600.">Say My Name</span>
        </button>
    );
};

export default SayMyName;