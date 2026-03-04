import Select from "react-select";
import {Note} from "./Note"
import { useRef, useState } from "react";

interface Props {
    onSelect: (id: string |null) =>void;
}

export default function ListNote () {

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const Idref = useRef <string | null>(null);
    

    const dataNote = Note()

    Idref.current= selectedId;
    const SelectedNote =  dataNote.find(item=> item.id === Idref.current);

    console.log(Idref.current)
    
    return (
        <div>
            <Select 
            options={dataNote.map(item =>({value:item.id, label:item.title}))}
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