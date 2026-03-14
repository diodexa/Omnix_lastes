import { useEffect, useState } from "react";


type props = {
    AddNote :(title: string, content: string) => void;
    isOpen : boolean;
    onClose :()=>void;
}
export const ModalInputNote = ({AddNote,isOpen,onClose}:props)=> {
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
            const savedTittle = localStorage.getItem("my-Tittle");
            const savedContent = localStorage.getItem("my-Content");
            if (savedTittle && savedContent){
                setTittle(JSON.parse(savedTittle));
                setContent(JSON.parse(savedContent));
            };
        }

        window.addEventListener("",syncNote);
        return ()=> {
            window.removeEventListener("", syncNote);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("my-Tittle",Tittle)
        localStorage.setItem("my-Content",Content)
    },[Tittle,Content])
    
    const handleSave = () => {
        if (Tittle && Content){
            AddNote(Tittle,Content);
            setTittle("");
            setContent("");
            onClose()
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
                    Input Note Baru
                    <input type="text" placeholder="Isi Judul" value={Tittle} onChange={(e)=>setTittle(e.target.value)} />
                    <textarea placeholder="Isi Note kamu" value={Content} onChange={(e)=>setContent(e.target.value)}> </textarea>
                    <button onClick={()=>handleSave()}>Save</button>
                </div>

            </div>
        </div>
    )
}