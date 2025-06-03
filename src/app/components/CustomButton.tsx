import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { ReactNode } from "react"
import { IconType } from "react-icons/lib"

interface ButtonProps{
    text: string,
    icon: ReactNode
}

export default function CustomButton({text, icon} : ButtonProps){
    const buttonContent = (
        <div className="flex flex-row justify-center">
          <p className="ml-1 text-xl h-1/2 font-semibold">{text}</p>
          {icon}
        </div>
      )
    const tailwindCSS = "rounded-full bg-slate-200 text-black hover:text-orange-600 dark:bg-black dark:text-white p-2 hover:dark:text-yellow-300 transition-colors duration-300"
    let file_name = ""
    let path_to_file = ""
    if(text.includes("resume")){
        file_name = "Amarjot_Sangha_Resume.pdf"
        path_to_file = "/files/Amarjot_Sangha_Resume.pdf"
    }
    return(
        path_to_file ? <a href={path_to_file} download={file_name}
        className={tailwindCSS} >
            {buttonContent}
        </a> :
        <button className={tailwindCSS} >
                    {buttonContent}
        </button>
    )
}