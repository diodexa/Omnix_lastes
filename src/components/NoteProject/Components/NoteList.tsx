import Select from "react-select";
import {Note} from "../API/Note"


interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface props {
    Notes : Note[];
    onSelect: (id: string | null) => void;
    currentSelectedId: string
}
export default function ListNote ({Notes,onSelect, currentSelectedId}:props) {

       
    return (
        <div>
            <Select 
            options={Notes.map(item =>({value:item.id, label:item.title}))}
            onChange={(e) => onSelect(e?.value || null)}
            value={Notes.map(item => ({ value: item.id, label: item.title })).find(opt => opt.value === currentSelectedId)}
            styles={{option: (base, state) => ({...base,backgroundColor: state.isFocused? "#f6e387": "transparent"}),}}
            />
            

        </div>
    )
}