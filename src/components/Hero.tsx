import background from '../assets/background.jpg'
import Lottie from 'lottie-react'
import animation from '../assets/animation.json'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Hero() {
  useGSAP(()=>{
    const tl = gsap.timeline({delay:1});
    tl.from("#first",{
    x:-100,
    opacity:0,
    duration:1,
    ease:"ease-inOut",
  });
  tl.from("#third",{
    y:-200,
    opacity:0,
    duration:0.5,
    ease:"ease-inOut",
  })
    tl.from("#second",{
      x:100,
      opacity:0,
      duration:0.5,
      ease:"ease-inOut",
    })
    gsap.fromTo("#toggle",{
      y:0,
      ease:"circ.inOut",
      repeat:-1,
      duration:1,
      yoyo:true,
    },{
      y:25,
      ease:"circ.inOut",
      repeat:-1,
      duration:1,
      yoyo:true,
    })
  }
  ,[]
)

  return (
    <div className='bg-cover h-screen md:flex items-center relative -z-10' style={{backgroundImage:`url(${background})`}} >
        <div className='text-white font-family p-5 md:p-20 place-self-start'>
            <div id="first" className='md:text-7xl text-6xl font-bold'>Hello, I'm <span id="third" className='text-purple-500' >Nitin</span></div>
            <div id="second" className='text-2xl'>Software and web developer</div>
        </div>
        <div>
            <Lottie animationData={animation} />
        </div>
        <div className='flex justify-center h-15 w-7 border-4 border-slate-300 rounded-2xl absolute top-2/3 md:left-2/5 left-1/2'>
            <div id="toggle" className='w-3 h-3 rounded-full bg-slate-300 m-1' />
        </div>
    </div>
  )
}

export default Hero


