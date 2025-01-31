import React from 'react'

const Card = () => {
  return (
    <div>
        <div className='w-full max-w-[300px] mx-auto p-10 rounded-md shadow-lg bg-white m-5'>
            <div className='flex items-center space-x-4 flex-col'>
                <img className='w-10 h-10 rounded-full' src='src\images\Group 117.png' alt='' />
                <div className=''>
                    <h3 className='text-xl font-semibold'>Card Title</h3>
                    <p className='text-gray-500 text-xs '>
                        Drive Your Success with Automotive
                        SEO: Ignite Online Visibility and Outrace
                        the Competition, Accelerate Your
                        Business Growth Today
                        </p>
                </div>
            </div>
           
        </div>

    </div>
  )
}

export default Card