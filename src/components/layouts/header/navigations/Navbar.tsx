import { cn } from '@/lib/utils';
import { NavbarProps } from '@/types/navigation';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

import React, { useRef, useState } from 'react';

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div ref={ref} className={cn('sticky inset-x-0 top-20 z-40 w-full', className)}>
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
                    : child,
            )}
        </motion.div>
    );
};
