import { projects } from "./content"

function ProjectsLink() {

    return (
        <div className="bg-back flex gap-0 p-20 main">
            {projects.projects.map((project, index) =>
                <div  key={index} className="h-40 m-0 image" >
                    <img src={project.img} alt="" />
                </div>
            )}
        </div>
    )
}

export default ProjectsLink