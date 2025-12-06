import CustomIcon from "../components/CustomIcon";
import LanguageList from "../components/LanguageList"
import Title from "../components/Title"
import { GiGraduateCap } from "react-icons/gi";
import { Fa3 } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutPage(){
    const title = "About Me"
    const aboutDetails =   `I am currently working at Univerus as a part of my co-op program in the 
                            Bachelor of Science in Applied Computer Science in Network Security at 
                            British Columbia Institute of Technology (BCIT). Over the last few month 
                            I've been constantly learning new things everyday and refining my skills.
                            This experience was exactly what I wanted to help continue to improve my skills
                            after graduating from the Computer Systems technology Diploma at BCIT.
                            In my free time I enjoy building new projects, reading, and running. `
   
    const languages = ["TypeScript", "JavaScript", "Python", "HTML5", "CSS", "Java" ]
    const technologies = ["GitHub", "Vercel", "Node.js", "Next.js","Figma", "processing", "Trello"]
    const DiplomaStatus = "Computer Systems Technology Diploma Graduate at BCIT"
    const BachelorStatus = "3rd year Bachelors of Science Applied Computer Science at BCIT"
    return(
        <>
        <Title titleName = {title}/>
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row sm:w-1/2 w-full">
            <p className="text-xl mb-2">{aboutDetails}</p>
            </div>
        </div>

        <div className="flex flex-col h-full justify-between">
            <LanguageList titleName="Languages" languages={languages} />
            <LanguageList titleName="Technologies" languages={technologies}/>

            <h2 className="text-2xl font-bold text-center mt-6">Education</h2>
            <div className="flex justify-center items-center space-x-4 mt-2 mb-2">
                <CustomIcon IconImg={<GiGraduateCap className="text-4xl" />} Label={DiplomaStatus} />
                <FaArrowRight className="text-4xl" />
                <CustomIcon IconImg={<Fa3 className="text-4xl" />} Label={BachelorStatus} />
            </div>
        </div>
        </>
    )
}