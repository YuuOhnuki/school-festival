'use client';
import { useState } from 'react';
import { Navbar } from './navigations/Navbar';
import { NavBody } from './navigations/NavBody';
import { NavbarLogo } from './navigations/NavbarLogo';
import { NavItems } from './navigations/NavItems';
import { MobileNav } from './navigations/mobile/MobileNav';
import { MobileNavHeader } from './navigations/mobile/MobileNavHeader';
import { MobileNavToggle } from './navigations/mobile/MobileNavToggle';
import { MobileNavMenu } from './navigations/mobile/MobileNavMenu';

export function Header() {
    const navItems = [
        {
            name: 'Projects',
            link: '/projects',
        },
        {
            name: 'Products',
            link: '/products',
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-1">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
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
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
