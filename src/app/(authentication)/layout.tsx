import React from 'react'

const layout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className=' bg-[#F5F7FA] min-h-[calc(100vh-82px)] ' >
            {
                children
            }
        </div>
    )
}

export default layout

