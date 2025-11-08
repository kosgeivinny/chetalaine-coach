// components/AboutSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
  // --- THEME DEFINITIONS (For reference, not for interpolation) ---
  const TEXT_LIGHT = '#5A5A5A';     
  const PRIMARY_DARK = '#1C3A35';    
  
  // Tailwind classes using custom hex codes: (Using Static Notation for Safety)
  const textLightClass = `text-[${TEXT_LIGHT}]`;
  const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`; 
  
  // Font Classes
  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 

  return (
    // Background is explicitly set using static bracket notation: bg-[#F9D9D9]
    <section className={`py-20 md:py-32 bg-[#F9D9D9] overflow-hidden`}> 
      <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row gap-12 items-center">

        {/* Left Column: Image (Animated to slide in from left) */}
        <div 
          className="lg:w-5/12 w-full"
          data-aos="fade-right" // Image slides in from the left
          data-aos-duration="1000"
        >
          <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/monica.jpeg" 
              alt="Monica Chetalaine in a coaching setting" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Column: Text & CTA (Animated to slide in from right) */}
        <div 
          className="lg:w-7/12 w-full lg:pl-10"
          data-aos="fade-left" // Text content slides in from the right
          data-aos-duration="1000"
          data-aos-delay="200" // Slight delay to make it appear after the image starts
        >
          
          {/* Tag for Authority: Pink BG */}
          <h2 className={`text-sm font-bold uppercase tracking-widest bg-[#E3A5A5] text-white px-3 py-1 inline-block rounded-full mb-4`}>
            Our Foundation
          </h2>
          
          {/* Main Heading: Deep Green Text */}
          <h2 className={`text-4xl md:text-5xl font-extrabold ${headingFont} ${primaryDarkTextClass} leading-tight mb-6`}>
            The Monica Chetalaine Philosophy
          </h2>

          {/* Core Philosophy Paragraph 1 */}
          <p className={`text-lg md:text-xl ${textLightClass} ${bodyFont} mt-4`}>
            Hi, I&apos;m Monica. For over <strong>10 years</strong>, I&apos;ve been blending <strong>market-tested business strategy</strong> with the transformative power of <strong>Identity Coaching.</strong> I found that the best strategy in the world crumbles without inner alignment.
          </p>

          {/* Core Philosophy Paragraph 2: Unique Approach Highlight */}
          <p className={`text-lg md:text-xl ${textLightClass} ${bodyFont} mt-6 italic border-l-4 border-[#1C3A35] pl-4`}>
            My unique approach is simple: Your most authentic self is your most profitable asset. I help you define your core <strong>Purpose</strong> so we can build a <strong>Strategy</strong> that is both profitable and deeply fulfilling.
          </p>

          {/* CTA Button: Pink BG and Darker Pink Hover (STATIC HEX CODES) */}
          <Link 
            href="/about" 
            className={`inline-block mt-10 rounded-full text-lg font-bold text-white py-3 px-8 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] bg-[#E3A5A5] hover:bg-[#D48D8D]`}
            data-aos="fade-up" // CTA button fades up
            data-aos-delay="400" // Delayed to appear after text
          >
            Read My Full Story & Values
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
