import { useEffect, useState } from "react";
import { ModalInputNote } from "../Components/ModalInputNote";
import { Note } from "../Data/Note";
import ListNote from "../Components/NoteList";
import { EditNote } from "../Components/ModalEditNote";
import { HapusNote } from "../Components/ModalHapusNote";

interface NoteType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export const NotePage = () => {

  const [note, setNote] = useState<NoteType[]>(() => {
    const saved = localStorage.getItem("MyNote");
    return saved ? JSON.parse(saved) : Note();
  });

  const [selectedId, setSelectedId] = useState<string | null>(() => {
    const saved = localStorage.getItem("ActiveNote");
    return saved ? saved : null;
  });

  const [InputModal, setInputModal] = useState(false);
  const [EditModal, setEditModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);

  const selectedNote = note.find(n => n.id === selectedId) || null;

  // tambah note
  const handleChange = (newTitle: string, newContent: string) => {

    const newNote: NoteType = {
      id: crypto.randomUUID(),
      title: newTitle,
      content: newContent,
      createdAt: new Date().toLocaleDateString("id-ID")
    };

    setNote(prev => [...prev, newNote]);
  };

  // edit note
  const handleEdit = (newTitle: string, newContent: string) => {
    if (!selectedNote) return;
    setNote(prev =>
      prev.map(item =>item.id === selectedNote.id ?
           {
              ...item,
              title: newTitle,
              content: newContent,
              createdAt: new Date().toLocaleDateString("id-ID")
            }
          : item
      )
    );
  };

  // const handleDelete = ()=> {
  //   if(!selectedNote) return;
  //   setNote(prev=> prev.filter(item=>item.id !== selectedId));
  //   setDeleteModal(false);
  //   setSelectedId("")
  // }
  const handleDelete = (id: string) => {
    setNote(prev => prev.filter(item => item.id !== id));
    setDeleteModal(false);
    setSelectedId(null);
  };


  // ESC close modal
  useEffect(() => {
    const handlekeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInputModal(false);
        setEditModal(false);
        setDeleteModal(false);
      }
    };

    window.addEventListener("keydown", handlekeyDown);
    return () => window.removeEventListener("keydown", handlekeyDown);
  }, []);

  // sync ke localStorage
  useEffect(() => {
    localStorage.setItem("MyNote", JSON.stringify(note));
  }, [note]);

  useEffect(() => {
        if (selectedId) {
            localStorage.setItem("ActiveNote", selectedId);
        } else {
            localStorage.removeItem("ActiveNote");
        }
    }, [selectedId]);
    

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

      <ListNote
        Notes={note}
        onSelect={setSelectedId}
        currentSelectedId={selectedId}
      />

      {selectedNote ? (
        <div>
          <h2 style={{ color: "#f6e387" }}>{selectedNote.title}</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{selectedNote.content}</p>
          <small>Dibuat pada: {selectedNote.createdAt}</small>
          <button onClick={()=> setDeleteModal(true)} 
          style={{background:"red", color:"white", padding:"1rem"}}> hapus</button>
        </div>
      ) : (
        <p style={{ color: "gray" }}>Silakan pilih note untuk melihat isi.</p>
      )}

      <div style={{display:"flex"}}>
        <button
          onClick={() => setInputModal(true)}
          style={{padding:"2rem", border:"2px solid"}}
        >
          Tambah Note
        </button>

        <button
          onClick={() =>
            selectedNote
              ? setEditModal(true)
              : alert("Pilih note dulu")
          }
          style={{padding:"2rem", border:"2px solid"}}
        >
          Edit Note
        </button>
      </div>

      <ModalInputNote
        AddNote={handleChange}
        isOpen={InputModal}
        onClose={() => setInputModal(false)}
      />

      <EditNote
        note={selectedNote}
        EditNote={handleEdit}
        isOpen={EditModal}
        onClose={() => setEditModal(false)}
      />

      <HapusNote
      note={selectedNote}
      DeleteNote={handleDelete}
      isOpen={DeleteModal}
      onClose={() => setDeleteModal(false)}
      />

    </div>
  );
};