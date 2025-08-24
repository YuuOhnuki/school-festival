// src/data/timetable-data.ts

import { TimelineGroup } from '@/types/timetable';

export const day1ScheduleData: TimelineGroup[] = [
    {
        time: '9:00',
        events: [
            {
                time: '9:10 - 9:25',
                title: '開会式',
                location: '中庭ステージ',
                description: '開会式の説明。',
                type: 'opening',
            },
            {
                time: '9:35 - 9:45',
                title: '有志バンド',
                location: '中庭ステージ',
                description: '有志バンドの説明。',
                type: 'band',
            },
        ],
    },
    {
        time: '10:00',
        events: [
            {
                time: '10:15 - 10:30',
                title: 'ダンス①',
                location: '中庭ステージ',
                description: '有志団体',
                type: 'dance',
            },
            {
                time: '10:40 - 10:55',
                title: 'ダンスドリル部',
                location: '中庭ステージ',
                description: 'ダンスドリル部の説明',
                type: 'dance',
            },
        ],
    },
    {
        time: '11:00',
        events: [
            {
                time: '11:05 - 11:30',
                title: '歌うま選手権',
                location: '中庭ステージ',
                description: '歌うま選手権の説明。',
                type: 'event',
            },
            {
                time: '11:40 - 12:10',
                title: 'ハモネプ',
                location: '中庭ステージ',
                description: 'ハモネプの説明。',
                type: 'event',
            },
        ],
    },
    {
        time: '12:00',
        events: [
            {
                time: '12:20 - 12:55',
                title: 'ダンス②③',
                location: '新体育館',
                description: 'ダンス②③の説明。',
                type: 'dance',
            },
        ],
    },
    {
        time: '13:00',
        events: [
            {
                time: '13:10 - 13:50',
                title: 'A-1グランプリ',
                location: '中庭ステージ',
                description: 'A-1グランプリの説明。',
                type: 'event',
            },
            {
                time: '13:40 -',
                title: '新体育館会場',
                location: '新体育館',
                description: '新体育館会場の説明。',
                type: 'preparation',
            },
        ],
    },
    {
        time: '14:00',
        events: [
            {
                time: '14:00 - 14:30',
                title: 'ダンスドリル部',
                location: '新体育館',
                description: 'ダンスドリル部の説明。',
                type: 'dance',
            },
        ],
    },
];

export const day2ScheduleData: TimelineGroup[] = [
    {
        time: '9:00',
        events: [
            {
                time: '9:10 - 9:20',
                title: '再開式',
                location: '中庭ステージ',
                description: '再開式の説明。',
                type: 'opening',
            },
            {
                time: '9:35 - 10:05',
                title: 'うでずもう',
                location: '中庭ステージ',
                description: 'うでずもうの説明。',
                type: 'event',
            },
            {
                time: '9:45 -',
                title: '新体育館会場',
                location: '新体育館',
                description: '新体育館会場の説明。',
                type: 'preparation',
            },
        ],
    },
    {
        time: '10:00',
        events: [
            {
                time: '10:20 - 10:50',
                title: '仮装',
                location: '中庭ステージ',
                description: '仮装の説明。',
                type: 'dance',
            },
            {
                time: '10:40 - 10:55',
                title: '吹奏楽部部',
                location: '新体育館',
                description: '吹奏楽部の説明',
                type: 'performance',
            },
        ],
    },
    {
        time: '11:00',
        events: [
            {
                time: '11:10 - 11:45',
                title: 'ダンス④⑤',
                location: '中庭ステージ',
                description: 'ダンス④⑤の説明。',
                type: 'dance',
            },
            {
                time: '11:30 - 12:30',
                title: '音楽部',
                location: '新体育館',
                description: '音楽部の説明。',
                type: 'performance',
            },
        ],
    },
    {
        time: '12:00',
        events: [
            {
                time: '12:00 - 12:25',
                title: 'ニコイチグランプリ',
                location: '中庭ステージ',
                description: 'ニコイチグランプリの説明。',
                type: 'event',
            },
            {
                time: '12:35 - 12:50',
                title: 'ダンスドリル部',
                location: '中庭ステージ',
                description: 'ダンスドリル部の説明。',
                type: 'dance',
            },
        ],
    },
    {
        time: '13:00',
        events: [
            {
                time: '13:05 - 13:35',
                title: 'ボディビル',
                location: '中庭ステージ',
                description: 'ボディビルの説明。',
                type: 'event',
            },
            {
                time: '13:40 - 14:15',
                title: '未成年の主張',
                location: '東側渡り廊下',
                description: '未成年の主張の説明。',
                type: 'event',
            },
        ],
    },
    {
        time: '14:00',
        events: [
            {
                time: '14:30 - 14:40',
                title: '閉祭式',
                location: '中庭ステージ',
                description: '閉祭式の説明。',
                type: 'closing',
            },
        ],
    },
];
