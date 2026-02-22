import { useEffect, useRef, useState } from "react"

export default function OutsideDetector () {
    const boxref = useRef<HTMLDivElement |null>(null)
    const [tulisan,settulisan] = useState("Klik Saya")

    useEffect(()=>{
        const handler = (event:MouseEvent)=>{
            if (boxref.current && !boxref.current.contains(event.target as Node)){
                settulisan("Outside");
            }
            else {settulisan("Inside")}
        }
        document.addEventListener("click",handler)
        return ()=> (
            document.removeEventListener("click",handler)
        )
    },[])
  
    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh",width:"100%"}} >
            <div style={{width:"10rem",height:"10rem",padding:"4rem", border:"2px solid"}} ref={boxref} >
                {tulisan}
            </div>
        </div>
    )
}