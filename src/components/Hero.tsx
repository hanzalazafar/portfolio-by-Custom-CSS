import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/profilepic.jpg)]  bg-cover container right-0  '
    style={{ backgroundSize:"35%" ,backgroundPosition:"left 20px top 90px"}}
    >
     <Navbar />
     <div className='container left-0 grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[110px]  mt-28 ml-5 font-bold leading-tight flex justify-center items-center'>
            <div >
                <p  data-aos='flip-up'className='text-purple-950'> Hello <br />I am</p>
                <p  data-aos='flip-up'>Hanzala</p>
                
            </div>
        </div>
     </div>
    </div>
  )
}

export default Hero;