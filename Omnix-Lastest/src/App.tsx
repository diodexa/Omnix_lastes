
import './App.css'

function App() {


  return (
    <>
      <div className="grid h-screen grid-cols-[280px_1fr_320px] bg-gray-50">

      {/* LEFT SIDEBAR */}
      <aside className="border-r bg-white p-4">
        <h2 className="mb-4 text-sm font-bold text-gray-600 border-b border-gray-400">
          Total Handling
        </h2>
        <div>
          <h1>RTC</h1>
          <div className="rounded-lg bg-indigo-50 p-3">
            <p className="font-semibold">Chat</p>
          </div>
        </div>
      </aside>

      <aside className="border-r bg-white p-4">
        <h2 className="mb-4 text-sm font-bold text-gray-600 border-b border-gray-400">
          Total Handling
        </h2>
        <div>
          <div className="rounded-lg bg-indigo-50 p-3">
            <p className="font-semibold text-indigo-700">Andry</p>
            <p className="text-xs text-gray-500">
              Follow up status pengiriman
            </p>
          </div>
        </div>
      </aside>
      {/* CHAT AREA */}
      <main className="flex flex-col">

        {/* HEADER */}
        <header className="flex items-center justify-between border-b bg-white px-6 py-4">
          <div>
            <h1 className="text-sm font-semibold">
              [Ganti Kartu] Follow up status pengiriman
            </h1>
            <p className="text-xs text-gray-500">
              Waiting time 04:48
            </p>
          </div>

          <div className="flex gap-2">
            <button className="rounded-md border px-3 py-1 text-sm">
              Transfer
            </button>
            <button className="rounded-md bg-indigo-600 px-3 py-1 text-sm text-white">
              End Interaction
            </button>
          </div>
        </header>

        {/* MESSAGES */}
        <section className="flex-1 space-y-4 overflow-y-auto p-6">

          {/* incoming */}
          <div className="max-w-[60%] rounded-lg bg-gray-200 px-4 py-2 text-sm">
            Aku cek dulu interaksinya ya nanti aku balik lagi
          </div>

          {/* outgoing */}
          <div className="ml-auto max-w-[60%] rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
            Hai kak aku Odi temannya Nindy
          </div>

        </section>

        {/* INPUT */}
        <footer className="border-t bg-white p-4">
          <div className="flex gap-2">
            <input
              placeholder="Write something..."
              className="flex-1 rounded-md cdborder px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
              Send
            </button>
          </div>
        </footer>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="border-l bg-white p-4">
        <h2 className="mb-4 text-sm font-semibold text-gray-600">
          Customer Information
        </h2>

        <div className="space-y-2 text-sm">
          <p><b>Name:</b> Andry</p>
          <p><b>Email:</b> byhngstore@gmail.com</p>
          <p><b>Phone:</b> +6285xxxx</p>
        </div>
      </aside>

    </div>
    </>
  )
}

export default App
