// components/TestimonialsSection.tsx
import React from 'react';
import Link from 'next/link';
import { FaQuoteLeft } from 'react-icons/fa'; 

const TestimonialsSection = () => {
  // --- THEME DEFINITIONS (For reference) ---
  const TEXT_LIGHT = '#5A5A5A';     
  const ACCENT_PINK = '#E3A5A5';    
  const PRIMARY_DARK = '#1C3A35';    
  
  // Tailwind classes using custom hex codes: (Using Static Notation for Safety)
  const textLightClass = `text-[${TEXT_LIGHT}]`;
  const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`; 
  const accentTextClass = `text-[${ACCENT_PINK}]`;
  
  // Font Classes
  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 

  const testimonials = [
    {
      quote: "Before Monica, I was constantly second-guessing my business identity. Now, I'm fully aligned. My revenue doubled in six months because I finally understood my purpose and built a strategy around it.",
      name: "Sarah K.",
      title: "Founder, Creative Agency",
      result: "2X Revenue Growth"
    },
    {
      quote: "Monica's guidance helped me break free from burnout. Her framework is the perfect blend of strategy and soul. I now work fewer hours, and my impact (and profit) is greater than ever.",
      name: "Jessica P.",
      title: "E-Commerce Entrepreneur",
      result: "Reduced Work Hours by 30%"
    },
    {
      quote: "My cleaning service was struggling to scale efficiently. Monica helped us define a clear operational strategy and install systems that boosted our capacity by 40% in three months.",
      name: "Linda E.",
      title: "Founder, Linkya Cleaning Services",
      result: "40% Boost in Capacity"
    },
    {
      quote: "Shaping Futures needed a sustainable funding model. Monica's strategic review helped us secure two new grants and build a community empowerment framework that is replicable and impactful.",
      name: "Kevin O.",
      title: "Founder, Shaping Futures (Non-Profit)",
      result: "Secured New Funding"
    },
  ];

  return (
    // Background Color: Soft Blush Pink
    <section className={`py-20 md:py-32 bg-[#F9D9D9] overflow-hidden`}>
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Section Heading & Subtitle (FADE UP) */}
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className={`text-sm font-semibold uppercase tracking-widest ${accentTextClass} ${bodyFont} mb-2`}>
            Proof & Results
          </h2>
          <h2 className={`text-4xl md:text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-4`}>
            What My Clients Are Saying
          </h2>
          <p className={`text-xl ${textLightClass} ${bodyFont} max-w-3xl mx-auto`}>
            Read the stories of entrepreneurs who built profitable businesses rooted in their true purpose.
          </p>
        </div>

        {/* Testimonial Grid: Now a 2x2 grid on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              // Apply staggered animation to each card
              data-aos="flip-up" // A subtle flip/zoom for impact
              data-aos-delay={index * 150} // Staggered delay: 0ms, 150ms, 300ms, 450ms
              className="p-10 rounded-2xl shadow-xl bg-white border-b-4 border-l-2 border-gray-100 relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft size={36} className={`${accentTextClass} opacity-20 absolute top-5 left-5`} />
              
              {/* Quote Text */}
              <p className={`text-xl font-medium ${textLightClass} ${bodyFont} leading-relaxed mt-4 mb-8`}>
                &quot;{test.quote}&quot;
              </p>
              
              {/* Client Info */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div>
                  {/* Client Name (Deep Green for authority) */}
                  <p className={`text-lg font-bold ${primaryDarkTextClass} ${headingFont}`}>
                    {test.name}
                  </p>
                  {/* Client Title */}
                  <p className={`text-sm ${accentTextClass} ${bodyFont} uppercase tracking-wider mt-1`}>
                    {test.title}
                  </p>
                </div>
                {/* Highlighted Result (Deep Green BG) */}
                <span className={`ml-auto text-sm font-semibold text-white bg-[#1C3A35] px-4 py-1 rounded-full shadow-md`}>
                    {test.result}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* --- Main CTA below Testimonials (FADE UP) --- */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-aos-delay="600" // Ensures the CTA appears after the last card animation
        >
             <Link 
                href="/testimonials" 
                // CTA Button: Pink BG and Darker Pink Hover
                className={`inline-block rounded-full px-10 py-3 text-lg font-bold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] bg-[#E3A5A5] hover:bg-[#D48D8D]`}
              >
                Read 20+ More Success Stories
            </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;