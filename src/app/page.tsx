import Title from "./components/Title";
import ProjectCardsView from "./projects/projectCardsView";
import { projects } from "./projects/projects";
import { IoIosArrowForward, IoMdDownload, IoMdInformationCircleOutline } from "react-icons/io";
import Link from "next/link";
import CustomButton from "./components/CustomButton";

export default function Home() {
  const introPara = `Here, you can find a showcase of my projects, skills, and more about me!`
  
  const projectsOverviewList: Project[] = projects.slice(0, 3);     
  
  
  return (
    <>
    <Title titleName = {"Welcome!"}/>
    <div className="flex flex-col">
      <div className="flex flex-row w-full justify-center ">
          <p className="text-lg mb-4 font-medium text-center">{introPara}</p>
      </div>

      <div className="flex flex-row w-full justify-center ">
          <p className="text-lg mb-4 font-medium text-center">{"Im currently working at Univerus as a Junior Developer using React and C#."}</p>
      </div>

      <div className="flex flex-row w-full justify-center gap-2">
        <Link href={"/about"}>
        <CustomButton text="More about me" icon={<IoMdInformationCircleOutline className="text-2xl  mt-0.5"/>}/>
        </Link>
        <CustomButton text="Download my resume" icon={<IoMdDownload className="text-2xl  mt-0.5"/>}/>
      </div>
      <div className="flex flex-col w-full items-center mt-4">
        <h1 className="text-3xl mb-4 font-semibold">Projects</h1>
        
        <ProjectCardsView listofProjects={projectsOverviewList}/>
        
      </div>

      <div>

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
