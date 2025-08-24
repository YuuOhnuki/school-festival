'use client';

import { cn } from '@/lib/utils';
import { MobileNavMenuProps } from '@/types/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import React, { useEffect, useRef } from 'react';

// プロパティに id を追加
export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // メニューが開いたときに、最初のリンクにフォーカスを当てる
            const firstFocusableElement = menuRef.current?.querySelector('a') as HTMLElement;
            firstFocusableElement?.focus();
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={menuRef}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        'fixed inset-x-0 top-16 z-50 flex w-full flex-col items-center justify-center gap-4 px-4 py-8 bg-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
                        className,
                    )}
                >
                    <nav aria-label="モバイルナビゲーションメニュー">
                        <ul className="flex flex-col items-center justify-center">
                            {React.Children.map(children, (child, index) => (
                                <li key={index} className="w-full py-2">
                                    {child}
                                    {index < React.Children.count(children) - 1 && <Separator />}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
