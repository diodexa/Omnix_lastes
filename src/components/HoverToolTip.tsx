import { useLayoutEffect, useRef, useState } from "react"

export default function HoverToolTip () {
    const buttonRef = useRef <HTMLButtonElement> (null);
    const tooltipref= useRef <HTMLDivElement> (null);

    const [isHover,setisHover] = useState (false);
    const [position,setPosition]= useState ({top:0, left:0});

    useLayoutEffect(() => {
        if (!isHover) return;
        if (!buttonRef.current || !tooltipref.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const tooltipRect = tooltipref.current.getBoundingClientRect();

        // const gap = 8;
        const top =
            buttonRect.top - tooltipRect.height /*- gap*/;

        const left =
            buttonRect.left + buttonRect.width / 2 -tooltipRect.width / 2; /* ===> centering*/

        setPosition({ top, left });

    }, [isHover]);
    return (
        <div>
            <button onMouseOver={()=>setisHover(true)} onMouseLeave={()=>setisHover(false)} ref={buttonRef} style={{border:"2px solid",padding:"10px",position:"fixed",top:"50%"}}>
                Hover me!!
            </button>
            {isHover && 
            <div ref={tooltipref} style={{position:"fixed", top: position.top, left:position.left, border:"1px solid", zIndex:"9999"}}>
                <div style={{padding:"10px"}}>ini tool tip</div>
                <div style={{padding:"10px"}}>2</div>
                <div style={{padding:"10px"}}>3</div>
            </div>
            }
        </div>
    );
}