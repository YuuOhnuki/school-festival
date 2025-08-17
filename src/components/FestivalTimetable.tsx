'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { CometCard } from '@/components/ui/comet-card';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

// Timeline Component
const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white dark:border-black shadow-lg" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-600 dark:text-blue-400">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + 'px',
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

// Event Card Component
const EventCard = ({
    time,
    title,
    location,
    description,
    type,
}: {
    time: string;
    title: string;
    location: string;
    description: string;
    type: 'opening' | 'event' | 'performance' | 'band' | 'dance' | 'closing' | 'preparation' | 'special';
}) => {
    const typeColors = {
        opening: 'bg-green-100 text-green-800 border-green-300',
        event: 'bg-blue-100 text-blue-800 border-blue-300',
        performance: 'bg-purple-100 text-purple-800 border-purple-300',
        preparation: 'bg-orange-100 text-orange-800 border-orange-300',
        band: 'bg-purple-100 text-purple-800 border-purple-300',
        dance: 'bg-purple-100 text-purple-800 border-purple-300',
        closing: 'bg-red-100 text-red-800 border-red-300',
        special: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    };

    const typeIcons = {
        opening: '🎪',
        event: '🎯',
        performance: '🎭',
        band: '🥁',
        dance: '🕺',
        preparation: '⚙️',
        special: '⭐',
        closing: '🎉',
    };

    return (
        <CometCard>
            <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:scale-101">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{typeIcons[type]}</span>
                    <div className="flex-1">
                        <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColors[type]} mb-2`}
                        >
                            {type === 'opening' && '開会'}
                            {type === 'event' && '本部企画'}
                            {type === 'performance' && 'パフォーマンス'}
                            {type === 'dance' && 'ダンス'}
                            {type === 'band' && 'バンド'}
                            {type === 'preparation' && '準備'}
                            {type === 'closing' && '閉会'}
                            {type === 'special' && '特別企画'}
                        </div>
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{time}</div>
                    </div>
                </div>

                <h4 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">{title}</h4>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-neutral-500">📍</span>
                    <span className="text-neutral-600 dark:text-neutral-400 font-medium">{location}</span>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
            </div>
        </CometCard>
    );
};

// Main Timetable Component
const FestivalTimetable = () => {
    const [selectedDay, setSelectedDay] = useState<1 | 2>(1);

    // 2日目のタイムテーブル
    const day1Schedule: TimelineEntry[] = [
        {
            title: '9:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="9:10 - 9:25"
                        title="開会式"
                        location="中庭ステージ"
                        description="開会式の説明。"
                        type="opening"
                    />
                    <EventCard
                        time="9:35 - 9:45"
                        title="有志バンド"
                        location="中庭ステージ"
                        description="有志バンドの説明。"
                        type="band"
                    />
                </div>
            ),
        },
        {
            title: '10:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="10:15 - 10:30"
                        title="ダンス①"
                        location="中庭ステージ"
                        description="有志団体"
                        type="dance"
                    />
                    <EventCard
                        time="10:40 - 10:55"
                        title="ダンスドリル部"
                        location="中庭ステージ"
                        description="ダンスドリル部の説明"
                        type="dance"
                    />
                </div>
            ),
        },
        {
            title: '11:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="11:05 - 11:30"
                        title="歌うま選手権"
                        location="中庭ステージ"
                        description="歌うま選手権の説明。"
                        type="event"
                    />
                    <EventCard
                        time="11:40 - 12:10"
                        title="ハモネプ"
                        location="中庭ステージ"
                        description="ハモネプの説明。"
                        type="event"
                    />
                </div>
            ),
        },
        {
            title: '12:00',
            content: (
                <EventCard
                    time="12:20 - 12:55"
                    title="ダンス②③"
                    location="体育館"
                    description="ダンス②③の説明。"
                    type="dance"
                />
            ),
        },
        {
            title: '13:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="13:10 - 13:50"
                        title="A-1グランプリ"
                        location="中庭ステージ"
                        description="A-1グランプリの説明。"
                        type="event"
                    />
                    <EventCard
                        time="13:40 -"
                        title="新体育館会場"
                        location="新体育館"
                        description="新体育館会場の説明。"
                        type="preparation"
                    />
                </div>
            ),
        },
        {
            title: '14:00',
            content: (
                <EventCard
                    time="14:00 - 14:30"
                    title="ダンスドリル部"
                    location="新体育館"
                    description="ダンスドリル部の説明。"
                    type="dance"
                />
            ),
        },
    ];

    // 1日目のタイムテーブル
    const day2Schedule: TimelineEntry[] = [
        {
            title: '9:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="9:10 - 9:20"
                        title="再開式"
                        location="中庭ステージ"
                        description="再開式の説明。"
                        type="opening"
                    />
                    <EventCard
                        time="9:35 - 10:05"
                        title="うでずもう"
                        location="中庭ステージ"
                        description="うでずもうの説明。"
                        type="event"
                    />
                    <EventCard
                        time="9:45 -"
                        title="新体育館会場"
                        location="新体育館"
                        description="新体育館会場の説明。"
                        type="preparation"
                    />
                </div>
            ),
        },
        {
            title: '10:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="10:20 - 10:50"
                        title="仮装"
                        location="中庭ステージ"
                        description="仮装の説明。"
                        type="dance"
                    />
                    <EventCard
                        time="10:40 - 10:55"
                        title="吹奏楽部部"
                        location="新体育館"
                        description="吹奏楽部の説明"
                        type="performance"
                    />
                </div>
            ),
        },
        {
            title: '11:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="11:10 - 11:45"
                        title="ダンス④⑤"
                        location="中庭ステージ"
                        description="ダンス④⑤の説明。"
                        type="dance"
                    />
                    <EventCard
                        time="11:30 - 12:30"
                        title="音楽部"
                        location="新体育館"
                        description="音楽部の説明。"
                        type="performance"
                    />
                </div>
            ),
        },
        {
            title: '12:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="12:00 - 12:25"
                        title="ニコイチグランプリ"
                        location="中庭ステージ"
                        description="ニコイチグランプリの説明。"
                        type="event"
                    />
                    <EventCard
                        time="12:35 - 12:50"
                        title="ダンスドリル部"
                        location="中庭ステージ"
                        description="ダンスドリル部の説明。"
                        type="dance"
                    />
                </div>
            ),
        },
        {
            title: '13:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="13:05 - 13:35"
                        title="ボディビル"
                        location="中庭ステージ"
                        description="ボディビルの説明。"
                        type="event"
                    />
                    <EventCard
                        time="13:40 - 14:15"
                        title="未成年の主張"
                        location="東側渡り廊下"
                        description="未成年の主張の説明。"
                        type="event"
                    />
                </div>
            ),
        },
        {
            title: '14:00',
            content: (
                <EventCard
                    time="14:30 - 14:40"
                    title="閉祭式"
                    location="中庭ステージ"
                    description="閉祭式の説明。"
                    type="closing"
                />
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-950 dark:to-neutral-900">
            {/* Header */}
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h1 className="text-3xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    文化祭タイムテーブル
                </h1>
                <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12">
                    厚木高校文化祭2025の詳細スケジュール。
                </p>

                {/* Day Selector */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white dark:bg-neutral-800 rounded-full p-2 shadow-lg border border-neutral-200 dark:border-neutral-700 flex">
                        <button
                            onClick={() => setSelectedDay(1)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                                selectedDay === 1
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
                            }`}
                        >
                            1日目（土曜日）
                        </button>
                        <button
                            onClick={() => setSelectedDay(2)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                                selectedDay === 2
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
                            }`}
                        >
                            2日目（日曜日）
                        </button>
                    </div>
                </div>

                {/* Date Display */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 rounded-lg px-6 py-3 shadow-lg border border-neutral-200 dark:border-neutral-700">
                        <span className="text-2xl">📅</span>
                        <span className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                            {selectedDay === 1 ? '2025年9月6日（土）' : '2025年9月7日（日）'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <motion.div
                key={selectedDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
            >
                <Timeline data={selectedDay === 1 ? day1Schedule : day2Schedule} />
            </motion.div>

            {/* Footer Info */}
            <div className="max-w-7xl mx-auto items-center justify-center px-4 md:px-8 lg:px-10 pb-20 mt-20">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200 text-center">
                        🚨 重要なお知らせ
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🕐</span>
                                <div>
                                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200">開場時間</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        両日とも9:00から入場可能です
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🎫</span>
                                <div>
                                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200">入場料</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">無料</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🚗</span>
                                <div>
                                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200">駐車場</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        本校に車で来校することはできません。
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">☔</span>
                                <div>
                                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200">雨天</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        雨天の場合は会場場所の変更があります。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FestivalTimetable;
