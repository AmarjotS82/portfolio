export default function Title({titleName} : {titleName : string}){
    return(
        <div className="flex flex-row justify-center mt-3 mb-3">
            <h1 className="text-3xl font-bold">{titleName}</h1>
        </div>
    )
}