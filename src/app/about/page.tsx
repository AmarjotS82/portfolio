import Title from "../components/Title"

export default function AboutPage(){
    const title = "About Me"
    const aboutDetails =   `I am an aspiring software developer with a knack for turning ideas into reality through code.
                            So far I have completed my Diploma in COmputer Systems Technology at British Columbia Institute of Technology. 
                            I am currently studying in the Bachelor's of Science in Applied Computer Science in Network Security
                            to broaden my knowledge and enhance my skills in various programming languages and frameworks.
                            In my free time I build new projects, read, run, and play board games. `
    return(
        <>
        <Title titleName = {title}/>
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row sm:w-1/2 w-full">
            <p className="text-xl m-4">{aboutDetails}</p>
            </div>
        </div>
        </>
    )
}