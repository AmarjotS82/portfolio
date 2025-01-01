import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa6";
import { SiElixir } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTauri } from "react-icons/si";
import { FaPhoenixFramework } from "react-icons/fa";
import { SiProcessingfoundation } from "react-icons/si";

export default function LanguageIcon({langaugeName} : {langaugeName : string}){
    const langaugeIcons: any = {
        javascript: <IoLogoJavascript className="text-4xl"/>,
        python: <FaPython  className="text-4xl"/>,
        html5:  <FaHtml5  className="text-4xl"/>,
        css: <FaCss3  className="text-4xl"/>,
        java: <FaJava  className="text-4xl"/>,
        kotlin: <SiKotlin  className="text-4xl"/>,
        typescript: <SiTypescript  className="text-4xl"/>,
        rust: <FaRust  className="text-4xl"/>,
        elixir: <SiElixir  className="text-4xl"/>,
        react: <FaReact  className="text-4xl"/>,
        vercel: <IoLogoVercel  className="text-4xl"/>,
        tauri: <SiTauri  className="text-4xl"/>,
        tailwind: <RiTailwindCssFill  className="text-4xl"/>,
        phoenix:  <FaPhoenixFramework  className="text-4xl"/>,
        processing:  <SiProcessingfoundation  className="text-4xl"/>,
    }
    const matchingLanguageIcon = langaugeIcons[langaugeName.toLowerCase()]
    return (
        <div className=" mr-3">
            <div className="flex justify-center">
                {matchingLanguageIcon}
            </div>
            <p key={langaugeName}>{langaugeName}</p>
        </div>
            
    )

}