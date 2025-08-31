import React from 'react';
import { Panel } from '../ui/panel';
import { SOCIAL_LINKS } from '@/data/social-links';
import SocialLinkItem from './SocialLinkItem';

const SocialLinks = () => {
    return (
        <Panel>
            <h2 className='sr-only'>Social Links</h2>

            <div className='relative'>

                <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                    <div className="border-r border-edge"></div>
                    <div className="border-l border-edge"></div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    
                    {SOCIAL_LINKS.map((link) => (
                        <SocialLinkItem key={link.href} {...link} />
                    ))}
                </div>  
            </div>
        </Panel>
    );
};

export default SocialLinks;