import { useEffect, useState, useRef } from "react"
import { Card } from "./Components/Card"
import { Modal } from "./Components/Modal"
import { Cart } from "./Components/Cart"
import { Products } from "./Data/Products"

export const ShoppingPage = () => {
    const [Open, SetOpen] = useState(false)
    const [indexCurrent, setIndexCurrent] = useState(0)
    const item = Products()

    const [currentBg, setCurrentBg] = useState(item[0].background)
    const [prevBg, setPrevBg] = useState("")

    const bgRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const newBg = item[indexCurrent].background

        setPrevBg(prevBg)
        setCurrentBg(newBg)

        // 🔥 restart animation TANPA remount
        if (bgRef.current) {
        bgRef.current.style.animation = "none"
        bgRef.current.offsetHeight // force reflow
        bgRef.current.style.animation = "ShowContent 0.8s ease-out forwards"
        }

    }, [indexCurrent])

    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        
        {/* background lama */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: prevBg, zIndex: 0}}/>

        <div ref={bgRef} className="bg-layer"
            style={{ position: "absolute", inset: 0, backgroundColor: currentBg, zIndex: 1 }}/>

        <div style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ textAlign: "center" }}>Shopping Page</h1>

            <Card IndexCurrent={indexCurrent} setIndexCurrent={setIndexCurrent} />

            <button onClick={() => SetOpen(true)}>Buka Cart</button>

            {Open && (
            <Modal onClose={() => SetOpen(false)}>
                <Cart />
            </Modal>
            )}
        </div>

        <style>
            {`
            .bg-layer {
                clip-path: circle(0% at 70% 50%);
            }

            @keyframes ShowContent {
                from {
                clip-path: circle(0% at 70% 50%);
                }
                to {
                clip-path: circle(150% at 70% 50%);
                }
            }
            `}
        </style>
        </div>
    )
}