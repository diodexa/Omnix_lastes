import { useLayoutEffect, useRef, useState } from "react"

export default function TextAutoArea(){
    const TextRef = useRef <HTMLTextAreaElement>(null)
    const [text,settext] = useState("")

    useLayoutEffect(()=>{
        if(TextRef.current){
            TextRef.current.style.height="auto"
            TextRef.current.style.height=`${TextRef.current.scrollHeight}px`
        }
        
    },[text])

    return(
        <div>
            {/* <input type="text" style={{border:"2px solid"}} ref={HeighRef}/> */}
            <textarea ref={TextRef} 
            value={text}
            onChange={(e)=>settext(e.target.value)}
            style={{border:"2px solid",overflow:"hidden",resize:"none"}}/>
        </div>
    )
}