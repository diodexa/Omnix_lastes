import { useEffect, useState } from "react";
import { ModalInputNote } from "../Components/ModalInputNote";
import { Note } from "../API/Note";
import ListNote from "../Components/NoteList";
import { EditNote } from "../Components/ModalEditNote";
import { usefindnote } from "../Hooks/FindNote";




export const NotePage = ()=> {

    const [note, setNote] = useState(() => {
        const saved = localStorage.getItem("MyNote");
        return saved ? JSON.parse(saved) : Note();
    });

    const [InputModal, setInputModal] = useState(false);
    const [EditModal, setEditModal] = useState(false);
    const {updateSelectedId} = usefindnote()

    const saved = localStorage.getItem("ActiveNoteId");
    const findData = JSON.parse(localStorage.getItem("MyNote") || "[]")
    const selectedNote = findData.find((item: any) => item.id === saved) || null;
     

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
        setNote((prev: any[]) => 
            prev.map((item) => 
                item.id === selectedNote.id ? { 
                        ...item, 
                        title: newTittle,
                        content: newContent, 
                        createdAt: new Date().toLocaleDateString("id-ID") }
                    : item 
            )
        );
    };


    useEffect(()=>{
         const handlekeyDown =(e:KeyboardEvent)=>{
            if (e.key==="Escape") {
                setInputModal(false);
                setEditModal(false);
            }
        }
        
        window.addEventListener("keydown",handlekeyDown)
        return()=>{ window.removeEventListener("keydown",handlekeyDown)}
    },[])

    useEffect(() => {
        localStorage.setItem("MyNote", JSON.stringify(note));
        
    }, [note]);

    console.log(selectedNote)

    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <ListNote Notes={note} onSelect={updateSelectedId} currentSelectedId={selectedNote? selectedNote.id : null} />
            {selectedNote ? (
                    <div>
                        <h2 style={{ color: "#f6e387" }}>{selectedNote.title}</h2>
                        <p style={{ whiteSpace: "pre-wrap" }}>{selectedNote.content}</p>
                        <small>Dibuat pada: {selectedNote.createdAt}</small>
                    </div> 
                ) : (
                    <p style={{ color: "gray" }}>Silakan pilih note untuk melihat isi.</p>
                )}
            <div style={{display:"flex"}}>
            <button onClick={()=>setInputModal(!InputModal)} style={{padding:"2rem", border:"2px solid"}}>Tambah Note</button>
            <button onClick={()=>selectedNote? setEditModal(!EditModal) : alert("isi dulu kategorinya")} style={{padding:"2rem", border:"2px solid"}}>Edit Note</button>
            </div>
            <ModalInputNote AddNote={handleChange} isOpen={InputModal} onClose={()=>setInputModal(false)}/>
            <EditNote EditNote={HandleEdit} isOpen={EditModal} onClose={()=>setEditModal(false)}/>
        </div>
    )
}