import { Experience } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import ExperiencePosition from './experience-position';

const ExperienceSection = (experience: Experience) => {
    return (
        <div className='scleen-line-after space-y-4 py-4'>
            <div className="flex items-center gap-3">
                <div className="flex size-6 shrink-0 items-center justify-center select-none">
                    {experience.companyLogo ? (
                        <div className='relative size-6 rounded-full bg-lime-2000'>
                            <Image
                                src={experience.companyLogo}
                                alt={experience.companyName}
                                fill
                                quality={100}
                                className="scale-[0.9]"
                                unoptimized
                                aria-hidden
                            />
                        </div>
                    ) : (
                        <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                    )}
                </div>

                <h3 className="text-lg leading-snug font-medium">
                {experience.companyName}
                </h3>

                {experience.isCurrentEmployer && (
                <span className="relative flex items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    <span className="sr-only">Current Employer</span>
                </span>
                )}
            </div>

            <div className='relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border'>
                {experience.positions.map((position) => (
                    <ExperiencePosition key={position.id} {...position}/>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;