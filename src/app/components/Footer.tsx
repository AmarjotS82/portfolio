import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer(){
    return(
        <footer className="bg-charcoal">
        <div className="w-full flex flex-row justify-center mb-3 mt-3">
            <div className="flex flex-col">
                <div className="w-full flex flex-row justify-center">
                <MdOutlineEmail className="text-4xl text-white mr-3"/>
                <p className="text-2xl text-white">Contact me at </p>
                </div>
                <p className="text-2xl text-white">amarjot.sangha28@gmail.com</p>
            </div>
            {/* <Separator className=" h-1 rounded-full"/> */}
        </div>
        <div className="w-full flex flex-row justify-center mb-3 mt-3">
            <div className="flex flex-row justify-between sm:w-1/4 w-full mx-4">
                <Link href= "https://github.com/AmarjotS82" target="_blank"><BsGithub className="text-4xl text-white"/> </Link>
                <Link href= "https://www.linkedin.com/in/amarjot-sangha-241855201/" target="_blank"><FaLinkedin className="text-4xl text-white"/> </Link>
                {/* <a href= "mailto:amarjot.sangha28@gmail.com"><MdOutlineEmail className="text-4xl"/> </a> */}
            </div>
        </div>
    </footer>
    )
}