import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:max-10'>
        <div className='flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start'>
            <h1 className='text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline'>
            <span className='-ml-3'>👋</span>
            Hello I'm Ayush Uniyal, I'm a {" "}
            <span className='block text-[27px] mt-2 highlight md:text-[45px] md:inline md:mt-0'>Software Engineer</span>
            </h1>
            <p className='text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0'>
                I'm obsessed with code and helping startups create unique and helpful products.
            </p>
            <a href="mailto:ayushu8532@gmail.com" className='self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6'>Lets Connect{" "}
            <ArrowForwardIcon/>
            </a>
        </div>
        <div >
            <Image src="/images.jpeg" alt="my image" width={372} height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'/>
            <Image src="/images.jpeg" alt="my image" width={372} height={430} className='hidden md:block w-[372px] h-[430px] absolute right-0 -z-10'/>
            <Image src="/grid.png" alt="my image" width={357} height={417} className='hidden md:block min-w-[357px] h-[417px] mr-[7.7px] my-[6.5px]z-10'/>
 

  
        </div>
    </section>
  )
}

export default Hero