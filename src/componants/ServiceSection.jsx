import React from 'react'
import Card from './Card'

const ServiceSection = () => {
  return (
    <>
    <div className='h-screen flex justify-center items-center mt-50'>
        <div>
            <div className=' m-30'>
                <div className='flex flex-col gap-5 text-center'>
                    <div className=''>
                    <div className='text-2xl font-bold tracking-tight'>Our Service Offerings</div>
                    <p className='text-xl'>Strategies that Drive Property Market Excellence</p>
                    </div>
                    <div className='flex gap-5'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>
                    <br />
                    <div className='flex gap-5'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>
                    <div className='w-full'>
                    <button className='border-2 border-blue-500 text-white py-2 px-30 rounded-full bg-blue-500 text-white'> Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default ServiceSection