import {  useState } from 'react';

export const usefindnote = () => {
    
    
    const [selectedNote, setSelectedNote] = useState(() => {
        const activeId = localStorage.getItem("ActiveNoteId");
        const allNotes = JSON.parse(localStorage.getItem("MyNote") || "[]");
        return allNotes.find((item: any) => item.id === activeId) || null;
    });

    
    const updateSelectedId = (id: string | null) => {
        (id) ? localStorage.setItem("ActiveNoteId", id):localStorage.removeItem("ActiveNoteId");
                
        // Refresh state agar komponen yang pakai hook ini ikut berubah
        const allNotes = JSON.parse(localStorage.getItem("MyNote") || "[]");
        setSelectedNote(allNotes.find((item: any) => item.id === id) || null);
    };



    return { selectedNote, updateSelectedId };
};