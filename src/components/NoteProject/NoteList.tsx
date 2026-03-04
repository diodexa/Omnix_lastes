import Select from "react-select";
import {Note} from "./Note"
import { useRef, useState } from "react";


export default function ListNote () {

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const dataNoteRef = useRef(Note());
    

    const SelectedNote =  dataNoteRef.current.find(item=> item.id === selectedId);

    console.log(dataNoteRef.current)
    
    return (
        <div>
            <Select 
            options={dataNoteRef.current.map(item =>({value:item.id, label:item.title}))}
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