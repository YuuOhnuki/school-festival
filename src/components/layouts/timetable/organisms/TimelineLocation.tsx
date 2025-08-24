'use client';
import React from 'react';
import { TimelineGroupComponent } from '../atoms/TimelineGroup';
import { TimelineLocationProps } from '@/types/timetable';

export const TimelineLocation: React.FC<TimelineLocationProps> = ({ title, schedule, currentTime }) => {
    return (
        <section className="w-full p-2">
            <h2
                className="text-2xl lg:text-3xl font-bold mb-2 text-center text-gray-800"
                id={`schedule-for-${title.replace(/\s+/g, '-')}`}
            >
                {title}
            </h2>
            <div className="relative" role="list">
                {schedule.map((group, index) => (
                    <TimelineGroupComponent key={index} group={group} currentTime={currentTime} />
                ))}
            </div>
        </section>
    );
};
