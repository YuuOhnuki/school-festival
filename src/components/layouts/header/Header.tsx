'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation'; // usePathnameをインポート
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
        {
            name: 'ホーム',
            link: '/',
        },
        {
            name: 'プロジェクト',
            link: '/projects',
        },
        {
            name: '商品',
            link: '/products',
        },
        {
            name: 'タイムテーブル',
            link: '/timetable',
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // 現在のパスを取得

    return (
        <div className="sticky top-0 z-1">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    {/* ナビゲーションアイテムをレンダリング */}
                    {/* 現在のパスをpropsとして渡す */}
                    <NavItems items={navItems} currentPath={pathname} />
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`relative text-neutral-600 dark:text-neutral-300 ${
                                    pathname === item.link ? 'text-blue-500 font-bold' : ''
                                }`}
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
