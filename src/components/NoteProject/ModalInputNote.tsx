import { useEffect, useState } from "react";


type props = {
    AddNote :(title: string, content: string) => void;
    isOpen : boolean;
}
export const ModalInputNote = ({AddNote,isOpen}:props)=> {
    const [Tittle, setTittle] = useState(() => {
        const saved = localStorage.getItem("my-Tittle");
        return saved ? JSON.parse(saved) : Array().fill("");
    });
    const [Content, setContent] = useState(() => {
        const saved = localStorage.getItem("my-Content");
        return saved ? JSON.parse(saved) : Array().fill("");
    });


    useEffect(()=>{
        const syncNote =()=>{
            const savedTittle = localStorage.getItem("my-Tittle");
            const savedContent = localStorage.getItem("my-Content");
            if (savedTittle && savedContent){
                setTittle(JSON.parse(savedTittle));
                setContent(JSON.parse(savedTittle));
            };
            window.addEventListener("templates-Update",syncNote);
            return ()=> window.removeEventListener("templates-Update", syncNote);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("my-Tittle",JSON.stringify(Tittle))
        localStorage.setItem("my-Content",JSON.stringify(Content))
    },[Tittle,Content])
    console.log(isOpen)
    

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
                opacity:1
            }: {opacity:0}}>
                <div style={{ background: "white", padding: "2rem",display:"flex", flexDirection:"column"}} >
                    <input type="text" placeholder="Isi Judul" value={Tittle} onChange={(e)=>AddNote(Tittle,e.target.value)} />
                    <textarea placeholder="Isi Note kamu" value={Content} onChange={(e)=>AddNote(Content,e.target.value)}> </textarea>
                    <button onClick={()=>AddNote(Tittle,Content)}>Save</button>
                </div>

            </div>
    </div>
    )
}