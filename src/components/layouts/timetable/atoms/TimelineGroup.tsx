'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { TimelineGroupProps } from '@/types/timetable';
import { TimelineItemCard } from './TimelineItemCard';

export const TimelineGroupComponent: React.FC<TimelineGroupProps> = ({ group, currentTime }) => {
    // 現在時刻がこのグループのいずれかのイベントに該当するか判定
    const isCurrentTimeGroup = group.events.some((event) => {
        const [startTimeStr, endTimeStr] = event.time.split(' - ');
        if (!startTimeStr) return false;

        const [startHour, startMinute] = startTimeStr.split(':').map(Number);
        const [endHour, endMinute] = endTimeStr ? endTimeStr.split(':').map(Number) : [startHour, startMinute + 30]; // 終了時刻がない場合は開始時刻から30分後と仮定

        const eventStartTime = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            startHour,
            startMinute,
        );
        const eventEndTime = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            endHour,
            endMinute,
        );

        return currentTime >= eventStartTime && currentTime < eventEndTime;
    });

    return (
        <li className="relative flex items-start gap-2 md:gap-6 py-4 md:py-6">
            <span
                className={cn(
                    'absolute left-0 top-0 h-full w-px transform translate-x-1/2 bg-gray-300',
                    isCurrentTimeGroup ? 'bg-blue-600 w-1' : '',
                )}
                aria-hidden="true"
            ></span>
            <div
                className={cn(
                    'relative flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-white',
                    isCurrentTimeGroup ? 'bg-blue-600 ring-blue-100' : 'bg-gray-300 ring-gray-100',
                )}
                aria-hidden="true"
            >
                <div className={cn('h-2 w-2 rounded-full', isCurrentTimeGroup ? 'bg-white' : 'bg-gray-500')}></div>
            </div>
            <div className="flex-1">
                <time className="text-lg font-semibold text-gray-900" dateTime={`PT${group.time}H`}>
                    {group.time}
                </time>
                <ul className="mt-4 space-y-4" role="list">
                    {group.events.map((event, eventIndex) => {
                        // 個々のイベントも現在時刻に該当するか判定
                        const [startTimeStr, endTimeStr] = event.time.split(' - ');
                        const [startHour, startMinute] = startTimeStr.split(':').map(Number);
                        const [endHour, endMinute] = endTimeStr
                            ? endTimeStr.split(':').map(Number)
                            : [startHour, startMinute + 30];

                        const eventStartTime = new Date(
                            currentTime.getFullYear(),
                            currentTime.getMonth(),
                            currentTime.getDate(),
                            startHour,
                            startMinute,
                        );
                        const eventEndTime = new Date(
                            currentTime.getFullYear(),
                            currentTime.getMonth(),
                            currentTime.getDate(),
                            endHour,
                            endMinute,
                        );
                        const isCurrentEvent = currentTime >= eventStartTime && currentTime < eventEndTime;

                        return <TimelineItemCard key={eventIndex} event={event} isCurrent={isCurrentEvent} />;
                    })}
                </ul>
            </div>
        </li>
    );
};
