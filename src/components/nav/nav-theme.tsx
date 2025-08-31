"use client"
import React, { useCallback } from 'react';
import { Button } from '../ui/button';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import soundManager from '@/lib/sound-manager';

const ToggleTheme = () => {

    const {resolvedTheme, setTheme} = useTheme();

    const handleToggle = useCallback(() => {
      soundManager.playClick();
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }, [resolvedTheme, setTheme]);

    return (
    <Button variant="outline" size="icon" onClick={handleToggle} className='rounded-full'>
      <MoonStarIcon className="hidden [html.dark_&]:block" />
      <SunIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
    );
};

export default ToggleTheme;