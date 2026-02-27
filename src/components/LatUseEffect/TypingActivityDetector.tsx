import { useEffect, useRef, useState } from "react"

export default function TypingDetector() {
  const [status, setStatus] = useState("Idle")
  const [lastTypedTime, setLastTypedTime] = useState("-")

  // ✅ Render counter (tidak memicu render)
  const renderRef = useRef(0)
  renderRef.current++

  // ✅ Simpan timeout ID tanpa trigger render
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleTyping = () => {
    setStatus("Typing...")

    const now = new Date()
    setLastTypedTime(now.toLocaleTimeString())

    // 🔥 Hapus timer lama kalau ada
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // 🔥 Buat timer baru
    timeoutRef.current = setTimeout(() => {
      setStatus("Idle")
    }, 2000)
  }

  // ✅ Cleanup saat component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h2>Typing Detector</h2>

      <p>Total Render: {renderRef.current}</p>
      <p>Status: {status}</p>
      <p>Last Typed: {lastTypedTime}</p>

      <textarea
        onChange={handleTyping}
        style={{ border: "2px solid black", width: "300px", height: "100px" }}
      />
    </div>
  )
}
