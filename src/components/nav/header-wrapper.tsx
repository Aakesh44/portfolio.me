"use client";

import { useMotionValueEvent, useScroll } from 'motion/react';
import React, { useState } from 'react';

const HeaderWrapper = (props: React.ComponentProps<'header'>) => {

    const {scrollY} = useScroll();

    const [affix, setaffix] = useState(false);

    useMotionValueEvent(scrollY, 'change', (lastValue) => {
        setaffix(lastValue >= 10);
    });

    return (
        <header data-affix={affix} {...props}/>
    );
};

export default HeaderWrapper;