import React from 'react';
import { Panel, PanelHeader, PanelTitle } from '../ui/panel';
import { EXPERIENCES } from '@/data/experience';
import ExperienceSection from './experience-section';

const Experience = () => {
    return (
        <Panel>
            <PanelHeader>
                <PanelTitle>Experience</PanelTitle>
            </PanelHeader>
            
            <div className='pr-2 pl-4'>
                {EXPERIENCES.map(e=> (
                    <ExperienceSection key={e.id} {...e}/>
                ))}
            </div>
        </Panel>
    );
};

export default Experience;