'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen((prev) => !prev);

    // Close sidebar on large screens & lock scroll on mobile
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsOpen(false);
            }
        };

        handleResize();
        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const navLinks = [
        { href: '/', label: t('home') },
        { href: '/service', label: t('service') },
        { href: '/doctor', label: t('doctor') },
        { href: '/clinics', label: t('clinics') },
        { href: '/about-us', label: t('about-us') },
        { href: '/contact-us', label: t('contact-us') },
        { href: '/saved-clinic', label: t('saved-clinic') },
    ];

    return (
        <>
            {/* Navbar */}
            <header className="w-full bg-[#f5f7fa] z-50 relative shadow-sm">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/image/logo/logo.png"
                            width={1000}
                            height={1000}
                            alt="logo"
                            className="w-16 h-14 object-contain"
                        />
                        <h1 className="text-2xl font-extrabold textColor">
                            Med<span className="text-[#E74C3C]">gogo</span>
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6 text-base font-semibold textColor">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                        <LanguageSwitcher />
                    </nav>

                    {/* Auth + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <Link href="/login" className="font-semibold textColor">
                                {t('Login')}
                            </Link>
                        </div>
                        <div className="lg:hidden">
                            <button
                                onClick={toggleSidebar}
                                aria-label="Open menu"
                                className="text-black"
                            >
                                <AiOutlineMenu size={26} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-md transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button
                        onClick={toggleSidebar}
                        aria-label="Close menu"
                        className="text-black cursor-pointer "
                    >
                        <AiOutlineClose size={24} />
                    </button>
                </div>

                <nav className="flex flex-col space-y-4 p-4 text-base font-medium text-gray-800">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={toggleSidebar}
                            className="hover:text-red-500"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitcher toggleSidebar={toggleSidebar} />
                    <hr />
                    <Link
                        href="/registration"
                        onClick={toggleSidebar}
                        className="font-semibold textColor hover:text-red-500"
                    >
                        {t('Login')}
                    </Link>
                </nav>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Navbar;
