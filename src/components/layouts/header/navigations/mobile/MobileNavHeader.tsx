import { cn } from '@/lib/utils';
import { MobileNavHeaderProps } from '@/types/navigation';

import React from 'react';

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
    return <div className={cn('flex w-full flex-row items-center justify-between', className)}>{children}</div>;
};
