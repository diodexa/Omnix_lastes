import Select from "react-select";
import {Note} from "./Note"
import {  useEffect, useState } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface props {
    Notes : Note[]
}
export default function ListNote ({Notes}:props) {

    const [selectedId, setSelectedId] = useState<string | null>(null);
  
    

    const SelectedNote =  Notes.find(item=> item.id === selectedId);

    
    return (
        <div>
            <Select 
            options={Notes.map(item =>({value:item.id, label:item.title}))}
            onChange={(e) => setSelectedId(e?.value || null)}
            styles={{option: (base, state) => ({...base,backgroundColor: state.isFocused? "#f6e387": "transparent"}),}}
            />
            {SelectedNote ? (
                    <div>
                        <h2 style={{ color: "#f6e387" }}>{SelectedNote.title}</h2>
                        <p style={{ whiteSpace: "pre-wrap" }}>{SelectedNote.content}</p>
                        <small>Dibuat pada: {SelectedNote.createdAt}</small>
                    </div> 
                ) : (
                    <p style={{ color: "gray" }}>Silakan pilih note untuk melihat isi.</p>
                )}

        </div>
    )
}