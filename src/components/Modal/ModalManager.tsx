// ModalManager.tsx
import { createContext, useContext, useState, useCallback, useLayoutEffect } from "react";

type ModalManagerType = {
  register: (id: string) => void;
  unregister: (id: string) => void;
  openModals: string[];
};

const ModalManagerContext = createContext<ModalManagerType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openModals, setOpenModals] = useState<string[]>([]);

  const register = useCallback((id: string) => {
    setOpenModals((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  }, []);

  const unregister = useCallback((id: string) => {
    setOpenModals((prev) => prev.filter((modalId) => modalId !== id));
  }, []);

  // Scroll Lock (layout sensitive)
  useLayoutEffect(() => {
    if (openModals.length > 0) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [openModals]);

  return (
    <ModalManagerContext.Provider value={{ register, unregister, openModals }}>
      {children}
    </ModalManagerContext.Provider>
  );
}

export function useModalManager() {
  const context = useContext(ModalManagerContext);
  if (!context) {
    throw new Error("useModalManager must be used inside ModalProvider");
  }
  return context;
}