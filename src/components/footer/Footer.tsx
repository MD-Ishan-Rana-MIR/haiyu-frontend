'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className=" bg-[#2C3E50] py-14  ">
            <div className=" max-w-[1606px] mx-auto flex md:flex-row flex-col justify-between px-4 space-y-10  ">
                {/* Social Media */}
                <div>
                    <h2 className=" text-[#F5F7FA] lg:text-[35px] text-2xl font-bold ">{t("Social Media")}</h2>
                    <div className="w-[106px] h-1 bg-[#0089F9] mb-2.5"></div>
                    <div className="flex gap-4 mt-[30px] ">
                        <div className="cursor-pointer bg-[#d9d9d9] text-[#2E3E50] p-4 rounded-full hover:scale-105 transition">
                            <FaTiktok size={24} />
                        </div>
                        <div className="cursor-pointer bg-[#d9d9d9] text-[#2E3E50] p-4 rounded-full hover:scale-105 transition">
                            <FaInstagram size={24} />
                        </div>
                        <div className="cursor-pointer bg-[#d9d9d9] text-[#2E3E50] p-4 rounded-full hover:scale-105 transition">
                            <FaFacebookF size={24} />
                        </div>
                        <div className="cursor-pointer bg-[#d9d9d9] text-[#2E3E50] p-4 rounded-full hover:scale-105 transition">
                            <FaLinkedinIn size={24} />
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className=" text-[#F5F7FA] lg:text-[35px] text-2xl font-bold ">{t("Quick Links")} </h2>
                    <div className="w-[106px] h-1 bg-[#0089F9] mb-2.5"></div>
                    <div className=' mt-[30px] ' >
                        <ul className="space-y-4 text-[#d9d9d9] text-xl ">
                            <li>
                                <Link href={"/"}>{t("home")} </Link>
                            </li>
                            <li>
                                <Link href={"/service"}>{t('service')}</Link>
                            </li>
                            <li>
                                <Link href={"/doctor"}>{t('doctor')}</Link>
                            </li>
                            <li>
                                <Link href={"/clinics"}>{t("clinics")}</Link>
                            </li>
                            <li>
                                <Link href={"/about-us"}> {t('about-us')} </Link>
                            </li>
                            <li>
                                <Link href={"/saved-clinic"}>{t('saved-clinic')}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h2 className=" text-[#F5F7FA] lg:text-[35px] text-2xl font-bold ">{t("Services")}</h2>
                    <div className="w-[106px] h-1 bg-[#0089F9] mb-2.5"></div>
                    <div className='mt-[30px]' >
                        <ul className="space-y-4 text-[#d9d9d9] text-xl">
                        <li>
                            <Link href={"/cardiology"}>{t("Cardiology") }</Link>
                        </li>
                        <li>
                            <Link href={"/neurology"}>{t("Neurology")}</Link>
                        </li>
                        <li>
                            <Link href={"/orthopedics"}>{t("Orthopedics")}</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className=' max-w-[1606px] px-4 mx-auto my-12 ' >
                <hr />
            </div>

            <div className=" text-center px-4  ">
                <p className=' text-[#F5F7FA] text-xl  ' >{ t("Copyright") }</p>
            </div>
        </footer>
    );
};

export default Footer;
