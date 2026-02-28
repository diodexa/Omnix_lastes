// App.tsx
import { useState } from "react";
import { ModalProvider } from "./ModalManager";
import { Modal } from "./ModalComponent";

export default function App() {
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);

  return (
    <ModalProvider>
      <button onClick={() => setOpenA(true)}>Open Modal A</button>
      <button onClick={() => setOpenB(true)}>Open Modal B</button>

      {openA && (
        <Modal>
          <button onClick={() => setOpenA(false)}>Close A</button>
        </Modal>
      )}

      {openB && (
        <Modal>
          <button onClick={() => setOpenB(false)}>Close B</button>
        </Modal>
      )}
    </ModalProvider>
  );
}