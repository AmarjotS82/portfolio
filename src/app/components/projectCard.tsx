import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import LanguageIcon from "./languageIcon"
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { RiTeamFill } from "react-icons/ri";
import { IoPersonSharp } from "react-icons/io5";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// function DateStrRep(date: Date){
//     let month = date.toLocaleString('en-US', { month: 'long' })
//     let year =  date.getFullYear().toString()
//     let combined_date_str = month + " " +  year.toString()
//     return combined_date_str
// }

// function TimelineDatesStr(startDate:Date, endDate:Date){
//   const StartDateStr = DateStrRep(startDate)
//   const  EndDateStr = DateStrRep( endDate)
//   return StartDateStr + " - " + EndDateStr
// }

export default function ProjectCard( {projectDetails} : {projectDetails : Project}){
    const Name:string = projectDetails.name
    const Overview:string = projectDetails.overview
    const Description:string = projectDetails.description
    const Languages = projectDetails.languages
    const GithubRepo = projectDetails.githubRepo
    const TimelineStr = projectDetails.startDate + " - " + projectDetails.endDate
    return(
      <Card className="min-h-[350] h-full bg-orange-300 dark:bg-lighter_black animate-slideInBounce border-none">
      <CardHeader>
        <CardTitle>
          <div className="flex lg:flex-row w-full justify-center"> 
            {/*justify-between items-start lg:items-center*/}
            <div className="flex flex-row text-red-800 dark:text-yellow-300">
              {Name}
            </div>
            {/* <div className="flex flex-row justify-end items-center">
              {members > 1 ?  <RiTeamFill className="text-2xl" /> :   <IoPersonSharp className="text-xl" /> }
            </div> */}
          </div>
        </CardTitle>
        <CardDescription className="font-bold text-lg text-red-950 dark:text-yellow-100">
          <div className="flex flex-row w-full justify-center">
            {Overview}
          </div>

          <div className="flex flex-row w-full justify-center">
            {TimelineStr}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={Name}>
                <AccordionTrigger className="p-2  rounded-sm hover:bg-orange-200 hover:dark:bg-neutral-950 font-semibold">More details</AccordionTrigger>
                  <AccordionContent>
                      <p className="text-lg font-medium">{Description}</p>
                  </AccordionContent>
              </AccordionItem>
          </Accordion>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center">
          {/* Languages Section */}
          <div className="flex flex-wrap sm:flex-row w-full  justify-evenly gap-3 mb-4 sm:mb-0">
            {Languages.map((name) => (
              <LanguageIcon key={name} langaugeName={name} />
            ))}
            {/* GitHub Logo Section */}
            {GithubRepo && (
              <Link href={GithubRepo} target="_blank">
                <BsGithub className="text-4xl" />
              </Link>
            )}
          </div>
        </div>
         
      </CardFooter>
    </Card>
    )
}