'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { TimelineItemCardProps } from '@/types/timetable';

export const TimelineItemCard: React.FC<TimelineItemCardProps> = ({ event, isCurrent }) => {
    return (
        <li
            className={cn(
                'p-3 md:p-4 rounded-lg shadow-md transition-all duration-300 ml-[-30px]',
                isCurrent
                    ? 'bg-blue-600 text-white border-4 border-blue-400'
                    : 'bg-white text-gray-800 border-2 border-gray-200',
            )}
            aria-current={isCurrent ? 'time' : undefined}
            tabIndex={0}
        >
            <h3
                className={cn(
                    'text-base md:text-xl font-bold flex items-center gap-2',
                    isCurrent ? 'text-white' : 'text-blue-600',
                )}
            >
                {event.title}
            </h3>
            <p className={cn('text-xs md:text-base font-semibold mt-1', isCurrent ? 'text-blue-200' : 'text-gray-600')}>
                <p>{event.time}</p>
                <p>@ {event.location}</p>
            </p>
            <p className={cn('text-xs md:text-sm mt-2', isCurrent ? 'text-blue-100' : 'text-gray-500')}>
                {event.description}
            </p>
        </li>
    );
};
