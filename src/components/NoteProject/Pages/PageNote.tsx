import { useEffect, useState } from "react";
import { ModalInputNote } from "../Components/ModalInputNote";
import { Note } from "../API/Note";
import ListNote from "../Components/NoteList";
import { EditNote } from "../Components/ModalEditNote";




export const NotePage = ()=> {

    const [note, setNote] = useState(() => {
        const saved = localStorage.getItem("MyNote");
        return saved ? JSON.parse(saved) : Note();
    });
    const [NoteSelect, setNoteSelect] = useState(() => {
        const saved = localStorage.getItem("NoteYangDipilih");
        return saved ? JSON.parse(saved) : null ;
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (newTittle: string, newContent: string) => {
        const newNote = {
            id: crypto.randomUUID(),
            title: newTittle,
            content: newContent,
            createdAt: new Date().toLocaleDateString("id-ID")
        }
     
        setNote((prev:string) => [...prev, newNote])
    };

    const HandleEdit = (newTittle: string, newContent: string) => {
        const newNote = {
            id: JSON.stringify(NoteSelect),
            title: newTittle,
            content: newContent,
            createdAt: new Date().toLocaleDateString("id-ID")
        }
     
        setNote((prev:string) => [...prev, newNote])
    };

    console.log(NoteSelect)
    useEffect(()=>{
         const handlekeyDown =(e:KeyboardEvent)=>{
            if (e.key==="Escape") {
                setShowModal(false);
            }
        }
        
        window.addEventListener("keydown",handlekeyDown)
        return()=>{ window.removeEventListener("keydown",handlekeyDown)}
    },[])

    useEffect(() => {
        localStorage.setItem("MyNote", JSON.stringify(note));
    }, [note]);




    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <ListNote Notes={note}/>
            <button onClick={()=>setShowModal(!showModal)} style={{padding:"2rem", border:"2px solid"}}>Tambah Note</button>
            <ModalInputNote AddNote={handleChange} isOpen={showModal} onClose={()=>setShowModal(false)}/>

            <button onClick={()=>setShowModal(!showModal)} style={{padding:"2rem", border:"2px solid"}}>Edit Note</button>
            <EditNote EditNote={HandleEdit} isOpen={showModal} onClose={()=>setShowModal(false)}/>
        </div>
    )
}