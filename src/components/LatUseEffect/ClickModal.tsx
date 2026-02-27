import { useState } from "react"
import { useClickOutside } from "../../Hooks/KlickOutside"


export default function Demo() {
  const [open, setOpen] = useState(false)

  const boxRef = useClickOutside<HTMLDivElement>(() => {
    setOpen(false)
  })

  return (
    <div style={{ padding: "4rem" }}>
      <button onClick={() => setOpen(true)}>Open</button>

      {open && (
        <div
          ref={boxRef}
          style={{
            marginTop: "1rem",
            padding: "2rem",
            border: "2px solid black",
            width: "200px",
          }}
        >
          Klik di luar saya untuk menutup
        </div>
      )}
    </div>
  )
}