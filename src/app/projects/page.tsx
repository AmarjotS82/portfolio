import Title from "../components/Title"
import ProjectCardsView from "./projectCardsView"
import { projects } from "./projects"

export default function ProjectPage(){
    const title = "Projects"
    const projectList: Project[] = projects
  
    return(
        <>
        <Title titleName = {title}/>
        {/* <div className="flex flex-row justify-center"> */}
            
            <ProjectCardsView listofProjects={projectList}/>
            
        {/* </div> */}

        </>
    )
}