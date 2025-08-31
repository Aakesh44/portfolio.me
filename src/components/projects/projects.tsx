import React from 'react';
import { Panel, PanelHeader, PanelTitle } from '../ui/panel';
import CollapsibleList from '../collapsible-list';
import { PROJECTS } from '@/data/projects';
import ProjectItem from './project-item';

const Projects = () => {
    return (
        <Panel id="projects">
            <PanelHeader>
                <PanelTitle>
                    Projects
                </PanelTitle>
            </PanelHeader>

            <CollapsibleList
                items={PROJECTS}
                max={3}
                renderItem={(item) => <ProjectItem key={item.id} project={item}/>}
            />
        </Panel>
    );
};

export default Projects;