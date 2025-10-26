"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Courses() {
  const courses = [
    {
      title: "Clarity to Cashflow",
      description:
        "Transform your business idea into a clear, profitable plan. Learn how to position, price, and sell your offers with confidence.",
      href: "#",
    },
    {
      title: "The Strategic CEO",
      description:
        "Step into your CEO mindset and learn systems for sustainable growth. Perfect for entrepreneurs ready to scale.",
      href: "#",
    },
    {
      title: "Purpose & Profit Bootcamp",
      description:
        "Align your business with your purpose while building structures that create consistent income and balance.",
      href: "#",
    },
  ];

  return (
    <section id="courses" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mx-auto max-w-3xl mb-12">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] font-semibold text-sm"
          >
            Programs
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-(--font-playfair) text-gray-800 leading-tight"
          >
            Courses that help you build with <span className="bg-linear-to-r from-[#0F766E] to-[#EC4899] bg-clip-text text-transparent">clarity</span> and <span className="text-[#EC4899]">momentum</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-gray-600 mt-4"
          >
            Short, actionable programs and deep-dive courses for entrepreneurs who want predictable growth.
          </motion.p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {courses.map((course, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-r from-[#0F766E] to-[#EC4899] text-white text-lg font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">{course.description}</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-600">4 modules · self-paced</div>
                <div className="flex items-center gap-3">
                  <Link
                    href={course.href}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-[#EC4899] text-white hover:bg-[#be185d] transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/courses"
            className="inline-block px-8 py-3 rounded-full font-semibold text-[#0F766E] border-2 border-[#0F766E] hover:bg-[#0F766E] hover:text-white transition-all duration-300"
          >
            See all courses
          </Link>
        </div>
      </div>
    </section>
  );
}
