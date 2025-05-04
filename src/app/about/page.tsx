import CustomIcon from "../components/CustomIcon";
import LangauageList from "../components/LanguageList"
import Title from "../components/Title"
import { GiGraduateCap } from "react-icons/gi";
import { Fa3 } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutPage(){
    const title = "About Me"
    const aboutDetails =   `I am an aspiring software developer with a knack for turning ideas into reality through code.
                            So far I have completed my diploma in Computer Systems Technology at British Columbia Institute of Technology(BCIT). 
                            I am currently continuing my education at BCIT through the Bachelor's of Science in Applied Computer Science in Network Security
                            to broaden my knowledge and enhance my skills in various programming languages and frameworks.
                            In my free time I build new projects, read, run, and play board games. `
    //Add SQL if needed
    const languages = ["TypeScript", "JavaScript", "Python", "HTML5", "CSS", "Java" ]
    const technologies = ["GitHub", "Vercel", "Node.js", "Next.js","Figma", "processing", "Trello"]
    const DiplomaStatus = "Computer Systems Technology Diploma Graduate at BCIT"
    const BachelorStatus = "3rd year Bachelors of Science Applied Computer Science at BCIT"
    return(
        <>
        <Title titleName = {title}/>
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row sm:w-1/2 w-full">
            <p className="text-xl m-4">{aboutDetails}</p>
            </div>
        </div>

        <LangauageList titleName="Languages" languages={languages} />
        <LangauageList titleName="Technologies" languages={technologies}/>

        <p className="flex flex-row justify-center w-full text-xl font-bold mt-5">Education</p>
        <div className="flex flex-row w-full justify-center">
            <div className=" mb-4 sm:m-1 md:m-2">
            <CustomIcon IconImg={<GiGraduateCap className="text-4xl" />} Label={DiplomaStatus} />
            </div>
            <FaArrowRight className="text-4xl" />
            <div className="  mb-4 sm:m-1 md:m-2">
            <CustomIcon IconImg={<Fa3 className="text-4xl" />} Label={BachelorStatus} />
            </div>
        </div>
        </>
    )
}