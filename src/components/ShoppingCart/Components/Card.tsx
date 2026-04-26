import { Products } from "../Data/Products"

interface SliderProps {
    IndexCurrent: number;
    setIndexCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export const Card = ( {IndexCurrent, setIndexCurrent }: SliderProps)=> {
    const item = Products();


    const nextSlide = ()=> {
        setIndexCurrent((prev)=>prev == item.length -1 ? 0 : prev+1)
    }
    const prevSlide = ()=> {
        setIndexCurrent((prev)=>prev == 0 ? item.length-1 : prev-1)
        
    }
    return (
            <div style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(auto-fit, minmax(10%, 1fr))"}}>
                <div style={{zIndex:11, height:"80vh", background:"white", position:"relative"}}>
                    <h2 style={{fontWeight:"bolder", fontSize:"4rem" }}>{item[IndexCurrent].name}</h2>
                    <p>IDR {item[IndexCurrent].price}</p>
                    <p> {item[IndexCurrent].Description} </p>
                    <button style={{width:"30%", borderRadius:"10px", padding:"10px"}}>Add to Chart</button>
                    <div style={{display:"flex", justifyContent:"end", position:"absolute", bottom:"10%", right:"10%"}}>
                        <button onClick={prevSlide}>Prev </button>
                        <button onClick={nextSlide}>Next </button>
                    </div>
                    
                </div>
                <div  style={{width: "auto", height: "auto" ,border:"1px solid", padding:"1rem",  position:"relative", overflow:"hidden",}}>
                    {item.map((Barang,index)=>{
              

                    return (
                            <img key={Barang.id} src={Barang.image} style={{objectFit:"contain", position:"absolute", transition:"transform 500ms ease-in-out", zIndex: index === IndexCurrent? 2 : -1, transform:`translateX(${(index-IndexCurrent)*100}%)` }} />

                            
                            )
                    })}
                </div>
            </div>
    )
}