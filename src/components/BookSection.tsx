"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [datetime, setDatetime] = useState("");
  const [platform, setPlatform] = useState("Zoom");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setStatus("Please provide your name and email.");
      return;
    }

    const subject = `Booking request from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPreferred date/time: ${datetime}\nPreferred platform: ${platform}\nMessage: ${message}`;

    window.location.href = `mailto:monica@yourdomain.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email client to send the request...");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="sr-only">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-colors"
          required
        />

        <label className="sr-only">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-colors"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <input
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
          placeholder="Preferred date/time (optional)"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-colors"
        />

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 text-gray-800 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-colors cursor-pointer"
        >
          <option>Zoom</option>
          <option>Google Meet</option>
          <option>Phone</option>
          <option>WhatsApp</option>
        </select>
      </div>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Anything specific you'd like to cover (optional)"
        className="w-full mt-3 px-4 py-2 rounded-lg border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-colors resize-y"
        rows={4}
      />

      <div className="flex items-center gap-3 mt-4">
        <button
          type="submit"
          className="px-5 py-2 rounded-full bg-[#EC4899] text-white font-semibold shadow hover:bg-[#be185d] transition"
        >
          Request Booking
        </button>

        <span className="text-sm text-gray-600">or email <a className="text-[#0F766E] underline" href="mailto:monica@yourdomain.com">monica@yourdomain.com</a></span>
      </div>

      {status && <div className="mt-3 text-sm text-gray-700">{status}</div>}
    </form>
  );
}

export default function BookSection() {
  return (
    <section id="book" className="relative py-20 bg-linear-to-br from-[#F4FEFD] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Text + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left h-full"
          >
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-sm font-semibold">
              Schedule a Session
            </div>

            <h2 className="text-3xl md:text-4xl font-(--font-playfair) text-gray-800 leading-tight mb-4">
              Request a session with <span className="text-[#EC4899]">Monica</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mb-8">
              Fill the quick form and Monica will follow up to confirm a time and preferred platform (Zoom, Meet, Phone, WhatsApp).
            </p>

            {/* Booking form (client-side mailto fallback) */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <BookingForm />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <div className="text-sm text-gray-600">Preferred contact</div>
              <div className="flex items-center gap-4">
                <div className="text-[#0F766E] font-semibold">Email</div>
                <div className="text-[#EC4899] font-semibold">Phone</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Calendly / booking visual */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#F9FAFB] rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500">30 min Strategy Call</div>
                  <div className="text-lg font-semibold text-gray-800">Free discovery session</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-500">Zoom / Phone</div>
                  
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Contact Monica</div>
                  <div className="text-lg font-semibold text-gray-800">Choose a platform to connect</div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <a
                    href="mailto:monica@yourdomain.com"
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-[#F8FAFC] transition border border-gray-50"
                    aria-label="Email Monica"
                  >
                    <svg className="w-5 h-5 text-[#0F766E]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 7l-9 6-9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-800">Email</div>
                      <div className="text-sm text-gray-500">monica@yourdomain.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-[#F8FAFC] transition border border-gray-50"
                    aria-label="Call Monica"
                  >
                    <svg className="w-5 h-5 text-[#EC4899]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.84.36 1.66.72 2.42a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.66-1.66a2 2 0 0 1 2.11-.45c.76.36 1.58.6 2.42.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-800">Phone</div>
                      <div className="text-sm text-gray-500">+1 (234) 567-890</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg hover:bg-[#F8FAFC] transition border border-gray-50"
                    aria-label="Message on WhatsApp"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#128C7E] transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4 3.6C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.1-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 .1-3.2-1.2-6.2-3.4-8.2zm-8.4 18.3c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.5 4.5-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9s2.9 4.4 2.9 7c0 5.4-4.5 9.7-10 9.7z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-800">WhatsApp</div>
                      <div className="text-sm text-gray-500">Message on WhatsApp</div>
                    </div>
                  </a>

                  {/* Testimonial card */}
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F766E]/10 flex items-center justify-center text-[#0F766E] font-semibold">AC</div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-800">A. Carter</div>
                        <div className="text-sm text-gray-600">&ldquo;Monica helped me clarify my offers and double revenue in 6 months.&rdquo;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions text */}
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}