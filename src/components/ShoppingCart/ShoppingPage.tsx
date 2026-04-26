import { useState } from "react"
import { Card } from "./Components/Card"
import { Modal } from "./Components/Modal"
import { Cart } from "./Components/Cart"

export const ShoppingPage = ()=>{
    const [Open,SetOpen] = useState(false)


    
    return (
        <div >
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <h1>Shopping Page</h1>
            </div>
            <Card/>
            <button onClick={()=>SetOpen(true)}>Buka Cart</button>
            {Open && 
            <Modal onClose={()=>SetOpen(false)}> <Cart/> </Modal>
            }
        </div>
    )
}