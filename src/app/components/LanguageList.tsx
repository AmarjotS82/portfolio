import LanguageIcon from "./languageIcon";

interface LanguageListProps{
    titleName : string,
    languages : string[]
}

export default function LangauageList({titleName, languages} : LanguageListProps){
    return(
        <>
            <p className="flex flex-row justify-center w-full text-xl font-bold mt-3">{titleName}</p>
            <div className="flex flex-row w-full mt-2">
                <div className="flex flex-wrap sm:flex-row w-full  justify-evenly gap-3 mb-4 sm:mb-0">
                            {languages.map((name) => (
                            <LanguageIcon key={name} langaugeName={name} />
                            ))}
                </div>
            </div>
        </>
    )
}