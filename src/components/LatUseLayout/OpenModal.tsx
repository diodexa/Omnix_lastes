import { useLayoutEffect, useState } from "react"

export default function OpenModal (){
    const [isOpen,SetisOpen] = useState (false);
    
    useLayoutEffect(() => {
        if (!isOpen) return;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        const originalOverflow = document.body.style.overflow;
        const originalPadding = document.body.style.paddingRight;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPadding;
        };

        }, [isOpen]);
    return (
        <div style={{height:"100vh",width:"100vw"}}>
            <div style={{height:"200vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button 
                style={{border:"2px solid"}}
                onClick={()=>SetisOpen(true)}
                >Open Modal</button>
            </div>
            {isOpen&& 
                <div style={{background:"rgba(0, 0, 0, 0.23)",position:"fixed", inset:"0",width:"100vw", height:"100vh", display:"flex",justifyContent:"center",alignItems:"center",zIndex:"999"}}>
                    <div style={{ background: "white", padding: "2rem", color: "black" }}>
                        <button onClick={() => SetisOpen(false)}>Close</button>
                    </div>
                </div>
            }
        </div>
    )
}