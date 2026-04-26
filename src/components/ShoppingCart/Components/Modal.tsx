import type React from "react"

export const Modal =({children,onClose}:{children:React.ReactNode, onClose:()=>void})=> {
    return (
        <>
            <div
            style={{ position:"fixed", display:"flex", inset:"0", backgroundColor: "#0000002d", justifyContent:"center", alignItems:"center" }}
            onClick={onClose}
            >
                <div style={{backgroundColor:"white", padding:"2rem"}}
                onClick={(e)=> e.stopPropagation()}>
                {children}
                </div>
            </div>
        

        </>
    )
}