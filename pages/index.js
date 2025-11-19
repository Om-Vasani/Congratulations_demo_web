import Head from 'next/head'
import { useState } from 'react'

export default function HybridLanding() {
  const [showAIReply, setShowAIReply] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const whatsappNumber = '916356084348'
  const prefilledMessage = encodeURIComponent("Hello! I want project details.")

  function handleWhatsAppClick() {
    const link = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`
    window.open(link, "_blank")

    setShowAIReply(true)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">

      <Head>
        <title>Arkiton Premium AI Landing</title>
      </Head>

      {/* HEADER */}
      <header className="p-6 sticky top-0 bg-slate-900/40 backdrop-blur-xl shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl">
              ⚡
            </div>
            <div>
              <h1 className="text-2xl font-bold">Arkiton Premium</h1>
              <p className="text-xs text-slate-300">Super-Fast • AI Ready • Modern UI</p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN SECTION */}
      <main className="flex justify-center px-4 pt-12 pb-20">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-white/10">

          <h1 className="text-5xl font-extrabold leading-tight">
            Premium AI-Powered WhatsApp Landing
          </h1>

          <p className="mt-4 text-slate-200 text-lg leading-relaxed">
            Modern UI • Glassmorphism • Animations • Ultra Fast Performance  
            — Designed for instant WhatsApp lead conversion.
          </p>

          {/* BUTTON */}
          <button
            onClick={handleWhatsAppClick}
            className="mt-8 px-8 py-4 rounded-xl bg-green-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Chat on WhatsApp
          </button>

          {/* AI REPLY BOX */}
          {showAIReply && (
            <div className="mt-10 p-5 bg-white/20 rounded-xl backdrop-blur-xl border border-white/20">
              <p className="text-white text-lg">
                🤖 <strong>AI:</strong> Hello! Tell me your project details — I will share cost & timeline within 60 seconds.
              </p>
            </div>
          )}

        </div>
      </main>

      {/* TOAST */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 px-5 py-3 bg-black/70 backdrop-blur-md rounded-xl shadow-lg text-white text-sm">
          AI auto-reply sent instantly
        </div>
      )}
    </div>
  )
}
