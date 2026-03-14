import {  useEffect, useState } from "react";
import { usefindnote } from "../Hooks/FindNote";


type props = {
    EditNote :(title: string, content: string) => void;
    isOpen : boolean;
    onClose :()=>void;
}
export const EditNote = ({EditNote,isOpen,onClose}:props)=> {
    const saved = localStorage.getItem("ActiveNoteId");
    const findData = JSON.parse(localStorage.getItem("MyNote") || "[]")
    const getData = findData.find((item: any) => item.id === saved) || null;

    const [tittle,setTittle] = useState ("");
    const [content,setContent] = useState ("");

   

    const handleSave = () => {
        if (tittle && content){
            EditNote(tittle,content);
        }
    }

    useEffect(()=> {
        if (getData) {
            setTittle(getData.title);
            setContent(getData.content)
        }

    },[isOpen])
    
    console.log(getData)
    if(!isOpen) return null


    return(
        <div>
            <div  style={isOpen? {
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                opacity:1}: {opacity:0}}
                onClick={onClose}>
                <div style={{ background: "white", padding: "2rem",display:"flex", flexDirection:"column", textAlign:"center", width:"50vw", height:"50vh", justifyContent:"center"}} onClick={(e)=>e.stopPropagation()} >
                    <h1 style={{fontSize:"3rem"}}>Edit Note</h1>
                    <input type="text" placeholder="Isi Judul" value={tittle} onChange={(e)=>setTittle(e.target.value)} disabled 
                    style={{border:"2px solid", cursor:"not-allowed",background:"#b8b5b595"}}/>
                    <textarea placeholder="Isi Note kamu" value={content} onChange={(e)=>setContent(e.target.value)} 
                    style={{border:"2px solid"}}> </textarea>
                    <button onClick={()=>handleSave()} style={{background:"blue", color:"white"}}>Save</button>
                </div>

            </div>
        </div>
    )
}