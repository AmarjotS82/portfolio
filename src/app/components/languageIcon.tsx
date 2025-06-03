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
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import Icon from "./CustomIcon";
import CustomIcon from "./CustomIcon";
import { IconType } from "react-icons/lib";

export default function LanguageIcon({langaugeName, size} : {langaugeName : string, size: string}){
    const iconSizeStr =  size
    const langaugeIcons: any = {
        javascript: IoLogoJavascript,
        python: FaPython,
        html5:  FaHtml5,
        css: FaCss3,
        java: FaJava,
        kotlin: SiKotlin,
        typescript: SiTypescript,
        rust: FaRust,
        elixir: SiElixir,
        react: FaReact,
        vercel: IoLogoVercel,
        tauri: SiTauri,
        tailwind: RiTailwindCssFill,
        phoenix:  FaPhoenixFramework ,
        processing:  SiProcessingfoundation,
        github: FaGithub ,
        node: FaNodeJs,
        next: RiNextjsFill ,
        figma: FaFigma ,
        trello: FaTrello ,
        // sql: SiPostgresql ,
    }
    let name = langaugeName
    const regexParts = langaugeName.split(/\./);
    if(regexParts.length > 1){
        name = regexParts[0];
    }
    console.log(name)
    const MatchingLanguageIconType : IconType = langaugeIcons[name.toLowerCase()]
    return (
        <CustomIcon IconImg={<MatchingLanguageIconType className={iconSizeStr}/>} Label={langaugeName} />
            
    )

}