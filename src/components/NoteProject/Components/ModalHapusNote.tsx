
interface NoteType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

type props= {
    note: NoteType | null;
    DeleteNote: (id:string) => void;
    isOpen : boolean;
    onClose :()=>void;
}
export const HapusNote= ({note,DeleteNote,isOpen,onClose}:props) => {

    const handleDelete = () => {
        const saved = localStorage.getItem("ActiveNote");
         if (saved) {
            DeleteNote(saved)
         } else {DeleteNote("")}
     };

    return (
        <div>
            <div  style={isOpen? {
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
                opacity:1}: {opacity:0}}
                onClick={onClose}>
                <div style={{ background: "white", padding: "2rem",display:"flex", flexDirection:"column"}} onClick={(e)=>e.stopPropagation()} >
                    Anda yakin mau hapus?  
                    {note?.title}
                    <button onClick={onClose}>No</button>
                    <button onClick={handleDelete}>Yes</button>
                </div>

            </div>
        </div>
    )
}