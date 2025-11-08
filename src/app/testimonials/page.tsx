"use client";

import React, { useRef, useEffect, useState } from 'react';

// --- THEME DEFINITIONS ---
const PRIMARY_DARK = '#1C3A35';    // Deep Green (Headings, Main BG)
const ACCENT_PINK = '#E3A5A5';    // Soft Pink (Accent, Links, Borders)
const TEXT_LIGHT = '#5A5A5A';     // Muted Gray (Body Text)
const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White (Main Background)
const LIGHT_ACCENT_BG = '#F5E6E6'; // Light Pink background for Hero

const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

const headingFont = 'font-serif';
const bodyFont = 'font-sans'; 

// --- ICON PLACEHOLDERS (Inline SVG replacement for FaQuoteLeft) ---
const QuoteIcon = (props: { className?: string; size?: number }) => (
    <svg 
        className={props.className} 
        width={props.size || 36} 
        height={props.size || 36} 
        fill="currentColor" 
        viewBox="0 0 512 512" 
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Simplified quote mark path for visual appeal */}
        <path d="M464 256C464 200.7 421.3 167.5 377.9 167.5C369.3 167.5 363.3 173.9 363.3 182.5V231.1C363.3 239.7 369.3 245.7 377.9 245.7C395 245.7 407.9 256 407.9 285.5C407.9 313.3 395 323.7 377.9 323.7C369.3 323.7 363.3 329.7 363.3 338.3V386.9C363.3 395.5 369.3 401.5 377.9 401.5C421.3 401.5 464 368.3 464 313C464 283.4 456.4 266.3 438.4 256H464ZM148.1 167.5C104.7 167.5 62 200.7 62 256C62 313 104.7 368.3 148.1 368.3C156.7 368.3 162.7 362.3 162.7 353.7V305.1C162.7 296.5 156.7 290.5 148.1 290.5C131 290.5 118.1 278.4 118.1 256C118.1 233.6 131 221.5 148.1 221.5C156.7 221.5 162.7 215.5 162.7 206.9V158.3C162.7 149.7 156.7 143.7 148.1 143.7Z" />
    </svg>
);

// --- DATA: Full List of Testimonials ---
const testimonials = [
    // User Provided Testimonials
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
    // Additional Testimonials for depth
    { 
        quote: "I was making money but losing sleep. Monica helped me redesign my entire offer suite to match my highest energy level. I now earn more while feeling completely energized by my work.", 
        name: "Mark R.", 
        title: "Executive Coach", 
        result: "Increased Energy & Flow" 
    },
    { 
        quote: "We scaled from 5 to 15 team members without chaos, purely due to the simplified strategic systems Monica implemented. It’s scaling with intention, not brute force.", 
        name: "Chloe V.", 
        title: "Tech Startup COO", 
        result: "Seamless Team Scaling" 
    },
    { 
        quote: "My jewelry business was creatively satisfying but financially unstable. Monica showed me how to align my artistic vision with a predictable, profitable launch strategy. I feel like a true CEO now.", 
        name: "Diana L.", 
        title: "Artisan Jeweler", 
        result: "Predictable Profit Model" 
    },
    { 
        quote: "The biggest win wasn't the revenue increase—it was the time back. I reclaimed 15 hours a week for family time, all while the business continued to grow autonomously.", 
        name: "David J.", 
        title: "Consulting Firm Owner", 
        result: "15 Hours Reclaimed Weekly" 
    },
];

// --- TYPE DEFINITIONS ---
interface Testimonial {
    quote: string;
    name: string;
    title: string;
    result: string;
}
interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number; // Added index for staggering
}

// --- TESTIMONIAL CARD COMPONENT (Handles its own visibility animation) ---
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If it enters the viewport, set to visible and stop observing
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 } // 10% visible to trigger
        );

        const currentCard = cardRef.current; // Capture the current ref value here

        if (currentCard) {
            observer.observe(currentCard);
        }
        
        return () => {
            // Use the captured value for unobserving
            if (currentCard) { 
                observer.unobserve(currentCard);
            }
        };
    }, [isVisible]); // isVisible is the only dependency that changes the logic

    // Animation classes: Staggered delay based on index
    const animationClasses = `
        transition-all duration-700 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
        delay-[${index * 150}ms]
    `;

    return (
        <div 
            ref={cardRef}
            className={`p-8 md:p-10 rounded-2xl shadow-xl bg-white border-b-4 border-l-2 border-[${ACCENT_PINK}] relative transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl ${animationClasses}`}
        >
            {/* Quote Icon */}
            <QuoteIcon size={36} className={`${accentTextClass} opacity-20 absolute top-5 left-5`} />
            
            {/* Quote Text */}
            <p className={`text-xl font-medium ${textLightClass} ${bodyFont} leading-relaxed mt-4 mb-8`}>
                &quot;{testimonial.quote}&quot;
            </p>
            
            {/* Client Info */}
            <div className="flex flex-wrap items-center pt-4 border-t border-gray-100">
                <div>
                    {/* Client Name (Deep Green for authority) */}
                    <p className={`text-lg font-bold ${primaryDarkTextClass} ${headingFont}`}>
                        {testimonial.name}
                    </p>
                    {/* Client Title */}
                    <p className={`text-sm ${accentTextClass} ${bodyFont} uppercase tracking-wider mt-1`}>
                        {testimonial.title}
                    </p>
                </div>
                {/* Highlighted Result (Deep Green BG) */}
                <span 
                    className={`ml-auto text-sm font-semibold text-white bg-[${PRIMARY_DARK}] px-4 py-1 rounded-full shadow-md`}
                >
                    {testimonial.result}
                </span>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const TestimonialsPage = () => {
    // State for Hero content animation (fades in immediately on load)
    const [heroVisible, setHeroVisible] = useState(false);

    // Ref and State for CTA animation (on scroll)
    const ctaRef = useRef<HTMLDivElement>(null);
    const [ctaVisible, setCtaVisible] = useState(false);

    // Hero content visibility (On Load)
    useEffect(() => {
        // Simple delay for a nice load-in effect
        setTimeout(() => setHeroVisible(true), 50);
    }, []);

    // CTA Section visibility (On Scroll)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !ctaVisible) {
                    setCtaVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 } // 20% visible to trigger
        );

        const currentCta = ctaRef.current; // Capture the current ref value here

        if (currentCta) {
            observer.observe(currentCta);
        }
        
        return () => {
            // Use the captured value for unobserving
            if (currentCta) {
                observer.unobserve(currentCta);
            }
        };
    }, [ctaVisible]); // ctaVisible is the only dependency that changes the logic
    
    // Base animation class for Hero & CTA
    const heroAnimationClass = `transition-all duration-1000 ease-out ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;
    
    const ctaAnimationClass = `transition-all duration-700 ease-out delay-200 ${
        ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;


    return (
        <main className={`${bodyFont} ${bgColorClass} overflow-hidden min-h-screen`}>
            
            {/* 1. HERO/HEADER SECTION (Fades in on load) */}
            <section className={`py-24 md:py-32 bg-[${LIGHT_ACCENT_BG}] text-center overflow-hidden border-b-8 border-[${ACCENT_PINK}]`}>
                <div className={`container mx-auto max-w-4xl px-4 ${heroAnimationClass}`}>
                    <h1 className={`text-sm font-bold uppercase tracking-[0.3em] ${accentTextClass} ${bodyFont} mb-4`}>
                        Aligned Success Stories
                    </h1>
                    <h2 className={`text-6xl md:text-8xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-6`}>
                        Built on Purpose
                    </h2>
                    <p className={`text-xl md:text-2xl text-[${PRIMARY_DARK}] ${bodyFont} max-w-3xl mx-auto opacity-90`}>
                        These are the entrepreneurs who stopped chasing goals and started living from their unique <strong>Identity</strong>, leading to effortless strategy and exponential growth.
                    </p>
                </div>
            </section>
            
            <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28">

                {/* 2. TESTIMONIAL GRID (Staggered fade-in on scroll) */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {testimonials.map((test, index) => (
                            <TestimonialCard 
                                key={index} 
                                testimonial={test}
                                index={index} // Pass index for delay
                            />
                        ))}
                    </div>
                </section>

                {/* 3. CLOSING CTA (Fade-in on scroll) */}
                <section 
                    ref={ctaRef}
                    className={`mt-24 p-12 text-center rounded-2xl shadow-xl bg-[${LIGHT_ACCENT_BG}] border-2 border-[${ACCENT_PINK}]/80 ${ctaAnimationClass}`}
                >
                    <h4 className={`text-4xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-3`}>
                        Is Your Story Next?
                    </h4>
                    <p className={`text-[${PRIMARY_DARK}] text-xl mb-8 max-w-3xl mx-auto opacity-90`}>
                        These results are available when your business strategy is in perfect harmony with your personal identity. Let&apos;s start building your Aligned Empire.
                    </p>
                    {/* CTA Button: Deep Green BG and Darker Green Hover */}
                    <a 
                        href="/book" 
                        className={`inline-block rounded-full px-10 py-4 text-lg font-bold text-white transition-all shadow-lg bg-[${PRIMARY_DARK}] hover:bg-[#2e5a52] transform hover:scale-[1.02] duration-300`}
                    >
                        Schedule an Alignment Call
                    </a>
                </section>
            </div>
        </main>
    );
};

export default TestimonialsPage;