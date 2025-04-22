import ProjectCard from "../components/projectCard";


export default function ProjectCardsView({listofProjects}: {listofProjects: Project[]}){
    
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 w-full items-start">
        {listofProjects && listofProjects.map( (project: Project) => (
            <div  key={project.name} className="h-full">
            <ProjectCard key={project.name} projectDetails={project} />
            </div>
        ))}
        </div>

    )
}