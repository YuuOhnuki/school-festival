import { useState, useEffect, useMemo } from 'react';
import { TimelineGroup } from '@/types/timetable';
import { day1ScheduleData, day2ScheduleData } from '@/data/timetable-data';

const filterScheduleByLocation = (schedule: TimelineGroup[], location: string): TimelineGroup[] => {
    return schedule
        .map((group) => ({
            ...group,
            events: group.events.filter(
                (event) =>
                    event.location === location || (location === '中庭ステージ' && event.location === '東側渡り廊下'),
            ),
        }))
        .filter((group) => group.events.length > 0);
};

export const useTimetable = () => {
    const [currentDay, setCurrentDay] = useState<'day1' | 'day2'>('day1');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const schedulesToDisplay = useMemo(() => {
        return currentDay === 'day1' ? day1ScheduleData : day2ScheduleData;
    }, [currentDay]);

    const mainStageSchedule = useMemo(() => {
        return filterScheduleByLocation(schedulesToDisplay, '中庭ステージ');
    }, [schedulesToDisplay]);

    const gymnasiumSchedule = useMemo(() => {
        return filterScheduleByLocation(schedulesToDisplay, '新体育館');
    }, [schedulesToDisplay]);

    return {
        currentDay,
        setCurrentDay,
        currentTime,
        mainStageSchedule,
        gymnasiumSchedule,
    };
};
