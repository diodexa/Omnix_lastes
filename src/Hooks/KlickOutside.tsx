import { useEffect, useRef } from "react"

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        elementRef.current && !elementRef.current.contains(event.target as Node)
      ) {
        callback()
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
        document.removeEventListener("mousedown", handler)
    }
  }, [callback])

  return elementRef
}