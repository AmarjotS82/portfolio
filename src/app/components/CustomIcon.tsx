interface IconProps{
    IconImg: any,
    Label: string,
}

export default function CustomIcon({IconImg, Label} : IconProps){
    return(
        <>

        <div className=" mr-3">
            <div className="flex justify-center">
                {IconImg}
            </div>
            <p key={Label} className="font-semibold">{Label}</p>
        </div>

        </>
    )
}