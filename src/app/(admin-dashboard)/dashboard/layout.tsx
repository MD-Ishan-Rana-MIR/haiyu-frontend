import AdminNavbar from '@/components/admin-navbar/AdminNavbar';
import Sidebar from '@/components/sidebar/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="h-screen flex flex-col bg-[#F5F7FA]">
            {/* Top Navbar */}
            <AdminNavbar></AdminNavbar>

            {/* Main section: Sidebar + Page Content */}
            <div className="flex flex-1">
                {/* Sidebar on the left */}
                <div className=" w-[347px]  bg-[#2C3E50] border-r overflow-y-auto h-[90vh] custom-scrollbar  ">
                    <Sidebar />
                </div>

                {/* Page content */}
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
