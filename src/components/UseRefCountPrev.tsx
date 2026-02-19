import { useEffect, useRef, useState } from "react"

export default function CountPrevCurrent() {
    const [count,SetCount] = useState (0);
    const prevCount = useRef <number |null> (null);

    useEffect (()=> {
        prevCount.current = count
    },[count])


    return (
        <div>
            <h1> Current : {count} </h1>
            <h1> PrevCount : {prevCount.current ??  "-" }</h1>
            <button onClick={()=> SetCount(a=> a+1)} className="border-2"> 
                Hitung
            </button>
        </div>
    )

}