import Lottie from 'lottie-react'
import animation from '../assets/contact.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
gsap.registerPlugin(ScrollTrigger)

//template_6ki40li
//service_ok8dwrc
//5L7GPdbRukb8mL6-p

function Contact() {

  const [form,setform] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading,setLoading] = useState(false)

  useGSAP(()=>{
    gsap.from('.form',{
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "in-out",
      scrollTrigger: {
        trigger: '.form',
        start: 'top 80%',
        end: 'top 50%',
      }
    })
    gsap.from('.lottie',{
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "in-out",
      scrollTrigger: {
        trigger: '.lottie',
        start: 'top 80%',
        end: 'top 50%',
      }
    })
  },[])

  const handleSubmit = (e:any) => {
    if(!form.name || !form.email || !form.message){
      alert('Please fill all the fields')
      return
    }
    e.preventDefault()
    setLoading(true)

    try{
      emailjs.send(
        'service_xf7sf05',
        'template_4q2q9ic',
        {
          from_name: form.name,
          to_name: 'Nitin',
          from_email: form.email,
          to_email:"nitinkumariit4@gmail.com",
          message: form.message,
        },
        '5L7GPdbRukb8mL6-p'
      ).then(()=>{
        setLoading(false)
        alert('Thank you for your message! I will get back to you as soon as possible.')
        setform({
          name: '',
          email: '',
          message: ''
        })
      })
    } catch(err){
      setLoading(false)
      alert('Something went wrong. Please try again later.')
    }
  }

  return (
    <div id='contact' className='flex md:flex-row flex-col-reverse justify-center items-center'>
      <div className='flex flex-col justify-center items-center md:w-2/3 mt-10'>
      <div className="bg-back-2 backdrop-blur-3xl md:w-2/3 md:p-10 p-5 text-white form rounded-2xl" >
        <div className='md:py-5 md:text-7xl text-5xl font-extrabold'>Contact.</div>
        <div className='w-full text-lg py-5' >
            <div className='py-2'>Your Name</div>
            <input type="text" className="shadow-2xl w-full p-3 outline-0 bg-black rounded-2xl" placeholder="what's your good name" onChange={e=>setform({...form,name:e.target.value})} />
        </div>
        <div className='w-full text-lg md:py-5'>
            <div className='py-2'>Your Email</div>
            <input type="text" className="shadow-2xl w-full p-3 outline-0 bg-black rounded-2xl" placeholder="what's your email address" onChange={e=>setform({...form,email:e.target.value})}  />
        </div>
        <div className='w-full text-lg md:py-5'>
            <div className='py-2'>Your Message</div>
            <textarea className="shadow-2xl w-full p-3 outline-0 bg-black rounded-2xl h-52" placeholder="message..." onChange={e=>setform({...form,message:e.target.value})}  />
        </div>
        <button className='text-lg bg-black p-2 px-7 rounded-2xl' onClick={handleSubmit}>{loading?"Sending...":"Send"}</button>
        <div className='flex justify-around p-2'>
          <a href="https://github.com/Praneeth9nitin" target='_blank'><img src={github} width={50} alt="" className='cursor-pointer border-2 rounded-full border-black' /></a>
          <a href="https://www.linkedin.com/in/praneethnitin/" target='_blank'><img src={twitter} width={50} alt="" className='cursor-pointer border-2 rounded-full border-black'/></a>
          <a href="https://x.com/praneeth__gupta" target='_blank'><img src={linkedin} width={50} alt="" className='cursor-pointer border-2 rounded-full border-black'/></a>
        </div>
      </div>
      </div>
      <Lottie animationData={animation} className='w-1/2 lottie'/>
    </div>
  )
}

export default Contact
