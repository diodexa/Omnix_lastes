import { useState } from "react";

export const useNotes = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
        const SaveNotes = localStorage.getItem("MyNote")
        const GetNotes =  SaveNotes? JSON.parse(SaveNotes) : [];
        const SelectedNote =  GetNotes.find((item :{ id: string | null})=> String(item.id) === String(selectedId)  )

    return {SelectedNote,setSelectedId}
}