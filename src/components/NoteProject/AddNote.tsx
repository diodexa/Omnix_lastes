import { useEffect, useState } from "react"

export const ModalNote= ()=> {
    const [isOpen,SetisOpen] = useState (false);
    const [selectedId, setSelectedId] = useState<number | null>(() => {
        const saved = localStorage.getItem("selectedId");
        return saved ? Number(saved) : null;
    });

    useEffect(()=> {
        if (isOpen) return
        else{
            localStorage.setItem("selectedID",String(selectedId))
        }
    },[isOpen])
    return (
        <div>
            <button>Add Note</button>
            <ModalNote />

        </div>
    )
}