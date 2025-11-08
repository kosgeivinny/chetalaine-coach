// components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  // --- THEME DEFINITIONS (Static Hex Codes) ---
  const TEXT_DARK = '#1A1A1A';      // Deep Charcoal
  const TEXT_LIGHT = '#5A5A5A';     // Muted Gray
  const ACCENT_PINK = '#E3A5A5';    // Warm feminine pink (CTA BG & Link Hover)
  const ACCENT_HOVER = '#D48D8D';   // Darker pink (CTA Hover)
  const PRIMARY_DARK = '#1C3A35';    // Deep Green (for strong contrast/tagline)
  const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White (Header BG)
  
  // Font Classes
  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 

  // --- Tailwind classes using static hex codes: ---
  // Background: Creamy White
  const bgColorClass = `bg-[${BACKGROUND_COLOR}]`; 
  
  // Text Colors
  const textDarkClass = `text-[${TEXT_DARK}]`;
  const textLightClass = `text-[${TEXT_LIGHT}]`;
  const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`; 
  
  // CTA Button Colors
  const accentBgClass = `bg-[${ACCENT_PINK}]`;
  const accentHoverClass = `hover:bg-[${ACCENT_HOVER}]`;

  return (
    // Applied slight extra vertical padding for a more luxurious feel
    <section className={`${bgColorClass} py-24 md:py-40 overflow-hidden`}>
      <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Headline and Call-to-Action (Order 2 on mobile, 1 on desktop) */}
        <div 
          className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
          data-aos="fade-right" // Main text block slides in from the left
          data-aos-duration="1000"
        >
          
          {/* Tagline: Uses the Deep Green color for authority and strong contrast */}
          <p className={`text-xl font-bold mb-4 ${primaryDarkTextClass} ${bodyFont} uppercase tracking-[0.2em]`}>
            Purpose | Identity | Strategy
          </p>
          
          {/* Primary Headline: FOCUS ON ALIGNED SUCCESS */}
          <h1 className={`text-5xl md:text-7xl font-extrabold leading-tight mb-8 ${textDarkClass} ${headingFont}`}>
            Build Your Profitable Empire <br className="hidden md:inline"/> with <strong><span className={primaryDarkTextClass}>Aligned</span></strong> Strategy.
          </h1>
          
          {/* Sub-Headline: Clear and concise value proposition */}
          <p className={`text-xl md:text-2xl mb-10 ${textLightClass} ${bodyFont}`}>
            I guide high-achievers to define their <strong>Purpose</strong> to build an unshakeable <strong>Strategy</strong> that drives massive success and profound fulfillment.
          </p>
          
          {/* Primary CTA Button: Soft Pink Accent, with a subtle "pulse" animation */}
          <Link 
            href="/book" 
            className={`inline-block rounded-full px-12 py-4 text-xl font-bold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.05] ${accentBgClass} ${accentHoverClass} animate-pulse-slow`}
            data-aos="zoom-in" // CTA button zooms in slightly
            data-aos-delay="500" // Delayed to appear after text
          >
            Start Your Discovery Session
          </Link>
          
          {/* --- Trust Bar / Social Proof Snippet --- */}
          <div 
            className="mt-8 pt-8 border-t border-gray-200"
            data-aos="fade-up" // Trust bar fades up
            data-aos-delay="700" // Appears after the main CTA
          >
            <p className={`text-sm font-medium ${textLightClass} uppercase tracking-widest`}>
              Trusted by 500+ Clients Worldwide & Featured In:
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mt-3 grayscale opacity-60">
                {/* Placeholders for logos (replace with actual image tags or components) */}
                <span className={`text-lg font-bold ${textLightClass}`}>FORBES</span>
                <span className={`text-lg font-bold ${textLightClass}`}>INC.</span>
                <span className={`text-lg font-bold ${textLightClass}`}>WALL STREET</span>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Image (Order 1 on mobile, 2 on desktop) */}
        <div 
          className="lg:w-1/2 order-1 lg:order-2 w-full max-w-lg lg:max-w-none"
          data-aos="zoom-out" // Image zooms out slightly upon loading
          data-aos-duration="1000"
        >
          {/* Image Container with Tilt, Glow, and Transition */}
          <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden shadow-2xl transition duration-500 ease-in-out
            
            transform hover:rotate-1
            
            ring-4 ring-offset-4 ring-[#E3A5A5] ring-offset-[#FFFDFB] hover:ring-8 hover:ring-offset-2
          "> 
            <Image 
              src="/images/monica.jpeg" 
              alt="Professional portrait of Coach Monica Chetalaine looking focused and confident" 
              fill 
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;