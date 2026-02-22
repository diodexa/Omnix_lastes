import { useEffect, useRef, useState } from "react"

export default function OutsideDetector () {
    const boxref = useRef<HTMLDivElement |null>(null)
    const [Klikside,setKlikside] = useState ("")

    useEffect(()=>{
        const handler = ()=>{
            document.addEventListener("click",handler)
            if (boxref.current && !boxref.current.contains(event.target as Node))
        }
    })
  
    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh",width:"100%"}} onClick={()=>setKlikside("OutsideKlik")}>
            <div style={{width:"10rem",height:"10rem",padding:"4rem", border:"2px solid"}} onClick={()=>setKlikside("InsideKlik")} >
                {Klikside}
            </div>
        </div>
    )
}