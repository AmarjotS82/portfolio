import LanguageIcon from "./languageIcon";

interface LanguageListProps{
    titleName : string,
    languages : string[]
}

export default function LanguageList({titleName, languages} : LanguageListProps){
    return(
        <>
            <h2 className="flex flex-row justify-center w-full text-xl font-bold mt-10 mb-3">{titleName}</h2>
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