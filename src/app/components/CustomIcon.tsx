interface IconProps{
    IconImg: any,
    Label: string,
}

export default function CustomIcon({IconImg, Label} : IconProps){
    return(
        <>

        <div className="flex flex-col items-center justify-center text-center">
            <div className="">
                {IconImg}
            </div>
            <p key={Label} className="mt-1 font-semibold">{Label}</p>
        </div>

        </>
    )
}