import ProjectCard from "../components/projectCard";


export default function ProjectCardsView({listofProjects}: {listofProjects: Project[]}){
    
    return(
        <div className="flex flex-row flex-wrap gap-4 p-4 justify-center w-full">
        {listofProjects && listofProjects.map( (project: Project) => (
            <div  key={project.name} className="w-full lg:w-1/4">
            <ProjectCard key={project.name} projectDetails={project} />
            </div>
        ))}
        </div>

    )
}