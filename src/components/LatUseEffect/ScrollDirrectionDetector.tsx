import { useEffect, useRef, useState } from "react"

export default function ScrollDetector () {
    const Renderref = useRef(0)
    const [Dirrection,setDirrection] = useState("-")
    const prevScrollref = useRef(0)

    Renderref.current++;
    


    
    useEffect(()=> {
        const handleScroll = () => {
            const currentY = window.scrollY
            if (currentY>prevScrollref.current) {
                setDirrection("Scroll Down")
            } else if (currentY<prevScrollref.current) {setDirrection("Scroll Up")}
            prevScrollref.current = currentY;
        }
            
        window.addEventListener("scroll",handleScroll)
        return () =>{
            window.removeEventListener("scroll",handleScroll)
        } 
        
        },[])
    
    return (
        <div style={{height:"200vh",width:"100%", border: "2px solid"}} >
            <div style={{position:"fixed"}}>
            <h1>Scroll Dirrection : {Dirrection}</h1>
            <h1>Last Scroll : {prevScrollref.current} </h1>
            <h1>Render Count : {Renderref.current}</h1>
            </div>
        </div>
    )
}