"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah N.",
    title: "Founder, Bloom Wellness",
    quote:
      "Working with Monica transformed my business mindset. I gained clarity, confidence, and a strategy that actually works. My revenue doubled within months!",
    impact: "2x Revenue Growth",
    initials: "SN",
    bgColor: "bg-[#0F766E]",
  },
  {
    name: "Kevin O.",
    title: "Founder, Shaping Futures",
    quote:
      "Monica's coaching reignited my leadership vision for Shaping Futures. She helped me refine our mission and design sustainable community programs that truly empower youth through creativity and education. Today, our foundation impacts lives with more clarity and structure than ever before.",
    impact: "Empowering Youth",
    initials: "KO",
    bgColor: "bg-[#EC4899]",
  },
  {
    name: "David M.",
    title: "Tech Entrepreneur",
    quote:
      "Monica helped me identify what truly mattered in my business and eliminate distractions. I now lead with vision and purpose.",
    impact: "Clear Business Vision",
    initials: "DM",
    bgColor: "bg-[#0F766E]",
  },
  {
    name: "Linda W.",
    title: "Creative Designer",
    quote:
      "Before coaching, I was overwhelmed and unsure of my next steps. Monica's guidance gave me structure and renewed motivation.",
    impact: "Renewed Direction",
    initials: "LW",
    bgColor: "bg-[#EC4899]",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-linear-to-br from-[#EC4899]/5 via-[#EC4899]/8 to-[#EC4899]/5"
    >
      <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#EC4899]/10 text-[#EC4899] text-sm font-semibold">
            Success Stories
          </div>
          
          <h2 className="text-3xl md:text-4xl font-(--font-playfair) text-gray-800 mb-6">
            Transforming <span className="text-[#0F766E]">Visions</span> Into Reality
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from entrepreneurs and professionals who have worked
            with Monica to find clarity and achieve meaningful growth.
          </p>
        </motion.div>

        {/* ===== Testimonial Cards ===== */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${t.bgColor} text-white flex items-center justify-center font-semibold transition-transform group-hover:scale-110`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-gray-800 truncate">{t.name}</div>
                  <div className="text-sm text-gray-500 truncate">{t.title}</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className={`${t.bgColor}/10 inline-block px-2.5 py-1 rounded-full text-xs font-medium ${t.bgColor === 'bg-[#0F766E]' ? 'text-[#0F766E]' : 'text-[#EC4899]'}`}>
                  {t.impact}
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}