import { useState } from "react";
import { Products } from "../Data/Products"

export const Card = ()=> {
    const item = Products();
    const [IndexCurrent, setIndexCurrent] = useState(0)

    const nextSlide = ()=> {
        setIndexCurrent((prev)=>prev == item.length -1 ? 0 : prev+1)
    }

    /* 
    item length = 2
    prev = 0 

    => prev =1
    */
    const prevSlide = ()=> {
        setIndexCurrent((prev)=>prev == 0 ? item.length-1 : prev-1)
        
    }
    return (
            <div style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(auto-fit, minmax(10%, 1fr))"}}>
                <div style={{zIndex:11, height:"80vh", border:"1px solid", background:"white", display:"grid", gridTemplateColumns: "(auto,1fr,auto)"}}>
                    <h2 style={{fontWeight:"bolder", fontSize:"5rem" }}>{item[IndexCurrent].name}</h2>
                    <p> {item[IndexCurrent].Description} </p>
                    <p>IDR {item[IndexCurrent].price}</p>
                    <div style={{display:"flex", justifyContent:"end"}}>
                        <button onClick={prevSlide}>Prev </button>
                        <button onClick={nextSlide}>Next </button>
                    </div>
                    <div style={{width:"100%"}}>
                        <button style={{width:"100%", padding:"8px", borderRadius:"8px"}}>Buy</button>
                    </div>
                </div>
                <div  style={{width: "auto", height: "auto" ,border:"1px solid", padding:"1rem",  position:"relative", overflow:"hidden",}}>
                    {item.map((Barang,index)=>{
                        let offset = ((index -IndexCurrent)*100) % length;
                        if(offset<0) {offset += length};
                   

                    return (
                            <img key={Barang.id} src={Barang.image} style={{objectFit:"contain", position:"absolute", transition:"transform 500ms ease-in-out", zIndex: index === IndexCurrent? 2 : -1, transform:`translateX(${(index-IndexCurrent)*100}%)`}} />
                            )
                    })}
                </div>
            </div>
    )
}