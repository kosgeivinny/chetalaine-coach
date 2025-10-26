"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "Finding Clarity in Your Business Vision",
    excerpt:
      "Learn how to cut through the noise, reconnect with your purpose, and set a direction that fuels long-term success. Discover practical exercises and frameworks.",
    date: "October 10, 2025",
    image: "/images/business.jpeg",
    category: "Business Strategy",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "Mindset Shifts Every Entrepreneur Needs",
    excerpt:
      "Discover the powerful mindset habits that help entrepreneurs stay grounded, strategic, and confident under pressure. Transform challenges into opportunities.",
    date: "September 22, 2025",
    image: "/images/leadership.png",
    category: "Leadership",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "Building Systems That Support Growth",
    excerpt:
      "Stop relying on chaos — learn how to design business systems that save time and sustain your momentum. Practical tips for sustainable scaling.",
    date: "August 30, 2025",
    image: "/images/productivity.jpeg",
    category: "Productivity",
    readTime: "6 min read",
    slug: "#",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 bg-white">
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
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#0F766E]/10 text-[#0F766E] text-sm font-semibold">
            Latest Insights
          </div>

          <h2 className="text-3xl md:text-4xl font-(--font-playfair) text-gray-800 mb-6">
            Strategies for <span className="text-[#EC4899]">Growth</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh perspectives and actionable strategies from Monica&apos;s experience helping entrepreneurs
            grow with clarity and confidence.
          </p>
        </motion.div>

        {/* ===== Blog Cards ===== */}
        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent z-10" />
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <time dateTime={blog.date}>{blog.date}</time>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#0F766E] transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <Link
                  href={blog.slug}
                  className="inline-flex items-center text-[#0F766E] font-semibold hover:text-[#EC4899] transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="group relative inline-flex items-center px-8 py-4 rounded-full border-2 border-[#0F766E] bg-transparent text-[#0F766E] font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#0F766E]/20"
          >
            <span className="relative z-10 flex items-center text-lg">
              View All Articles
              <svg className="w-5 h-5 ml-2 transition-transform duration-500 ease-out group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#0F766E] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute inset-0 bg-white opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-10"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}