import { useEffect, useState } from "react";
import { ModalInputNote } from "./ModalInputNote";
import { Note } from "./Note";
import ListNote from "./NoteList";



export const NotePage = ()=> {
    const [note,setNote]= useState(Note())
    const [showModal, setShowModal] = useState(false);

    const handleChange = (newTittle: string, newContent: string) => {
        const newNote = {
            id: crypto.randomUUID(),
            title: newTittle,
            content: newContent,
            createdAt: new Date().toLocaleDateString("id-ID")
        }
        setNote([...note,newNote])
        
    };

    useEffect(()=>{
         const handlekeyDown =(e:KeyboardEvent)=>{
            if (e.key==="Escape") {
                setShowModal(false);
            }
        }
        window.addEventListener("keydown",handlekeyDown)
        return()=>{ window.removeEventListener("keydown",handlekeyDown)}
    },[showModal])

    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <ListNote Notes={note}/>
            <button onClick={()=>setShowModal(!showModal)} style={{padding:"2rem", border:"2px solid"}}>Buka Modal</button>
            <ModalInputNote AddNote={handleChange} isOpen={showModal} onClose={()=>setShowModal(false)}/>
        </div>
    )
}