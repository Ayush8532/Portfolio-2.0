import React from 'react'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import LayersIcon from '@mui/icons-material/Layers';
import MergeIcon from '@mui/icons-material/Merge';


const TopBackground = ()=> {
  return (
   <>
   <div className='absolute  w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10  '>
   <div className='w-full h-full relative'>
    <div className='circle-icon top-0 left-[171px] md:top-28 md:left-72'>
      <RocketLaunchIcon  sx={{ fontSize: 30 }} className='text-sky-500  '/>
    </div>
    <div className='circle-icon top-[162px] left-5 md:top-64 md:left-0'>
      <DataObjectIcon sx={{ fontSize: 30 }}  className='text-green-700'/>
    </div>
    <div className='circle-icon top-60 left-[149px] md:top-[570] md:left-44'>
      <GitHubIcon sx={{ fontSize: 30 }}  className='text-red-800'/>
    </div>
    <div className=' hidden md:circle-icon md:top-[592px] md:left-[608px]'>
      <OfflineBoltIcon sx={{ fontSize: 30 }}  className='text-purple-900'/>
    </div>
    <div className=' hidden md:circle-icon md:top-[158px] md:left-[606px]'>
      <MergeIcon sx={{ fontSize: 30 }}   className='text-red-500'/>
    </div>
    <div className='hidden md:circle-icon  md:top-[368px] md:left-[965px]'>
      <LayersIcon sx={{ fontSize: 30 }}   className='text-yellow-600'/>
    </div>
   </div>
   </div>
   <img src="/images.jpeg" alt="" width={860} height={877} className='absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2 opacity-10 rounded-b-full' />
   <img src="/images.jpeg" alt="" width={429} height={465} className='absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2 opacity-10 rounded-full' />
   <div className='absolute top-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] hidden dark:hidden md:block backgroundImage'></div>
   <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[auto_auto] dark:hidden md:hidden backgroundImage'></div>
   <div className='absolute top-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] hidden md:dark:block darkBgImage'></div>
   <div className='absolute top-0 w-full h-[795px] bg-repeat-x bg-[auto_auto] hidden dark:block dark:md:hidden darkBgImage'></div>
   </>
  )
}

export default TopBackground