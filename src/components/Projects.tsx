import { projects } from "./content"

function Projects() {
    

    return(
        <div id="work" className="bg-back text-white font-family md:p-20 p-10 grid grid-row-3 grid-cols-3">
            <div className='about col-span-2 md:text-5xl text-3xl text-slate-400'>My Work</div>
            <div className='about col-span-2 md:text-7xl text-5xl font-bold pb-2 md:py-5'>Projects.</div>
            <div className='about md:col-span-2 col-span-3 text-slate-400 md:text-lg'>{projects.content}</div>
        </div>
    )
}

export default Projects