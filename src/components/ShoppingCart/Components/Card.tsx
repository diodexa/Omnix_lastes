import { Products } from "../Data/Products"

export const Card = ()=> {
    const item = Products().slice();
    return (
        <div>
            <div style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(auto-fit, minmax(10%, 1fr))"}}>
                {item.map(index=>{
                    return (
                        <div key={index.id} style={{border:"1px solid", padding:"1rem"}}>
                            <div style={{display:"flex", justifyContent:"center", alignItems:"center", aspectRatio:"16/9"}}>
                                <img src={index.image} style={{objectFit:"contain",maxWidth:"100%", maxHeight:"100%"}} />
                                </div>
                                <div style={{flexGrow:"1"}}>
                                <h2 style={{fontWeight:"bolder"}}>{index.name}</h2>
                                <p style={{fontSize:"1.6rem"}}>Rp{index.price}</p>
                                <button 
                                style={{padding:"1rem", borderRadius:"8px", backgroundColor:'lightblue'}}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
            
            </div>
        </div>
    )
}