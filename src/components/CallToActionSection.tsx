// components/CallToActionSection.tsx
import React from 'react';
import Link from 'next/link';

const CallToActionSection = () => {
  // --- THEME DEFINITIONS (Static Hex Codes) ---
  const TEXT_DARK = '#1A1A1A';      // Deep Charcoal
  const PRIMARY_DARK = '#1C3A35';    // Deep Green (Main Heading & Secondary link)
  
  // Tailwind classes using static hex codes:
  const textDarkClass = `text-[${TEXT_DARK}]`;
  const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`; 
  
  // Font Classes
  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 

  return (
    // Background Color: Soft Blush Pink (Alternates from Creamy White Blog)
    <section className={`py-20 md:py-32 bg-[#F9D9D9] overflow-hidden`}>
      <div 
        className="container mx-auto max-w-4xl px-4 text-center"
        data-aos="fade-up" // The entire text block fades in together
      >
        
        {/* Primary Headline: Deep Green for Authority */}
        <h2 className={`text-4xl md:text-6xl font-extrabold ${headingFont} ${primaryDarkTextClass} leading-tight mb-6`}>
          Ready to Claim Your Aligned Success?
        </h2>
        
        {/* Supporting Subtext */}
        <p className={`text-xl md:text-2xl ${textDarkClass} ${bodyFont} mt-4 mb-10 max-w-3xl mx-auto`}>
          Let&apos;s move beyond busywork and build a truly profitable business that feeds your purpose. Your path to fulfillment starts now.
        </p>
        
        {/* --- Primary CTA Button: Soft Pink Accent --- */}
        <Link 
          href="/book" 
          // CTA Button: Pink BG and Darker Pink Hover
          className={`inline-block rounded-full px-12 py-4 text-xl font-bold text-white transition-all shadow-2xl hover:shadow-xl hover:scale-[1.05] bg-[#E3A5A5] hover:bg-[#D48D8D] animate-pulse-slow`}
          data-aos="zoom-in" // This important button gets a zoom effect
          data-aos-delay="300" // Slight delay for emphasis
        >
          Book Your Discovery Session
        </Link>
        
        {/* Secondary Contact Link */}
        <p className={`text-base ${primaryDarkTextClass} ${bodyFont} mt-8`}>
          or 
          <Link href="/contact" className={`font-bold ml-2 hover:underline transition-colors`}>
            send me a message
          </Link> 
          to discuss a custom plan.
        </p>
        
      </div>
    </section>
  );
};

export default CallToActionSection;