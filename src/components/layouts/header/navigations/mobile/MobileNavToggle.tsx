import { IconMenu2, IconX } from '@tabler/icons-react';

import React from 'react';

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
    return isOpen ? (
        <IconX className="text-black dark:text-white" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
    );
};
