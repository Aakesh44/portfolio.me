import React from 'react';
import HeaderWrapper from './header-wrapper';
import { cn } from '@/lib/utils';
import DesktopMenu from './desktop-menu';
import CommandMenu from './commandMenu';
import NavGithub from './nav-github';
import ToggleTheme from './nav-theme';
import MobileMenu from './mobile-menu';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderWrapper
            className={cn(
                'sticky inset-0 top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2',
                'data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80',
                'not-dark:data-[affix=true]:**:data-header-container:after:bg-border',
                'transition-shadow duration-300'
            )}
        >
            <div
                className='screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl'
                data-header-container
            >
                <Link href={'/'} className='w-20 h-full grid place-items-center font-semibold font-mono text-foreground'>AAKESH</Link>

                <div className='h-full grow border-x border-edge sm:-ml-2'/>

                <DesktopMenu/> 

                <div className='flex items-center gap-2'>
                    <CommandMenu/>
                    <NavGithub/>
                    <ToggleTheme/>
                    <MobileMenu/>
                </div>
            </div>
            
        </HeaderWrapper>
    );
};

export default Header;