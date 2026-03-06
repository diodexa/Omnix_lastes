import { useState } from "react";
import { ModalInputNote } from "./ModalInputNote";
import { Note } from "./Note";


export const NotePage = ()=> {
    const [note,setNote]= useState(Note())
    const [showModal, setShowModal] = useState(true);

    const handleChange = (newTittle: string, newContent: string) => {
        const newNote = {
            id: crypto.randomUUID(),
            title: newTittle,
            content: newContent,
            createdAt: new Date().toLocaleDateString("id-ID")
        }
        setNote([...note,newNote])
    };

    return(
        <div >
            <button onClick={()=>setShowModal(!showModal)}>Buka Modal</button>
            <ModalInputNote AddNote={handleChange } isOpen={!showModal}/>
        </div>
    )
}