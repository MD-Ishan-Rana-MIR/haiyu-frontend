'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)'); // lg breakpoint

        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsOpen(false); // Close sidebar on desktop
            }
        };

        // Initial check
        handleResize();

        // Listen for changes
        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    return (
        <>
            <header className="w-full bg-white shadow-sm z-50 relative">
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
                        <Link href="/">{t('home')}</Link>
                        <Link href="/service">{t('service')}</Link>
                        <Link href="/doctor">{t('doctor')}</Link>
                        <Link href="/clinics">{t('clinics')}</Link>
                        <Link href="/about-us">{t('about-us')}</Link>
                        <Link href="/contact-us">{t('contact-us')}</Link>
                        <Link href="/saved-clinic">{t('saved-clinic')}</Link>
                        <LanguageSwitcher   />
                    </nav>

                    {/* Auth & Menu */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">

                            <Link className='font-semibold textColor' href={"/registration"}>
                                {
                                    t("Registration")
                                }
                            </Link>
                        </div>

                        {/* Hamburger Icon for Mobile */}
                        <div className="lg:hidden">
                            <button className=' cursor-pointer ' onClick={toggleSidebar} aria-label="Open menu">
                                <AiOutlineMenu size={26} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button className=' cursor-pointer ' onClick={toggleSidebar} aria-label="Close menu">
                        <AiOutlineClose size={24} />
                    </button>
                </div>

                <nav className="flex flex-col space-y-4 p-4 text-base font-medium text-gray-800">
                    <Link href="/" onClick={toggleSidebar}>
                        {t('home')}
                    </Link>
                    <Link href="/service" onClick={toggleSidebar}>
                        {t('service')}
                    </Link>
                    <Link href="/doctor" onClick={toggleSidebar}>
                        {t('doctor')}
                    </Link>
                    <Link href="/clinics" onClick={toggleSidebar}>
                        {t('clinics')}
                    </Link>
                    <Link href="/about-us" onClick={toggleSidebar}>
                        {t('about-us')}
                    </Link>
                    <Link  href="/contact-us" onClick={toggleSidebar}>
                        {t('contact-us')}
                    </Link>
                    <Link  href="/saved-clinic" onClick={toggleSidebar}>
                        {t('saved-clinic')}
                    </Link>
                    <LanguageSwitcher toggleSidebar = {toggleSidebar} />
                    <hr />
                    <Link onClick={toggleSidebar} className='font-semibold textColor' href={"/registration"}>
                        {
                            t("Registration")
                        }
                    </Link>
                </nav>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 cursor-pointer bg-opacity-40 z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
};

export default Navbar;
