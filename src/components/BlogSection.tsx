// components/BlogSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogSection = () => {
  // --- THEME DEFINITIONS (Static Hex Codes) ---
  const TEXT_LIGHT = '#5A5A5A';     // Muted Gray
  const ACCENT_PINK = '#E3A5A5';    // Warm feminine pink (Link color)
  const PRIMARY_DARK = '#1C3A35';    // Deep Green (Main Heading & CTA BG)
  
  // Tailwind classes using static hex codes:
  const textLightClass = `text-[${TEXT_LIGHT}]`;
  const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`; 
  const accentTextClass = `text-[${ACCENT_PINK}]`;

  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 

  const blogPosts = [
    {
      image: "/images/business.jpeg", // Placeholder
      tag: "Identity",
      title: "The Subtle Shift from Strategy to Soul-Led Success",
      summary: "Discover the three non-negotiable questions you must ask yourself to align your business with your true identity and purpose.",
      link: "/blog",
    },
    {
      image: "/images/leadership.png", // Placeholder
      tag: "Strategy",
      title: "Why Your Strategy Isn't Working (And How to Fix It)",
      summary: "We break down the common mistakes entrepreneurs make when scaling and provide a simple, 4-step framework for profitable execution.",
      link: "/blog",
    },
    {
      image: "/images/productivity.jpeg", // Placeholder
      tag: "Productivity",
      title: "Beyond Burnout: How to Build Sustainable High Performance",
      summary: "Learn Monica's favorite high-efficiency systems and mindset hacks to boost output without sacrificing well-being and fulfillment.",
      link: "/blog",
    },
  ];

  return (
    // Background Color: Creamy White (Alternates from Soft Pink Testimonials)
    <section className={`py-20 md:py-32 bg-[#FFFDFB] overflow-hidden`}> 
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section Heading & Subtitle (FADE UP) */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className={`text-sm font-semibold uppercase tracking-widest ${accentTextClass} ${bodyFont} mb-2`}>
            Insights & Thought Leadership
          </h2>
          <h2 className={`text-4xl md:text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-4`}>
            Latest from the Aligned Empire Blog
          </h2>
          <p className={`text-xl ${textLightClass} ${bodyFont} max-w-3xl mx-auto`}>
            Get the latest wisdom on purpose-driven strategy, mindset, and authentic scaling straight to your inbox.
          </p>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            // Card Structure: Apply staggered animation
            <div 
              key={index} 
              data-aos="fade-up" // All cards fade up
              data-aos-delay={index * 150} // Staggered delay: 0ms, 150ms, 300ms
              className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:shadow-2xl hover:-translate-y-1 group"
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-52">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition duration-500 group-hover:scale-[1.05]"
                />
              </div>

              <div className="p-6">
                {/* Tag */}
                <span className={`text-xs font-semibold uppercase tracking-widest text-white bg-[#1C3A35] px-3 py-1 rounded-full shadow-md mb-3 inline-block`}>
                  {post.tag}
                </span>

                {/* Title */}
                <h3 className={`text-xl font-bold ${primaryDarkTextClass} ${headingFont} mb-3 group-hover:${accentTextClass} transition-colors`}>
                  {post.title}
                </h3>
                
                {/* Summary */}
                <p className={`text-base ${textLightClass} ${bodyFont} mb-4`}>
                  {post.summary}
                </p>
                
                {/* Read More Link */}
                <Link 
                  href={post.link} 
                  className={`text-base font-semibold ${accentTextClass} ${bodyFont} hover:underline transition-colors flex items-center`}
                >
                  Read Full Post
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* --- Main CTA below Blogs (FADE UP) --- */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-aos-delay="450" // Ensures the CTA appears after the last card
        >
             <Link 
                href="/blog" 
                // CTA Button: Deep Green BG and Pink Hover
                className={`inline-block rounded-full px-10 py-3 text-lg font-bold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] bg-[#1C3A35] hover:bg-[#E3A5A5]`}
              >
                Visit the Full Blog Archive
            </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;