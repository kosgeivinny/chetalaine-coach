// components/ServicesSection.tsx
import React from 'react';
import Link from 'next/link';
// We'll use simple icons from react-icons to represent the pillars
import { FiTarget, FiZap, FiBookOpen } from 'react-icons/fi'; 

const ServicesSection = () => {
  // --- THEME DEFINITIONS (Static Hex Codes) ---
  const TEXT_DARK = '#1A1A1A';      // Deep Charcoal
  const TEXT_LIGHT = '#5A5A5A';     // Muted Gray
  const ACCENT_PINK = '#E3A5A5';    // Warm feminine pink (Card accent, icon color)
  const ACCENT_HOVER = '#D48D8D';   // Darker pink (CTA Hover)
  const PRIMARY_DARK = '#1C3A35';    // Deep Green (Main Heading & CTA text)
  const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White (Section Background)
  
  // Tailwind classes using static hex codes:
  const textDarkClass = `text-[${TEXT_DARK}]`;
  const textLightClass = `text-[${TEXT_LIGHT}]`;
  const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`; 
  const accentTextClass = `text-[${ACCENT_PINK}]`;
  const accentBgClass = `bg-[${ACCENT_PINK}]`;
  const accentHoverClass = `hover:bg-[${ACCENT_HOVER}]`;
  const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 
  
  const pillars = [
    {
      icon: FiTarget,
      title: "Pillar 1: Identity & Purpose",
      subtitle: "The Aligned Foundation",
      description: "Define your core values and authentic self. We eliminate self-doubt to build a business that is a true, magnetic extension of your highest purpose, ensuring deep fulfillment.",
      link: "/coaching#identity",
      cta: "Discover Your Purpose"
    },
    {
      icon: FiZap,
      title: "Pillar 2: Profitable Strategy",
      subtitle: "The Scalable Execution",
      description: "Customized 1:1 strategy focusing on measurable revenue growth, high-leverage systems, and client acquisition. Turn your purpose into profitable, streamlined action.",
      link: "/coaching",
      cta: "Explore 1:1 Coaching"
    },
    {
      icon: FiBookOpen,
      title: "Pillar 3: Self-Paced Mastery",
      subtitle: "The Empowerment Hub",
      description: "Access structured online courses and programs to master specific business and identity skills at your own pace. Perfect for leaders ready to implement systems immediately.",
      link: "/courses",
      cta: "View Course Catalog"
    },
  ];

  return (
    <section className={`py-20 md:py-32 ${bgColorClass}`}>
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section Heading & Subtitle (FADE UP) */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className={`text-sm font-semibold uppercase tracking-widest ${accentTextClass} ${bodyFont} mb-2`}>
            My Signature Approach
          </h2>
          <h2 className={`text-4xl md:text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-4`}>
            The Three Pillars of an Aligned Empire
          </h2>
          <p className={`text-xl ${textLightClass} ${bodyFont} max-w-3xl mx-auto`}>
            I meet you where you are, offering deep transformation, strategic execution, or self-paced mastery.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            // Card Structure: Adjusted duration-300 to duration-500
            <div 
              key={index} 
              data-aos="fade-up" // All cards fade up
              data-aos-delay={index * 150} // Staggered delay: 0ms, 150ms, 300ms
              className={`p-10 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 border-t-4 border-[${ACCENT_PINK}] bg-white`}
            >
              {/* Icon using Pink Accent */}
              <div className={`p-4 rounded-full inline-block mb-6 shadow-md border border-[${ACCENT_PINK}]`}>
                 <pillar.icon size={30} className={accentTextClass} />
              </div>
              
              {/* Title & Subtitle */}
              <p className={`text-sm font-semibold uppercase tracking-wider ${accentTextClass} mb-2`}>
                {pillar.subtitle}
              </p>
              <h3 className={`text-2xl font-bold ${textDarkClass} ${headingFont} mb-4`}>
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className={`text-base ${textLightClass} ${bodyFont} mb-8`}>
                {pillar.description}
              </p>
              
              {/* CTA Link using Deep Green Text */}
              <Link 
                href={pillar.link} 
                className={`text-base font-semibold uppercase tracking-wider ${primaryDarkTextClass} ${bodyFont} hover:underline transition-colors flex items-center group`}
              >
                {pillar.cta}
                {/* Arrow icon that moves slightly on hover */}
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          ))}
        </div>

        {/* --- Main CTA below the pillars (FADE UP) --- */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-aos-delay="450" // Ensures the CTA appears after the last card
        >
             <Link 
                href="/coaching" 
                className={`inline-block rounded-full px-10 py-3 text-lg font-bold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] ${accentBgClass} ${accentHoverClass}`}
              >
                Ready to Commit? View All Services
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;