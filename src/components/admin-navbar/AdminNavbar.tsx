import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AdminNavbar: React.FC = () => {
    return (
        <div className="sticky top-0 z-50 bg-white shadow">
            {/* logo */}
            <div className="px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="w-[347px]">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/image/logo/logo.png"
                                    width={1000}
                                    height={1000}
                                    alt="logo"
                                    className="w-28 h-18 object-contain"
                                />
                                <h1 className="text-2xl font-extrabold textColor">
                                    Med<span className="text-[#E74C3C]">gogo</span>
                                </h1>
                            </Link>
                        </div>
                        <div className="ml-20">
                            <h1 className="textColor lg:text-3xl text-xl font-semibold">
                                Super Admin
                            </h1>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/image/logo/admin-image.jpg"
                            width={2000}
                            height={2000}
                            alt="admin"
                            className="w-12 h-12 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;
