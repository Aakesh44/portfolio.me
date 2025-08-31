import React from 'react';
import { Button } from '../ui/button';
import { Icons } from '../icons';
import { USER } from '@/data/user';

const NavGithub = () => {
    return (
        <Button variant="outline" size="icon" asChild className='rounded-full'>
            <a href={USER.github} target="_blank" rel="noopener">
                <Icons.github />
                <span className="sr-only">GitHub</span>
            </a>
        </Button>
    );
};

export default NavGithub;