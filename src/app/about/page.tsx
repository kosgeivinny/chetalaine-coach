"use client";

import React, { useRef, useEffect, useState } from 'react';

// --- THEME DEFINITIONS ---
const PRIMARY_DARK = '#1C3A35';    // Deep Green (Headings, Main BG)
const ACCENT_PINK = '#E3A5A5';    // Soft Pink (Accent, Links, Borders)
const TEXT_DARK = '#1A1A1A';      // Deep Charcoal
const TEXT_LIGHT = '#5A5A5A';     // Muted Gray (Body Text)
const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White (Main Background)
const LIGHT_ACCENT_BG = '#F5E6E6'; // Light Pink background for Hero

const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const textDarkClass = `text-[${TEXT_DARK}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

const headingFont = 'font-serif';
const bodyFont = 'font-sans'; 

// --- ICON PLACEHOLDERS ---
const StarIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.368a1 1 0 00.95.69h6.703a1 1 0 01.753 1.659l-5.454 3.407a1 1 0 00-.323 1.157l2.074 6.368c.3.921-.755 1.688-1.54 1.157l-5.454-3.407a1 1 0 00-1.175 0l-5.454 3.407c-.785.531-1.84-.236-1.54-1.157l2.074-6.368a1 1 0 00-.323-1.157L1.35 11.644a1 1 0 01.753-1.659h6.703a1 1 0 00.95-.69l2.073-6.368z"></path></svg>
);
const LayersIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
);
const HeartIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-.318-.318a4.5 4.5 0 00-6.364 0z"></path></svg>
);

// --- REUSABLE INTERSECTION OBSERVER HOOK ---
/**
 * Custom hook to determine if an element is on screen.
 * It stops observing once the element has been visible.
 */
const useOnScreen = <T extends HTMLElement>(ref: React.RefObject<T | null>, rootMargin = '0px', threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); 
                }
            },
            { rootMargin, threshold }
        );
        
        const currentElement = ref.current; 
        if (currentElement) { 
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [ref, rootMargin, threshold, isVisible]); // FIX: Added 'ref' to the dependency array

    return isVisible;
};

// --- TYPE DEFINITIONS ---
interface ValueCardProps {
    icon: React.ElementType; 
    title: string;
    description: string;
}

interface AnimatedValueCardProps extends ValueCardProps {
    index: number;
}

// --- VALUE CARD COMPONENT (With animation logic) ---
const AnimatedValueCard: React.FC<AnimatedValueCardProps> = ({ icon, title, description, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(cardRef, '0px', 0.1);

    // Staggered delay for the cards: index 0 = 100ms, index 1 = 200ms, etc.
    const animationClass = `transition-all duration-700 ease-out delay-[${index * 150}ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

    return (
        <div 
            ref={cardRef}
            className={`p-8 bg-white rounded-xl shadow-lg border-2 border-transparent transition duration-300 transform hover:shadow-2xl hover:-translate-y-1 hover:border-[${ACCENT_PINK}] ${animationClass}`}
        >
            {/* Use React.createElement for dynamically passing the icon component */}
            {React.createElement(icon, { className: accentTextClass, size: 36 })}
            <h3 className={`text-xl font-bold ${primaryDarkTextClass} ${headingFont} mt-4 mb-2`}>{title}</h3>
            <p className={`text-base ${textLightClass}`}>{description}</p>
        </div>
    );
};

// --- METHODOLOGY STEP COMPONENT (With animation logic) ---
interface MethodologyStepProps {
    step: number;
    title: string;
    description: string;
    index: number;
}
const MethodologyStep: React.FC<MethodologyStepProps> = ({ step, title, description: desc, index }) => {
    const stepRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(stepRef, '0px', 0.1);

    // Staggered delay for the steps
    const animationClass = `transition-all duration-700 ease-out delay-[${index * 150}ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

    return (
        <div 
            ref={stepRef}
            className={`flex flex-col md:flex-row items-start mb-8 p-6 rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-l-8 border-[${ACCENT_PINK}] ${animationClass}`}
        >
            <div className={`shrink-0 w-12 h-12 rounded-full bg-[${ACCENT_PINK}] text-white flex items-center justify-center text-2xl font-extrabold mr-6 shadow-md`}>
                {step}
            </div>
            <div>
                <h4 className={`text-2xl font-bold ${primaryDarkTextClass} ${headingFont} mb-2`}>
                    {title}
                </h4>
                <p className={textLightClass}>
                    {desc}
                </p>
            </div>
        </div>
    );
};


// --- MAIN COMPONENT ---
const AboutPage = () => {
    
    // Placeholder URL for Monica's image
    const monicaImageUrl = "images/monica.jpeg";
    
    // 1. HERO Animation (On Load)
    const [heroVisible, setHeroVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => setHeroVisible(true), 100);
    }, []);
    const heroAnimationClass = `transition-all duration-1000 ease-out ${
        heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;

    // 2. STORY Section Animation (On Scroll)
    const storyImageRef = useRef<HTMLDivElement>(null);
    const storyTextRef = useRef<HTMLDivElement>(null);
    const storyImageVisible = useOnScreen(storyImageRef, '0px', 0.1);
    const storyTextVisible = useOnScreen(storyTextRef, '0px', 0.1);

    const storyImageAnimationClass = `transition-all duration-700 ease-out delay-100 ${
        storyImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
    }`;
    const storyTextAnimationClass = `transition-all duration-700 ease-out delay-200 ${
        storyTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`;
    
    // 3. CTA Animation (On Scroll)
    const ctaRef = useRef<HTMLDivElement>(null);
    const ctaVisible = useOnScreen(ctaRef, '0px', 0.2);
    const ctaAnimationClass = `transition-all duration-700 ease-out delay-200 ${
        ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`;


    return (
        <main className={`${bodyFont} ${bgColorClass} overflow-hidden min-h-screen`}>
            
            {/* 1. HERO SECTION: Full Story Introduction (Animates on Load) */}
            <section className={`py-24 md:py-32 bg-[${LIGHT_ACCENT_BG}] text-center overflow-hidden border-b-8 border-[${ACCENT_PINK}]`}>
                <div className={`container mx-auto max-w-4xl px-4 ${heroAnimationClass}`}>
                    <h1 className={`text-sm font-bold uppercase tracking-[0.3em] ${accentTextClass} ${bodyFont} mb-4`}>
                        My Journey to Alignment
                    </h1>
                    <h2 className={`text-6xl md:text-8xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-6`}>
                        The Full Story
                    </h2>
                    <p className={`text-xl md:text-2xl ${textDarkClass} ${bodyFont} max-w-3xl mx-auto opacity-90`}>
                        From burnout to breakthrough: learn how I created a methodology that ensures business success is synonymous with personal fulfillment.
                    </p>
                </div>
            </section>
            
            <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28">

                {/* 2. MONICA'S FULL STORY (Animates on Scroll) */}
                <section className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                    
                    {/* Image Column */}
                    <div 
                        ref={storyImageRef} 
                        className={`lg:w-5/12 w-full lg:sticky lg:top-8 ${storyImageAnimationClass}`}
                    >
                        {/* Image Placeholder */}
                        <div 
                            className="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-2xl"
                            style={{
                                backgroundImage: `url(${monicaImageUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                // Fallback for image loading: shows primary dark color
                                backgroundColor: PRIMARY_DARK, 
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-10"></div>
                        </div>
                        <p className={`text-sm ${textLightClass} mt-4 italic text-center`}>
                            Monica Chetalaine, Founder of The Aligned Empire
                        </p>
                    </div>

                    {/* Text Column */}
                    <div 
                        ref={storyTextRef}
                        className={`lg:w-7/12 w-full ${storyTextAnimationClass}`}
                    >
                        
                        <h3 className={`text-4xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-6`}>
                            Why Alignment is the Only Strategy That Lasts
                        </h3>
                        
                        <p className={`text-lg ${textLightClass} ${bodyFont} mt-4 mb-6`}>
                            My first decade in business was marked by high achievement and crippling exhaustion. I was hitting seven-figure targets, signing incredible clients, and yet, I felt completely hollowed out. I was a master strategist, but I was building an empire that didn&apos;t feel like my own. I was operating from a place of <strong>should</strong> instead of <strong>soul</strong>.
                        </p>
                        
                        <p className={`text-lg ${textLightClass} ${bodyFont} mb-6`}>
                            The turning point came during a mandated sabbatical. I realized that the core problem wasn&apos;t my business model—it was my <strong>identity</strong>. My strategy was misaligned with my truest self, forcing me into patterns of overwork and self-sacrifice. When I started integrating deep identity work and mindset reframing <strong>before</strong> laying out a tactical plan, everything changed.
                        </p>
                        
                        <blockquote className={`p-6 border-l-4 border-[${ACCENT_PINK}] bg-gray-50/50 rounded-lg my-8 shadow-md`}>
                            <p className={`text-xl ${primaryDarkTextClass} italic ${headingFont}`}>
                                &quot;Strategy without soul is just busywork. True success emerges when your business model is a direct, effortless extension of who you are meant to be.&quot;
                            </p>
                            <footer className={`mt-3 text-sm font-semibold ${accentTextClass}`}>— Monica Chetalaine</footer>
                        </blockquote>

                        <p className={`text-lg ${textLightClass} ${bodyFont} mb-6`}>
                            Today, I help entrepreneurs skip that decade of unnecessary struggle. We don&apos;t just build funnels and launch campaigns; we <strong>build an identity</strong> that naturally attracts success. This isn&apos;t just about making money—it&apos;s about creating a sustainable, joy-filled legacy where every action feels authentic.
                        </p>

                    </div>
                </section>

                {/* 3. CORE VALUES / PHILOSOPHY (Animates on Scroll, Staggered) */}
                <section className={`py-20 md:py-28 bg-[#F9D9D9] rounded-2xl p-8 md:p-16 shadow-2xl border-t-8 border-[${PRIMARY_DARK}]`}>
                    <h3 className={`text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-4 text-center`}>
                        Our Non-Negotiable Values
                    </h3>
                    <p className={`text-xl ${textLightClass} text-center max-w-3xl mx-auto mb-12`}>
                        These are the four pillars that guide every client interaction and every piece of content we create.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatedValueCard
                            icon={HeartIcon}
                            title="Authenticity"
                            description="We reject performance-based living. Your most authentic self is the basis for your most impactful work."
                            index={0}
                        />
                        <AnimatedValueCard
                            icon={LayersIcon}
                            title="Strategic Flow"
                            description="Systems and structure should support, not restrict, your energy. We design high-efficiency, low-friction strategies."
                            index={1}
                        />
                        <AnimatedValueCard
                            icon={StarIcon}
                            title="Purpose-Led Profit"
                            description="Profit is an energy exchange, not the goal. By focusing on your core purpose, abundance naturally follows."
                            index={2}
                        />
                         <AnimatedValueCard
                            icon={HeartIcon}
                            title="Sustainable Impact"
                            description="We prioritize lasting health and fulfillment over short-term gains. Burnout is a failure of design, not effort."
                            index={3}
                        />
                    </div>
                </section>

                {/* 4. METHODOLOGY DEEP DIVE (Animates on Scroll, Staggered) */}
                <section className="py-20 md:py-28">
                    <div className="max-w-4xl mx-auto">
                        <h3 className={`text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-6 text-center`}>
                            The Identity-Strategy Blend
                        </h3>
                        <p className={`text-xl ${textLightClass} text-center mb-12`}>
                            My coaching framework moves clients through three distinct phases to ensure alignment from the inside out.
                        </p>

                        <MethodologyStep 
                            step={1}
                            title="Define the Identity"
                            description="We start with deep shadow work, clearing limiting beliefs and stepping fully into the Identity of the CEO you need to be. This phase establishes unshakeable self-trust, the foundation of all future strategy."
                            index={0}
                        />

                        <MethodologyStep 
                            step={2}
                            title="Engineer the Strategy"
                            description="Once the internal alignment is set, we build simple, high-impact systems for enrollment, marketing, and fulfillment that feel easy and exciting. Your strategy is now an extension of your Purpose, not a mask."
                            index={1}
                        />
                        
                        <MethodologyStep 
                            step={3}
                            title="Activate the Empire"
                            description="This is the execution phase, focusing on intentional action and radical permission to evolve. We monitor performance not just in revenue, but in time freedom and emotional ease, ensuring growth is always joyful."
                            index={2}
                        />
                    </div>
                </section>
                
                {/* 5. FINAL CTA (Animates on Scroll) */}
                <section 
                    ref={ctaRef}
                    className={`mt-24 p-12 text-center rounded-2xl shadow-xl bg-[${LIGHT_ACCENT_BG}] border-2 border-[${ACCENT_PINK}]/80 ${ctaAnimationClass}`}
                >
                    <h4 className={`text-4xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-3`}>
                        Ready to Build Your Aligned Empire?
                    </h4>
                    <p className={`${textDarkClass} text-xl mb-8 max-w-3xl mx-auto opacity-90`}>
                        If you&apos;re ready for strategy that works, because it&apos;s sourced from your truest self, let&apos;s talk about what&apos;s next.
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

export default AboutPage;