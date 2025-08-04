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
    { label: 'About Us', href: '/dashboard/settings/about-us', icon: <Info size={30} /> },
    { label: 'Data Privacy', href: '/dashboard/settings/data-privacy', icon: <Info size={30} /> },
    { label: 'Terms & Conditions', href: '/dashboard/settings/terms&condictions', icon: <Info size={30} /> },
  ]

  return (
    <div className="">
      <div className="pt-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center text-white px-4 py-3.5 my-6 transition ${pathname === item.href ? 'bg-[#C51516]' : ''
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
          className={`flex items-center justify-between w-full px-4 py-3.5 my-6 transition ${pathname?.startsWith('/dashboard/settings') ? '' : ''
            }`}
        >
          <div className="ml-10 gap-x-4 flex items-center">
            <Settings size={30} className='text-white' />
            <span className="text-xl text-white cursor-pointer font-semibold">Settings</span>
          </div>
          <span className="mr-4 cursor-pointer ">
            {settingsOpen ? <ChevronUp className=' text-white ' size={16} /> : <ChevronDown className=' text-white ' size={16} />}
          </span>
        </button>

        {/* Settings submenu */}
        {settingsOpen && (
          <div className=" ml-11 -mt-4  ">
            {settingSubItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-white gap-3 px-2 py-3.5 my-5 transition ${pathname === item.href ? 'bg-[#C51516]' : ''
                  }`}
              >
                {item.icon}
                <span className="text-lg font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>


      {/* logout button  */}
      <div className='ml-5 bg-[#C5151680] w-[293px] px-4 py-5 rounded-[11px] flex flex-row items-center justify-between mt-[55%]   ' >
        <div className=' flex flex-row items-center gap-x-1.5 ' > 
          <div className=' w-9 h-9 flex items-center justify-center rounded-full bg-[#81424a]  ' >
            <p className=' text-[16px] font-semibold text-white  ' >
              LN
            </p>

          </div>
          <div>
            <h1 className=' text-white text-xl font-semibold ' >Liam Nickson</h1>
          </div>
        </div>

        <div>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 17L21 12M21 12L16 7M21 12H9M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </span>
        </div>

      </div>

    </div>
  )
}

export default Sidebar
