import React from 'react';
import { Panel, PanelContent } from '../ui/panel';
import OverviewItem from './overview-item';
import { USER } from '@/data/user';
import { CodeXmlIcon, GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const Overview = () => {

    return (
        <Panel>
            <h2 className='sr-only'>Overview</h2>
            
            <PanelContent className='space-y-3'>

                <OverviewItem content={<JobContent job={USER.jobs.at(-1)}/>} icon={CodeXmlIcon}/>

                <OverviewItem content={USER.address} icon={MapPinIcon}/>

                <OverviewItem content={USER.phoneNumber} href={`tel:${USER.phoneNumber}`} icon={PhoneIcon}/>

                <OverviewItem content={USER.email} href={`mailto:${USER.email}`} icon={MailIcon}/>

                <OverviewItem content={USER.website} href={USER.website} icon={GlobeIcon}/>

            </PanelContent>
        </Panel>
    );
};

const JobContent = ({job}: {job?: {title: string, company: string, website: string}}) => {

    if (!job) return null;

    return (
        <>
            {job.title} @ 
            <a
                className="ml-0.5 font-medium underline-offset-4 hover:underline"
                href={job.website}
                target="_blank"
                rel="noopener"
            >
                {job.company}
            </a>
        </>
    )
}

export default Overview;