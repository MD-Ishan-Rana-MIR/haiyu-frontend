import AdminOverview from '@/components/admin-overview/AdminOverview'
import React from 'react'

const Page: React.FC = () => {
  return (
    <div>
      {/* overview  */}
      <div className=' h-[370px] bg-white rounded-[20px] ' >
        <div className='pt-[74px] pb-[46px] ' >
          <hr />
        </div>
        {/* service list  */}
        <div className='px-20 flex gap-x-10 ' >
          <div
            className="w-[286px] h-[183px] py-7 rounded-[10px]  "
            style={{ boxShadow: '0px 4px 6px 6px #0000001A' }}
          >
            <div className=' flex flex-col justify-center items-center space-y-1  ' >
              <span>
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_55_293)">
                    <path d="M26.0027 0.145996H4.79974C2.72232 0.145996 1.03192 1.8364 1.03192 3.91427V25.115C1.03192 27.1933 2.72187 28.8841 4.79974 28.8841H26.0027C28.0801 28.8841 29.7701 27.1937 29.7701 25.115V3.91427C29.7701 1.8364 28.0801 0.145996 26.0027 0.145996ZM24.2339 17.4606H18.346V23.348H12.4596V17.4606H6.5699V11.5696H12.4596V5.68217H18.346V11.5696H24.2339V17.4606Z" fill="#01304E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_55_293">
                      <rect width="29.0042" height="29.0042" fill="white" transform="translate(0.885559)" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              <h1 className=' textColor font-medium text-xl ' >Services</h1>
              <h1 className='textColor font-medium text-2xl' >15</h1>
              <h1 className='textColor font-medium text-[15px]' >Available Services</h1>
            </div>
          </div>
          {/* doctors  */}
          <div
            className="w-[286px] h-[183px] py-7 rounded-[10px]  "
            style={{ boxShadow: '0px 4px 6px 6px #0000001A' }}
          >
            <div className=' flex flex-col justify-center items-center space-y-1  ' >
              <span>
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_55_293)">
                    <path d="M26.0027 0.145996H4.79974C2.72232 0.145996 1.03192 1.8364 1.03192 3.91427V25.115C1.03192 27.1933 2.72187 28.8841 4.79974 28.8841H26.0027C28.0801 28.8841 29.7701 27.1937 29.7701 25.115V3.91427C29.7701 1.8364 28.0801 0.145996 26.0027 0.145996ZM24.2339 17.4606H18.346V23.348H12.4596V17.4606H6.5699V11.5696H12.4596V5.68217H18.346V11.5696H24.2339V17.4606Z" fill="#01304E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_55_293">
                      <rect width="29.0042" height="29.0042" fill="white" transform="translate(0.885559)" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              <h1 className=' textColor font-medium text-xl ' >Doctors</h1>
              <h1 className='textColor font-medium text-2xl' >42</h1>
              <h1 className='textColor font-medium text-[15px]' >Available Professionals</h1>
            </div>
          </div>
          {/* users  */}
          <div
            className="w-[286px] h-[183px] py-7 rounded-[10px]  "
            style={{ boxShadow: '0px 4px 6px 6px #0000001A' }}
          >
            <div className=' flex flex-col justify-center items-center space-y-1  ' >
              <span>
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_55_293)">
                    <path d="M26.0027 0.145996H4.79974C2.72232 0.145996 1.03192 1.8364 1.03192 3.91427V25.115C1.03192 27.1933 2.72187 28.8841 4.79974 28.8841H26.0027C28.0801 28.8841 29.7701 27.1937 29.7701 25.115V3.91427C29.7701 1.8364 28.0801 0.145996 26.0027 0.145996ZM24.2339 17.4606H18.346V23.348H12.4596V17.4606H6.5699V11.5696H12.4596V5.68217H18.346V11.5696H24.2339V17.4606Z" fill="#01304E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_55_293">
                      <rect width="29.0042" height="29.0042" fill="white" transform="translate(0.885559)" />
                    </clipPath>
                  </defs>
                </svg>

              </span>
              <h1 className=' textColor font-medium text-xl ' >Users</h1>
              <h1 className='textColor font-medium text-2xl' >1,248</h1>
              <h1 className='textColor font-medium text-[15px]' >Registered Users</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-6  ' >
          <AdminOverview></AdminOverview>
        </div>
    </div>
  )
}

export default Page