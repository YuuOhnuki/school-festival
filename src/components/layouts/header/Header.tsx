'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './navigations/Navbar';
import { NavBody } from './navigations/NavBody';
import { NavbarLogo } from './navigations/NavbarLogo';
import { NavItems } from './navigations/NavItems';
import { MobileNav } from './navigations/mobile/MobileNav';
import { MobileNavHeader } from './navigations/mobile/MobileNavHeader';
import { MobileNavToggle } from './navigations/mobile/MobileNavToggle';
import { MobileNavMenu } from './navigations/mobile/MobileNavMenu';
import Link from 'next/link';

export function Header() {
    const navItems = [
        { name: 'ホーム', link: '/' },
        { name: 'お店', link: '/projects' },
        { name: '商品', link: '/products' },
        { name: 'タイムテーブル', link: '/timetable' },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const mobileMenuId = 'mobile-menu';

    // メニューを開閉するハンドラー
    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-10">
            <Navbar>
                {/* デスクトップ用ナビゲーション */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} currentPath={pathname} />
                </NavBody>

                {/* モバイル用ナビゲーション */}
                <MobileNav visible={isMobileMenuOpen}>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle isOpen={isMobileMenuOpen} onClick={handleToggle} ariaControls={mobileMenuId} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={handleToggle}>
                        {navItems.map((item) => (
                            <Link
                                key={item.link}
                                href={item.link}
                                onClick={handleToggle}
                                aria-current={pathname === item.link ? 'page' : undefined}
                                className={`text-center text-lg font-medium py-2 px-4 w-full transition-colors rounded-md outline-none focus-visible:outline-4 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                                    pathname === item.link
                                        ? 'text-blue-500 dark:text-blue-400'
                                        : 'text-neutral-600 dark:text-neutral-300 hover:text-blue-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                }`}
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    );
}
