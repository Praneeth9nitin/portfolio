import { useState } from "react";
import { projects } from "./content"
import github from "../assets/github.svg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function ProjectsLink() {
    const [active, setActive] = useState("");
    useGSAP(()=>{
        gsap.from(".main",{
            y: -200,
            opacity: 0,
            scrollTrigger:{
                trigger: ".main",
                start: "top 80%",
                end: "top 60%",
                markers: false,
            },
            stagger: 0.2,
        })
    },[])

    return (
        <div className="bg-back flex md:flex-row flex-col items-center justify-center gap-0 md:px-10 p-5 main text-black font-family ">
            {projects.projects.map((project, index) =>
                <a href={project.deployLink} target="_blank" key={index} className="m-5 flex flex-col-reverse rounded-2xl relative image md:p-1 p-0.5 bg-linear-to-b to-purple-600 via-cyan-300 from-green-200 cursor-pointer shadow-card" onMouseEnter={()=>setActive(project.title)} onMouseLeave={()=>setActive("")}>
                    <div className= {`md:absolute visible top-10 md:top-0 bg-white flex flex-col h-full hover:backdrop-blur-xs hover:visible md:invisible animation-all duration-300 ease-in-out md:rounded-2xl rounded-b-2xl text-center p-5 ${(active==project.title) ? "md:visible" : "invisible"}` }>   
                    <div className="md:text-2xl font-bold flex justify-between items-center pb-3"><span>{project.title}</span><a href={project.git} target="_blank"><img src={github} width={40} alt="" /></a></div>
                    <div className="text-sm">{project.description}</div>
                    <div>{project.deployedStatus}-{project.type}</div>
                    </div>
                    <img src={project.img} className="md:rounded-2xl rounded-t-2xl" alt="" />
                </a>
            )}
        </div>
    )
}

export default ProjectsLink