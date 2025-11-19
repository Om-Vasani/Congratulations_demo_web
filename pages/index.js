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

  function openGoogleMaps() {
    const mapsLink =
      "https://www.google.com/maps/search/?api=1&query=6VR9%2BV6G+Mantra+Valley+Mota+Varachha+Surat+Gujarat+394105"
    window.open(mapsLink, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">

      <Head>
        <title>Mantra Valley AI Landing</title>
      </Head>

      {/* HEADER */}
      <header className="p-6 sticky top-0 bg-slate-900/40 backdrop-blur-xl shadow-lg z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl">
              ⚡
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mantra Valley</h1>
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

          {/* ADDRESS BLOCK */}
          <div className="mt-6 bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold">📍 Project Location</h3>
            <p className="text-slate-200 mt-1">
              6VR9+V6G Mantra Valley, Mota Varachha, Surat, Gujarat 394105
            </p>

            {/* Google Maps Button */}
            <button
              onClick={openGoogleMaps}
              className="mt-4 px-6 py-3 bg-blue-500 rounded-xl text-white font-medium shadow-lg hover:scale-105 transition"
            >
              Open in Google Maps
            </button>
          </div>

          {/* MINI GOOGLE MAP EMBED */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7923502710425!2d72.92355017538235!3d21.19662458106976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fd8a4b4f0cd%3A0x2ded08d564841c40!2sMantra%20Valley%2C%20Mota%20Varachha%2C%20Surat%2C%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1732000000000!5m2!1sen!2sin"
              width="100%"
              height="260"
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>

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
