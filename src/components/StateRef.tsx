
import { useEffect, useRef, useState } from "react"

const Counter = ()=> {
    const [Count,SetCount] = useState(0);
    const RenderCount = useRef (0);

    useEffect (()=>{
    RenderCount.current++;
    console.log("render")
    })

    return (
        <div>
            <h1>count : {Count} </h1>
            <h1> renderCount : {RenderCount.current}</h1>
            <button onClick={() => SetCount(c => c + 1)} className="border-2"> 
                Hitung
            </button>
        </div>
    )
}
export default Counter