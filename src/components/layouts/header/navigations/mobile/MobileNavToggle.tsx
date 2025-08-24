'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

/**
 * @description
 * モバイルナビゲーションの開閉を切り替えるトグルボタンコンポーネント。
 * デジタル庁のウェブサイトのスタイルを模倣しています。
 *
 * @param {boolean} isOpen - ナビゲーションメニューが開いているかどうか。
 * @param {Function} onClick - ボタンがクリックされたときに実行される関数。
 * @param {string} [ariaControls] - コントロールする要素のID。アクセシビリティのために使用されます。
 */
export const MobileNavToggle = ({
    isOpen,
    onClick,
    ariaControls,
}: {
    isOpen: boolean;
    onClick: () => void;
    ariaControls: string;
}) => {
    // SVGアイコンのパスを定義
    const menuIconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 6v1h18V6Zm0 5v1h18v-1Zm0 5v1h18v-1Z" fill="currentColor"></path>
        </svg>
    );

    const closeIconSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m18.029 5.07-5.87 5.87-5.797-5.8-1.06 1.06 5.797 5.8-5.798 5.798 1.06 1.06 5.799-5.797 5.869 5.869 1.06-1.061L13.22 12l5.87-5.869-1.061-1.06Z"
                fill="currentColor"
            ></path>
        </svg>
    );

    return (
        <button
            id="header-dropdown-toggle"
            onClick={onClick}
            aria-label={isOpen ? '閉じる' : 'メニュー'}
            aria-expanded={isOpen}
            aria-controls={ariaControls}
            type="button"
            className={cn(
                'flex items-center gap-2 p-2 rounded-lg text-neutral-800 dark:text-neutral-200 transition-colors',
                'border border-neutral-200 dark:border-neutral-800',
                'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                'group', // アイコンとテキストのホバー状態を管理するためのグループ
            )}
        >
            <span className="relative flex items-center justify-center h-6 w-6">
                {/* 開いている場合はクローズアイコン、閉じている場合はメニューアイコンを表示 */}
                <motion.div
                    initial={{ opacity: 0, rotate: isOpen ? -45 : 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -45 }}
                    className={cn('absolute transition-opacity duration-200', isOpen ? 'opacity-100' : 'opacity-0')}
                >
                    {closeIconSvg}
                </motion.div>
                <motion.div
                    initial={{ opacity: isOpen ? 0 : 1 }}
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    className={cn('absolute transition-opacity duration-200', isOpen ? 'opacity-0' : 'opacity-100')}
                >
                    {menuIconSvg}
                </motion.div>
            </span>

            {/* テキストラベル */}
            <span className="text-sm font-medium">{isOpen ? '閉じる' : 'メニュー'}</span>
        </button>
    );
};

export default MobileNavToggle;
