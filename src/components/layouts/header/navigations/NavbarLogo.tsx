import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

export const NavbarLogo = () => {
    return (
        <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
            <Image src="https://assets.aceternity.com/logo-dark.png" alt="logo" width={30} height={30} />
            <span className="font-medium text-black dark:text-white">Startup</span>
        </Link>
    );
};
