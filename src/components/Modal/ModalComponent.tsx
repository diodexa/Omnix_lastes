// Modal.tsx
import { useEffect, useRef } from "react";
import { useModalManager } from "./ModalManager";

export function Modal({ children }: { children: React.ReactNode }) {
  const { register, unregister } = useModalManager();

  const idRef = useRef<string>(crypto.randomUUID());

  useEffect(() => {
    register(idRef.current);

    return () => {
      unregister(idRef.current);
    };
  }, [register, unregister]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ background: "white", padding: "2rem" }}>
        {children}
      </div>
    </div>
  );
}