"use client";
import React from 'react';
import { Panel, PanelContent, PanelHeader, PanelTitle } from './ui/panel';
import { USER } from '@/data/user';
import TextWithLinks from './ui/TextWithLinks';
import Spotify from './profile/spotify';

const About = () => {

    return (
        <Panel id="about" className=''>
            <PanelHeader>
                <PanelTitle>About</PanelTitle>
            </PanelHeader>

            <PanelContent className='font-mono space-y-4'>

                {USER.about.map(sentence => (
                    <TextWithLinks key={sentence} text={sentence}/>
                ))}

                <Spotify/>
            </PanelContent>
        </Panel>
    );
};

export default About;