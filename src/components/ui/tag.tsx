import { cn } from '@/lib/utils';
import React from 'react';

function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900",
        className
      )}
      {...props}
    />
  );
}

export default Tag