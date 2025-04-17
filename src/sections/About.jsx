import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied]=useState(false);

    const handleCopy=()=>{
        navigator.clipboard.writeText('shashiranjankumar494@gmail.com');
        setHasCopied(true);
        setTimeout(()=>{
            setHasCopied(false);
        },2000)
    }
  return (
    <section className='c-space my-20' id='about'>
    <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain'/>
        <div>
            <p className='grid-headtext'>Hi, I'm Shashi Ranjan Kumar</p>
            <p className='grid-subtext'> A passionate full-stack developer who blends creativity with code to craft intuitive digital experiences.
            I build fast, scalable, and user-focused web apps. I love solving real-world problems through tech and constantly strive to push boundaries in both design and functionality
             </p>
        </div>
         </div>
        </div>
        <div className='col-span-1 xl:row-span-3' >
            <div className='grid-container'>
                <img src="/assets/new.png" alt='grid-2' className='w-full sm:w-[276] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>From crafting dynamic UIs with JavaScript and React to building robust backend systems with Java and Spring Boot — I work across the full stack to deliver seamless and scalable web applications.
                    </p>
                </div>
            </div>

        </div>
        <div className='col-span-1 xl:row-span-4'>
        <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                <Globe height={326}
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    labelsData={[{
                        lat:25.594095, lng:85.137566,
                        text: "I'm here!",
                        color:'white',
                        size:20,
                    }]}
                    
                />

            </div>
            <div>
                <p className='grid-headtext'>I Could Work remotely across  most timezones</p>
                <p className='grid-subtext'> I am based in India ,with remote work available</p>
                <Button name="Contact Me" isBeam containerClass='w-full mt-10'/>
            </div>
         

        </div>

        </div>

    <div className='xl:col-span-2 xl:row-span-3'>
        <div className='grid-container'>
            <img src ="/assets/grid3.png" alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
            <div ><p className='grid-headtext'>My Passion for Coding
</p>
<p className='grid-subtext'>I love solving things through code — it’s where logic meets creativity, and every challenge is a chance to build something impactful. Coding isn't just what I do, it's what drives me</p>
            </div>
        </div>
    </div>
  <div className='xl:col-span-1 xl:row-span-2'>
  <div className='grid-container'>
    <img src ="assets/grid4.png" alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
        <div className='space-y-2' >
        <p className='grid-subtext text-center' >Contact me</p>
        <div className='copy-container' onClick={handleCopy}>
            <img src={hasCopied? 'assets/tick.svg':'assets/copy.svg'} alt='copy'/>
            <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>shashiranjankumar494@gmail.com</p>
        </div>

        </div>
    </div>
  </div>

    </div></section>
  )
}

export default About
