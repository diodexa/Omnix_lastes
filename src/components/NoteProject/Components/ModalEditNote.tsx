import { useEffect, useState } from "react";

interface NoteType {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

type props = {
  note: NoteType | null;
  EditNote: (title: string, content: string) => void;
  isOpen: boolean;
  onClose: () => void;
};

export const EditNote = ({ note, EditNote, isOpen, onClose }: props) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note, isOpen]);

  const handleSave = () => {
    if (title && content) {
      EditNote(title, content);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}
        onClick={onClose}
      >

        <div
          style={{
            background: "white",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "50vw",
            height: "50vh",
            justifyContent: "center"
          }}
          onClick={(e) => e.stopPropagation()}
        >

          <h1 style={{fontSize:"3rem"}}>Edit Note</h1>

          <input
            type="text"
            value={title}
            disabled
            style={{
              border:"2px solid",
              cursor:"not-allowed",
              background:"#b8b5b595"
            }}
          />

          <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            style={{border:"2px solid"}}
          />

          <button
            onClick={handleSave}
            style={{background:"blue", color:"white"}}
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
};