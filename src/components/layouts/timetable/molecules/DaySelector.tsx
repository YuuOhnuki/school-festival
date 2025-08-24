'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface DaySelectorProps {
    currentDay: 'day1' | 'day2';
    onSelectDay: (day: 'day1' | 'day2') => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({ currentDay, onSelectDay }) => {
    return (
        <div className="flex justify-center gap-4 mb-12">
            <button
                onClick={() => onSelectDay('day1')}
                className={cn(
                    'px-6 py-2 rounded-full font-semibold transition-colors duration-300',
                    currentDay === 'day1'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100',
                )}
                aria-pressed={currentDay === 'day1'}
            >
                一日目
            </button>
            <button
                onClick={() => onSelectDay('day2')}
                className={cn(
                    'px-6 py-2 rounded-full font-semibold transition-colors duration-300',
                    currentDay === 'day2'
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100',
                )}
                aria-pressed={currentDay === 'day2'}
            >
                二日目
            </button>
        </div>
    );
};
