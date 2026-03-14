import Select from "react-select";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface props {
  Notes: Note[];
  onSelect: (id: string | null) => void;
  currentSelectedId: string | null;
}

export default function ListNote({ Notes, onSelect, currentSelectedId }: props) {

  const options = Notes.map(item => ({
    value: item.id,
    label: item.title
  }));

  return (
    <div style={{width:"300px"}}>
      <Select
        options={options}
        onChange={(e) => onSelect(e?.value || null)}
        value={options.find(opt => opt.value === currentSelectedId)}
        styles={{
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f6e387" : "transparent"
          })
        }}
      />
    </div>
  );
}