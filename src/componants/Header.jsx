import React from 'react'


const Header = () => {
  return (
    <>
    <div className='b-image flex items-center flex-col bg-white'>
      <header className='w-full flex justify-between items-center h-27 bg-opacity-30 px-20 border fixed z-30'>
        <img src="src/images/Osumare Logo-01.png" alt="" className='w-[172px] h-[100px]'/>
        <div className=' border h-11  py-4  px-20 rounded-3xl flex text-center items-center'>
          Contact Us
        </div>
        
      </header>
      <div className='absolute h-[120vh] flex flex-col justify-center items-center gap-5'>
        <div className='text-5xl font-medium tracking-tight text-center  '>Elevate <span className='text-blue-500 font-bold'>Real Estate Success</span> with <br />
        Osumare's Digital Expertise</div>
        <p className='text-xl'>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
       
        <button className='border-2 border-blue-500 text-white py-2 px-30 rounded-full bg-blue-500 text-white'>Get Strarted</button>
        

      </div>
       
      <div className='w-full  relative flex justify-end  items-start'>
      <img src="src\images\Ellipse 190.png" alt="" />
      </div>
      
    </div>
    <div className=''>
      <div className='w-full   flex justify-center items-center'>
        <img className=' absolute w-[796px] h-[538px]' src="src\images\Header image.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Header