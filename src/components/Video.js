import React from 'react'


function Video() {
    const videoId="pCfoyFE4Zk0"
  return (
    <section className='relative'>
        
        <iframe className='w-full h-[300px]' title="frame" src={`https://www.youtube.com/embed/${videoId}`}/>
        <div className='absolute top-20 left-5 lg:top-52 lg:left-96 text-white text-3xl font-bold'> A Cup a Day for a Probiotic Boost</div>
        
        
       
    </section>
  )
}

export default Video