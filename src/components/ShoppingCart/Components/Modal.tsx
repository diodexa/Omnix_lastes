import type React from "react"

export const Modal =({children}:{children:React.ReactNode})=> {
    return (
        <>
            <div
            style={{ position:"fixed", display:"flex", inset:"0", backgroundColor: "#0000002d", justifyContent:"center", alignItems:"center" }}
            >
                <div style={{backgroundColor:"white", padding:"2rem"}}>
                {children}
                </div>
            </div>
        

        </>
    )
}