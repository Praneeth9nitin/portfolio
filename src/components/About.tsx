import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about_me } from './content'
import gsap from 'gsap'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

function About() {
  
    useGSAP(()=>{
        gsap.from('.about',{
            x:100,
            opacity:0,
            duration:1,
            stagger:0.5,
            scrollTrigger:{
                trigger:'.about',
                start:'top 120%',
                end:'bottom 20%',
            },
            ease:'ease-inOut',
        })
    },[])

  return (
    <div id='about' className='bg-back text-white font-family md:p-20 p-10 grid grid-row-3 grid-cols-3'>
        <div id='about1' className='about col-span-2 md:text-5xl text-3xl text-slate-400'>My</div>
        <div id='about2' className='about col-span-2 md:text-7xl text-5xl font-bold md:py-5' >Overview.</div>
        <div id='about3' className='about md:col-span-2 col-span-3 text-slate-400 md:text-lg'>{about_me}</div>
    </div>
  )
}

export default About
