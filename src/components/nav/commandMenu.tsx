"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import {CodeXmlIcon, LucideProps, Search} from 'lucide-react';
import {
  BriefcaseBusinessIcon,
  CornerDownLeftIcon,
  LetterTextIcon,
  MoonStarIcon,
  SunIcon,
  FileText
} from "lucide-react";
import { Icons } from '../icons';
import { SOCIAL_LINKS } from '@/data/social-links';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '../ui/command';
import Image, { StaticImageData } from 'next/image';
import { Separator } from '../ui/separator';
import soundManager from '@/lib/sound-manager';

type CommandLinkItem = {
  title: string;
  href: string;

  icon?: React.ComponentType<LucideProps>;
  iconImage?: string | StaticImageData;
  keywords?: string[];
  openInNewTab?: boolean;
};

const MENU_LINKS: CommandLinkItem[] = [
  {
    title: "Portfolio",
    href: "/",
    icon: CodeXmlIcon,
  },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1blgk-9Dxtpi_Sc_oLxv69ql52sIGo5I7/view?usp=sharing",
    icon: FileText,
    openInNewTab: true
  }
];

const PORTFOLIO_LINKS: CommandLinkItem[] = [
  {
    title: "About",
    href: "/#about",
    icon: LetterTextIcon,
  },
  {
    title: "Tech Stack",
    href: "/#stack",
    icon: Icons.ts,
  },
  {
    title: "Experience",
    href: "/#experience",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Projects",
    href: "/#projects",
    icon: Icons.project,
  } 
];

const SOCIAL_LINK_ITEMS: CommandLinkItem[] = SOCIAL_LINKS.map((item) => ({
  title: item.title,
  href: item.href,
  iconImage: item.icon,
  openInNewTab: true,
}));

const CommandMenu = () => {

    const router = useRouter();

    const { setTheme} = useTheme();

    const [open, setOpen] = useState(false);

    useEffect(() => {
      const abortController = new AbortController();
      const { signal } = abortController;

      document.addEventListener(
        "keydown",
        (e: KeyboardEvent) => {
          if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
            if (
              (e.target instanceof HTMLElement && e.target.isContentEditable) ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              return;
            }

            e.preventDefault();
            setOpen((open) => !open);
          }
        },
        { signal }
      );

      return () => abortController.abort();
    }, []);

    const handleOpenLink = useCallback(
      (href: string, openInNewTab = false) => {
        setOpen(false);

        if (openInNewTab) {
          window.open(href, "_blank", "noopener");
        } else {
          router.push(href);
        }
      },
      [router]
    );
    const handleThemeChange = useCallback(
      (theme: "light" | "dark" | "system") => {
        setOpen(false);
        setTheme(theme);
      },
      [setTheme]
    );


    return (
        <>
            <Button
                variant="secondary"
                className={cn(
                "h-8 gap-1.5 rounded-full bg-zinc-50 px-2.5 text-muted-foreground select-none hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-900",
                "not-dark:border dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                )}
                onClick={() => setOpen(true)}
            >
                <Search/>

                <span className="font-sans text-sm/4 font-medium sm:hidden">
                Search
                </span>

                <CommandMenuKbd className="hidden tracking-wider sm:in-[.os-macos_&]:flex">
                ⌘K
                </CommandMenuKbd>
                <CommandMenuKbd className="hidden sm:not-[.os-macos_&]:flex">
                Ctrl K
                </CommandMenuKbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                
                <CommandInput placeholder='Type a command or search...'/>

                <CommandList className='min-h-80'>

                  <CommandEmpty>No results found</CommandEmpty>

                  <CommandLinkGroup
                    heading='Menu'
                    links={MENU_LINKS}
                    onLinkSelect={handleOpenLink}
                  />

                  <CommandSeparator/>

                  <CommandLinkGroup
                    heading='Portfolio'
                    links={PORTFOLIO_LINKS}
                    onLinkSelect={handleOpenLink}
                  />

                  <CommandSeparator/>

                  <CommandLinkGroup
                    heading='Social Links'
                    links={SOCIAL_LINK_ITEMS}
                    onLinkSelect={handleOpenLink}
                  />

                  <CommandSeparator/>

                  <CommandGroup heading='Theme'>
                    <CommandItem
                      keywords={["theme"]}
                      onSelect={() => {
                        soundManager.playClick();
                        handleThemeChange("light")
                      }}
                    >
                      <SunIcon/>
                      Light
                    </CommandItem>
                    <CommandItem
                      keywords={["theme"]}
                      onSelect={() => {
                        soundManager.playClick();
                        handleThemeChange("dark")
                      }}
                    >
                      <MoonStarIcon/>
                      Dark
                    </CommandItem>
                    <CommandItem
                      keywords={["theme"]}
                      onSelect={() => {
                        soundManager.playClick();
                        handleThemeChange("system")
                      }}
                    >
                      <Icons.contrast/>
                      System
                    </CommandItem>

                  </CommandGroup>

                </CommandList>

                <CommandMenuFooter/>
            </CommandDialog>
        </>
    );
};

export default CommandMenu;

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLinkItem[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  onLinkSelect: (href: string, openInNewTab?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link?.iconImage ? (
              <Image
                className="rounded-sm"
                src={link.iconImage}
                alt={link.title}
                width={16}
                height={16}
                unoptimized
              />
            ) : (
              <Icon />
            )}
            {link.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

function CommandMenuFooter() {

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-zinc-100/30 px-4 text-xs font-medium dark:bg-zinc-800/30">
        <CodeXmlIcon className="size-4 text-muted-foreground" aria-hidden />

        <div className="flex shrink-0 items-center gap-2">
          <span>{"Open Link"}</span>
          <CommandMenuKbd>
            <CornerDownLeftIcon />
          </CommandMenuKbd>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <span className="text-muted-foreground">Exit</span>
          <CommandMenuKbd>Esc</CommandMenuKbd>
        </div>
      </div>
    </>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "pointer-events-none flex h-5 min-w-6 items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-sans text-[13px] font-normal text-muted-foreground shadow-[inset_0_-1px_2px] shadow-black/10 select-none dark:bg-white/10 dark:shadow-white/10 dark:text-shadow-xs [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
