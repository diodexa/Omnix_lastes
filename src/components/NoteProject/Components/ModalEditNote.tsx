import { useEffect, useState } from "react";


type props = {
    EditNote :(title: string, content: string) => void;
    isOpen : boolean;
    onClose :()=>void;
}
export const EditNote = ({EditNote,isOpen,onClose}:props)=> {
    const [Tittle, setTittle] = useState(() => {
        const saved = localStorage.getItem("my-Tittle");
        return saved ? JSON.parse(saved) : "";
    });
    const [Content, setContent] = useState(() => {
        const saved = localStorage.getItem("my-Content");
        return saved ? JSON.parse(saved) : "";
    });


    useEffect(()=>{
        const syncNote =()=>{
            const EditNote = localStorage.getItem("NoteYangDipilih");
            if (EditNote){
                setTittle(JSON.parse(EditNote));
            };
        }

        window.addEventListener("",syncNote);
        return ()=> {
            window.removeEventListener("", syncNote);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("NoteYangDipilih",Tittle)
    },[Tittle,Content])
    
    const handleSave = () => {
        if (Tittle && Content){
            EditNote(Tittle,Content);
        }
    }

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
                <div style={{ background: "white", padding: "2rem",display:"flex", flexDirection:"column"}} onClick={(e)=>e.stopPropagation()} >
                    Edit Note
                    <input type="text" placeholder="Isi Judul" value={Tittle} onChange={(e)=>setTittle(e.target.value)} />
                    <textarea placeholder="Isi Note kamu" value={Content} onChange={(e)=>setContent(e.target.value)}> </textarea>
                    <button onClick={()=>handleSave()}>Save</button>
                </div>

            </div>
        </div>
    )
}