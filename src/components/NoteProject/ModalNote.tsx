import { useEffect, useState } from "react";

type props = {
    isOpen : Boolean;
}
export const ModalNote = ({ isOpen }: props)=> {
    const [selectedId, setSelectedId] = useState<number | null>(() => {
        const saved = localStorage.getItem("selectedId");
        return saved ? Number(saved) : null;
    });

    useEffect(()=>{
        localStorage.setItem("selectedId", String(selectedId));

    },[isOpen])
    return(
        <div
        style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
        }}
    >
      <div style={{ background: "white", padding: "2rem" }}>
        <input type="text" placeholder="Isi Judul" />
        <textarea placeholder="Isi Note kamu">{selectedId} </textarea>
        <button>Save</button>
      </div>
    </div>
    )
}