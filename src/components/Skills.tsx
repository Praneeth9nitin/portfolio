import {Tilt} from 'react-tilt'
import { skills } from './content'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Skills() {
    useGSAP(()=>{
        gsap.from('.items',{
            x: -100,
            opacity: 0,
            scrollTrigger:{
                trigger: '.items',
                start: 'top 80%',
                end: 'top 60%',
                markers: false,
            },
            stagger: 0.2,
        })
    },[])
  return (
    <div className=' bg-back text-white md:grid-cols-6 md:grid-rows-2 grid grid-cols-2'>
        {skills.map((skill, index)=>
            <Tilt key={index} className='items row-span-1 p-0.5 bg-linear-to-b to-purple-600 via-cyan-300 from-green-200 m-7 rounded-2xl ' >
                <div className='w-full h-full bg-back-2 shadow-card flex flex-col items-center py-10 rounded-xl'>
                <img src={`${skill.img}`} alt="" />
                <div>{skill.name}</div>
                </div>
            </Tilt>
        )}
    </div>
  )
}

export default Skills