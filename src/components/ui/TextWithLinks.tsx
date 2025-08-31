"use client";
import React from 'react';
import ReactLinkify from 'react-linkify';

const TextWithLinks = ({text} : {text: string}) => {
    return (
        <ReactLinkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
                <a
                key={key}
                href={decoratedHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0.5 link"
                >
                {decoratedText.split('.')?.[0]}
                </a>
            )}
        >
            {text} <p></p>
        </ReactLinkify>
    );
};

export default TextWithLinks;