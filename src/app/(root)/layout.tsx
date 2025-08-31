import Header from '@/components/nav/header';
import { ScrollTop } from '@/components/scroll-top';
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            
            <main className='max-w-screen px-2 overflow-x-hidden '>
                {children}
            </main>

            <ScrollTop/>

        </> 
    )
}

export default AppLayout;