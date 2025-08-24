'use client';
import React from 'react';
import { useTimetable } from '@/hooks/useTimetable';
import { TimelineLocation } from '@/components/layouts/timetable/organisms/TimelineLocation';
import { DaySelector } from '@/components/layouts/timetable/molecules/DaySelector';

export default function Page() {
    const { currentDay, setCurrentDay, currentTime, mainStageSchedule, gymnasiumSchedule } = useTimetable();

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-200">
                タイムテーブル
            </h1>
            <DaySelector currentDay={currentDay} onSelectDay={setCurrentDay} />
            <div className="grid grid-cols-2 lg:gap-4">
                <TimelineLocation title="中庭ステージ" schedule={mainStageSchedule} currentTime={currentTime} />
                <TimelineLocation title="新体育館" schedule={gymnasiumSchedule} currentTime={currentTime} />
            </div>
        </div>
    );
}
