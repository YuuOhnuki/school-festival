'use client';
import { cn } from '@/lib/utils';
import { NavItemsProps } from '@/types/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react';

// NavItemsPropsにcurrentPathを追加
interface NavItemsWithCurrentPathProps extends NavItemsProps {
    currentPath: string;
}

// NavItemsコンポーネントがcurrentPathを受け取るように変更
export const NavItems = ({ items, className, onItemClick, currentPath }: NavItemsWithCurrentPathProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2',
                className,
            )}
        >
            {items.map((item, idx) => {
                const isActive = currentPath === item.link;

                return (
                    <Link
                        onMouseEnter={() => setHovered(idx)}
                        onClick={onItemClick}
                        className={`relative px-4 py-2 text-neutral-600 dark:text-neutral-300 ${
                            isActive ? 'text-primary underline font-bold' : ''
                        }`}
                        key={`link-${idx}`}
                        href={item.link}
                    >
                        {/* ホバーとアクティブ状態の両方を考慮してハイライト */}
                        {(hovered === idx || isActive) && (
                            <motion.div
                                layoutId="hovered"
                                className={`absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800 ${
                                    isActive ? 'opacity-100' : 'opacity-0' // アクティブな場合は常に表示
                                }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hovered === idx ? 1 : 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-20">{item.name}</span>
                    </Link>
                );
            })}
        </motion.div>
    );
};
