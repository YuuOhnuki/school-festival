'use client';

import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

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
    type: 'opening' | 'event' | 'performance' | 'break' | 'closing' | 'special';
}) => {
    const typeColors = {
        opening: 'bg-green-100 text-green-800 border-green-300',
        event: 'bg-blue-100 text-blue-800 border-blue-300',
        performance: 'bg-purple-100 text-purple-800 border-purple-300',
        break: 'bg-orange-100 text-orange-800 border-orange-300',
        closing: 'bg-red-100 text-red-800 border-red-300',
        special: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    };

    const typeIcons = {
        opening: '🎪',
        event: '🎯',
        performance: '🎭',
        break: '🍽️',
        closing: '🎉',
        special: '⭐',
    };

    return (
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{typeIcons[type]}</span>
                <div className="flex-1">
                    <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${typeColors[type]} mb-2`}
                    >
                        {type === 'opening' && '開会'}
                        {type === 'event' && 'イベント'}
                        {type === 'performance' && 'パフォーマンス'}
                        {type === 'break' && '休憩'}
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
    );
};

// Main Timetable Component
const FestivalTimetable = () => {
    const [selectedDay, setSelectedDay] = useState<1 | 2>(1);

    // 1日目のタイムテーブル
    const day1Schedule: TimelineEntry[] = [
        {
            title: '9:00',
            content: (
                <EventCard
                    time="9:00 - 9:30"
                    title="開会式"
                    location="体育館"
                    description="厚木高校文化祭2024の開幕です！校長先生のご挨拶、実行委員長の挨拶、各クラス代表による意気込み発表を行います。"
                    type="opening"
                />
            ),
        },
        {
            title: '10:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="10:00 - 12:00"
                        title="各クラス企画開始"
                        location="校内各所"
                        description="いよいよ各クラスの企画がスタート！カフェ、お化け屋敷、ゲームコーナーなど、創意工夫に富んだ企画をお楽しみください。"
                        type="event"
                    />
                    <EventCard
                        time="10:30 - 11:00"
                        title="吹奏楽部 ウェルカムコンサート"
                        location="中庭ステージ"
                        description="文化祭を盛り上げる吹奏楽部による歓迎演奏会。ポップスからクラシックまで幅広いレパートリーでお出迎えします。"
                        type="performance"
                    />
                </div>
            ),
        },
        {
            title: '12:00',
            content: (
                <EventCard
                    time="12:00 - 13:00"
                    title="昼食休憩"
                    location="校内各所"
                    description="各クラスの食べ物企画や持参したお弁当でランチタイム。友達と一緒に文化祭グルメを楽しみましょう。"
                    type="break"
                />
            ),
        },
        {
            title: '13:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="13:00 - 15:00"
                        title="午後の企画再開"
                        location="校内各所"
                        description="午後も各クラス企画が続きます。午前中に回れなかった企画にもぜひ足を運んでみてください。"
                        type="event"
                    />
                    <EventCard
                        time="13:30 - 14:30"
                        title="ダンス部パフォーマンス"
                        location="体育館"
                        description="切れのあるダンスで会場を沸かせるダンス部の公演。今年のテーマは「青春」です。"
                        type="performance"
                    />
                </div>
            ),
        },
        {
            title: '15:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="15:00 - 15:30"
                        title="スペシャルゲスト登場"
                        location="中庭ステージ"
                        description="地元出身のシンガーソングライター「山田太郎」さんによるライブパフォーマンス！"
                        type="special"
                    />
                    <EventCard
                        time="15:30 - 16:30"
                        title="各クラス企画最終時間"
                        location="校内各所"
                        description="1日目最後のチャンス！気になっていた企画に参加するなら今です。"
                        type="event"
                    />
                </div>
            ),
        },
        {
            title: '16:30',
            content: (
                <EventCard
                    time="16:30 - 17:00"
                    title="1日目終了・片付け"
                    location="校内各所"
                    description="1日目お疲れ様でした！明日に向けて各クラス片付けを行います。一般来場者の皆様、ありがとうございました。"
                    type="closing"
                />
            ),
        },
    ];

    // 2日目のタイムテーブル
    const day2Schedule: TimelineEntry[] = [
        {
            title: '9:30',
            content: (
                <EventCard
                    time="9:30 - 10:00"
                    title="2日目開始準備"
                    location="校内各所"
                    description="文化祭2日目がスタート！昨日以上に盛り上がる一日にしていきましょう。各クラス最終準備を行います。"
                    type="opening"
                />
            ),
        },
        {
            title: '10:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="10:00 - 12:00"
                        title="各クラス企画開始（2日目）"
                        location="校内各所"
                        description="2日目も各クラス企画が元気にスタート！昨日の経験を活かしてさらにパワーアップした企画をお楽しみください。"
                        type="event"
                    />
                    <EventCard
                        time="10:30 - 11:30"
                        title="合唱部コンサート"
                        location="音楽室"
                        description="美しいハーモニーを奏でる合唱部による特別公演。心温まる歌声をお届けします。"
                        type="performance"
                    />
                </div>
            ),
        },
        {
            title: '12:00',
            content: (
                <EventCard
                    time="12:00 - 13:00"
                    title="昼食休憩"
                    location="校内各所"
                    description="2日目のランチタイム。人気の食べ物企画は売り切れ前にお早めに！"
                    type="break"
                />
            ),
        },
        {
            title: '13:00',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="13:00 - 14:30"
                        title="文化祭グランプリ投票開始"
                        location="校内各所"
                        description="最優秀企画を決める「文化祭グランプリ」の投票がスタート！お気に入りの企画に投票しよう。"
                        type="special"
                    />
                    <EventCard
                        time="13:30 - 14:00"
                        title="軽音部ライブ"
                        location="体育館"
                        description="今年結成された軽音部による初のライブパフォーマンス。フレッシュな演奏をお聞きください。"
                        type="performance"
                    />
                </div>
            ),
        },
        {
            title: '14:30',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="14:30 - 15:30"
                        title="お笑い芸人「厚木兄弟」ライブ"
                        location="体育館"
                        description="地元で活動するお笑い芸人「厚木兄弟」による爆笑ライブ！会場が笑いの渦に包まれます。"
                        type="special"
                    />
                    <EventCard
                        time="15:00 - 15:30"
                        title="投票締切・集計開始"
                        location="本部"
                        description="文化祭グランプリの投票が締め切られ、集計作業が開始されます。結果発表をお楽しみに！"
                        type="event"
                    />
                </div>
            ),
        },
        {
            title: '15:30',
            content: (
                <div className="space-y-6">
                    <EventCard
                        time="15:30 - 16:00"
                        title="各クラス企画終了"
                        location="校内各所"
                        description="2日間にわたる各クラス企画がいよいよ終了。皆様のご来場、ありがとうございました！"
                        type="event"
                    />
                    <EventCard
                        time="16:00 - 16:30"
                        title="閉会式・結果発表"
                        location="体育館"
                        description="文化祭グランプリの結果発表と表彰式を行います。どのクラスが栄冠を手にするでしょうか？"
                        type="special"
                    />
                </div>
            ),
        },
        {
            title: '16:30',
            content: (
                <EventCard
                    time="16:30 - 17:30"
                    title="文化祭終了・片付け"
                    location="校内各所"
                    description="厚木高校文化祭2024、ついに終了です！2日間の思い出を胸に、片付け作業を行います。来年もお楽しみに！"
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
                    厚木高校文化祭2024の詳細スケジュール。見逃したくないイベントをチェックして、充実した2日間をお過ごしください！
                </p>

                {/* Day Selector */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white dark:bg-neutral-800 rounded-full p-2 shadow-lg border border-neutral-200 dark:border-neutral-700">
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
                            {selectedDay === 1 ? '2024年10月26日（土）' : '2024年10月27日（日）'}
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
                                    <p className="text-neutral-600 dark:text-neutral-400">無料（一部企画は有料）</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">🚗</span>
                                <div>
                                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200">駐車場</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        校内駐車場をご利用ください（台数限定）
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">📱</span>
                                <div>
                                    <h4 className="font-bold text-neutral-800 dark:text-neutral-200">お問い合わせ</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">文化祭実行委員会まで</p>
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
