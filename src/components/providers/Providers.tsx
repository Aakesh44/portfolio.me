"use client";
import React from 'react';
import { ThemeProvider } from 'next-themes';
import {AppProgressProvider} from "@bprogress/next"

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            storageKey='theme'
            defaultTheme='system'
            attribute='class'
        >
            <AppProgressProvider
                color="var(--foreground)"
                height='2px'
                delay={500}
                options={{ showSpinner: false }}
            >
                {children}
            </AppProgressProvider>
        </ThemeProvider>
    );
};

export default Providers;