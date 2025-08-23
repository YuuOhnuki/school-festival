import { cn } from '@/lib/utils';
import { MobileNavProps } from '@/types/navigation';
import { motion } from 'motion/react';
import React from 'react';

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? 'blur(10px)' : 'none',
                boxShadow: visible
                    ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
                    : 'none',
                width: visible ? '90%' : '100%',
                paddingRight: visible ? '12px' : '0px',
                paddingLeft: visible ? '12px' : '0px',
                borderRadius: visible ? '4px' : '2rem',
                y: visible ? 20 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden',
                visible && 'bg-white/80 dark:bg-neutral-950/80',
                className,
            )}
        >
            {children}
        </motion.div>
    );
};
