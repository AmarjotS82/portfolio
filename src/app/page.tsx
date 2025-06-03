import { Button } from "@/components/ui/button";
import Title from "./components/Title";
import ProjectCardsView from "./projects/projectCardsView";
import { projects } from "./projects/projects";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import Link from "next/link";
import CustomButton from "./components/CustomButton";

export default function Home() {
  const introPara = `Here, you can find a showcase of my projects, skills, and my journey as an aspiring software
                    engineer!`
  
  const projectsOverviewList: Project[] = projects.slice(0, 3);     
  
  
  return (
    <>
    <Title titleName = {"Welcome!"}/>
    <div className="flex flex-col">
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-row lg:w-1/2 w-full">
          <p className="text-lg m-4 font-medium">{introPara}</p>
        </div>
      </div>

      <div className="flex flex-row w-full justify-center">
        <CustomButton text="Download my resume" icon={<IoMdDownload className="text-2xl  mt-0.5"/>}/>
      </div>
      <div className="flex flex-col w-full items-center mt-4">
        <h1 className="text-3xl mb-4 font-semibold">Projects</h1>
        
        <ProjectCardsView listofProjects={projectsOverviewList}/>
        
      </div>

      <div className="flex flex-row w-full justify-center mb-4">
        <Link href={"/projects"}>
          <CustomButton text="More Projects" icon={<IoIosArrowForward className="text-2xl  mt-0.5"/>}/>
        </Link>
      </div>
    </div>
    </>
  );
}
