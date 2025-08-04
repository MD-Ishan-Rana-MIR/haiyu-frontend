'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  User,
  Stethoscope,
  Building2,
  Settings,
  Users,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react'

const Sidebar: React.FC = () => {
  const pathname = usePathname()
  const [settingsOpen, setSettingsOpen] = useState(false)

  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: <Home size={30} /> },
    { label: 'Doctors', href: '/dashboard/doctors', icon: <User size={30} /> },
    { label: 'Services', href: '/dashboard/services', icon: <Stethoscope size={30} /> },
    { label: 'Clinics', href: '/dashboard/clinics', icon: <Building2 size={30} /> },
    { label: 'Users', href: '/dashboard/users', icon: <Users size={30} /> }
  ]

  const settingSubItems = [
    { label: 'Personal Profile', href: '/dashboard/settings/profile', icon: <User size={30} /> },
    { label: 'About Us', href: '/dashboard/settings/about', icon: <Info size={30} /> }
  ]

  return (
    <div className="">
      <div className="pt-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center text-white px-4 py-3.5 my-6 transition ${
              pathname === item.href ? 'bg-[#C51516]' : ''
            }`}
          >
            <div className="ml-10 gap-x-4 flex items-center">
              <span>{item.icon}</span>
              <span className="text-xl font-semibold">{item.label}</span>
            </div>
          </Link>
        ))}

        {/* Settings dropdown */}
        <button
          onClick={() => setSettingsOpen(!settingsOpen)}
          className={`flex items-center justify-between w-full px-4 py-3.5 my-6 transition ${
            pathname?.startsWith('/dashboard/settings') ? 'bg-[#C51516]' : ''
          }`}
        >
          <div className="ml-10 gap-x-4 flex items-center">
            <Settings size={30} />
            <span className="text-xl font-semibold">Settings</span>
          </div>
          <span className="mr-4">
            {settingsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </button>

        {/* Settings submenu */}
        {settingsOpen && (
          <div className="pl-20 space-y-1">
            {settingSubItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-2 py-3.5 transition ${
                  pathname === item.href ? 'bg-[#C51516]' : 'hover:bg-gray-700'
                }`}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
