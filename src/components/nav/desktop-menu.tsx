"use client";

import React from 'react';
import {MAIN_NAV} from '@/config/site';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const DesktopMenu = () => {

    const pathname = usePathname();
    return (
        <Nav items={MAIN_NAV} activePathname={pathname} className='max-sm:hidden'/>
    );
};

const Nav = ({
    items,
    activePathname,
    className
}:{
    items: typeof MAIN_NAV,
    activePathname?: string | null,
    className?: string
}) => {
    return (
        <nav className={cn('flex items-center gap-6', className)}>
            {items.map(({title, href}) => {

                const isActive = activePathname === href || (href !== '/' && activePathname?.startsWith(href));

                return (
                    <NavItem
                        key={href}
                        href={href}
                        active={isActive}
                    >
                        {title}
                    </NavItem>
                )
            })}
        </nav>
    )
};

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-all duration-300",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}

export default DesktopMenu;