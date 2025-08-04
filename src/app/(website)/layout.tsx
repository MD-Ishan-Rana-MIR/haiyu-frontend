
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const layout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar></Navbar>

            <div className='bg-[#F5F7FA] min-h-[calc(100vh-82px)]' >
                {
                    children
                }
            </div>
            <Footer></Footer>

        </>

    )
}

export default layout

