"use client";

import React, { useRef, useEffect, useState } from 'react';

// --- THEME DEFINITIONS ---
const PRIMARY_DARK = '#1C3A35';    // Deep Green (Headings, Main BG)
const ACCENT_PINK = '#E3A5A5';    // Soft Pink (Accent, Links, Borders)
const TEXT_LIGHT = '#5A5A5A';     // Muted Gray (Body Text)
const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White (Main Background)
const LIGHT_ACCENT_BG = '#F5E6E6'; // Light Pink background for Hero

// Tailwind Utility Classes using defined colors
const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

const headingFont = 'font-serif';
const bodyFont = 'font-sans'; 

// --- ANIMATION LOGIC (IntersectionObserver Simulation) ---

/**
 * Custom hook to detect when an element is in the viewport.
 */
const useInView = <T extends HTMLElement | null>(ref: React.RefObject<T>, threshold = 0.1) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current; // Capture ref.current for consistent cleanup

        // Ensure we only create the observer if we have an element
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    // Stop observing once visible to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            },
            { threshold: threshold }
        );

        observer.observe(element);

        return () => {
            // Cleanup: Unobserve the captured element reference.
            observer.unobserve(element);
        };
    }, [ref, threshold]); // setInView is stable, so we don't need it here

    return inView;
};

/**
 * Wrapper component for Fade-Up/Slide-In animation on scroll.
 */
interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number; // Delay in milliseconds
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, 0.1);

    const baseClasses = "transition-all duration-1000 ease-out will-change-transform";
    const animateClasses = inView 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-12";

    return (
        <div ref={ref} className={`${baseClasses} ${animateClasses} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    );
};


// --- ICON PLACEHOLDERS ---
const MailIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>
);
const PhoneIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.158l-2.298 1.15a.998.998 0 00-.704 1.135l.675 3.125A18.028 18.028 0 0019 19h1.5a.5.5 0 00.5-.5V19a2 2 0 01-2 2h-1.5a.5.5 0 00-.5.5V20.5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5V19a2 2 0 012-2h1.5a.5.5 0 00.5-.5V18.5a.5.5 0 00-.5-.5h-.5a.5.5 0 00-.5.5v.5a.5.5 0 00.5.5h.5a.5.5 0 00.5-.5V19a2 2 0 012-2H5a2 2 0 01-2-2z"></path></svg>
);
const WhatsAppIcon = (props: { className?: string; size?: number }) => (
    // Simple chat bubble for WhatsApp
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z"></path></svg>
);
const MapPinIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

// --- REUSABLE CONTACT INFO CARD ---
interface InfoCardProps {
    Icon: React.ElementType;
    title: string;
    detail: string;
    link?: string;
    delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ Icon, title, detail, link, delay = 0 }) => (
    <AnimatedSection delay={delay} className="h-full">
        <div 
            className={`flex items-start space-x-4 p-4 rounded-xl bg-white shadow-md border-l-4 border-[${ACCENT_PINK}]/70 
                        transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer`}
        >
            <div className={`shrink-0 p-3 rounded-full bg-[${LIGHT_ACCENT_BG}] ${accentTextClass}`}>
                <Icon size={24} />
            </div>
            <div>
                <h4 className={`text-lg font-semibold ${primaryDarkTextClass} ${headingFont}`}>{title}</h4>
                {link ? (
                    <a 
                        href={link} 
                        className={`text-base ${textLightClass} hover:${accentTextClass} transition-colors wrap-break-word`}
                    >
                        {detail}
                    </a>
                ) : (
                    <p className={`text-base ${textLightClass} wrap-break-word`}>{detail}</p>
                )}
            </div>
        </div>
    </AnimatedSection>
);

// --- MAIN COMPONENT ---
const ContactPage = () => {

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, this would post data to a server/API endpoint.
        console.log("Form submission simulated.");
        
        // Custom message box simulation (instead of alert())
        const form = e.currentTarget as HTMLFormElement;
        const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

        submitButton.textContent = "Message Sent! 🎉";
        // Fixed string interpolation for dynamic class names
        submitButton.classList.remove(`bg-[${PRIMARY_DARK}]`, 'hover:bg-[#2e5a52]');
        submitButton.classList.add('bg-green-600', 'hover:bg-green-700');
        submitButton.disabled = true;

        setTimeout(() => {
            // Reset button state and form
            submitButton.textContent = "Send Message";
            submitButton.classList.add(`bg-[${PRIMARY_DARK}]`, 'hover:bg-[#2e5a52]');
            submitButton.classList.remove('bg-green-600', 'hover:bg-green-700');
            submitButton.disabled = false;
            form.reset();
        }, 3000);
    };

    return (
        <main className={`${bodyFont} ${bgColorClass} min-h-screen`}>
            
            {/* HERO SECTION - Always visible */}
            <section className={`py-24 md:py-32 bg-[${LIGHT_ACCENT_BG}] text-center border-b-8 border-[${ACCENT_PINK}]`}>
                <div className="container mx-auto max-w-4xl px-4">
                    <h1 className={`text-sm font-bold uppercase tracking-[0.3em] ${accentTextClass} ${bodyFont} mb-4`}>
                        Let&apos;s Connect
                    </h1>
                    <h2 className={`text-6xl md:text-8xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-6`}>
                        Get in Touch
                    </h2>
                    <p className={`text-xl md:text-2xl ${TEXT_LIGHT} ${bodyFont} max-w-3xl mx-auto opacity-90`}>
                        Whether you are ready to start your journey or just have a question, reach out to us. We&apos;re here to help you find your alignment.
                    </p>
                </div>
            </section>
            
            <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28">

                {/* CONTACT DETAILS & FORM GRID */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Column 1: Contact Details (Animated Group) */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Title and Intro are part of the first animated block */}
                        <AnimatedSection delay={0}>
                            <h3 className={`text-3xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-6`}>
                                Contact Information
                            </h3>
                            <p className={textLightClass}>
                                Find us at our Kenyan office or reach out using any of the methods below.
                            </p>
                        </AnimatedSection>
                        
                        <div className="space-y-6">
                            {/* Individual cards with staggered delay */}
                            <InfoCard
                                Icon={MailIcon}
                                title="Email Address"
                                detail="hello@monicachetalaine.com"
                                link="mailto:hello@monicachetalaine.com"
                                delay={100}
                            />
                            <InfoCard
                                Icon={PhoneIcon}
                                title="Phone Number"
                                detail="+254 792 528 578"
                                link="tel:+254792528578"
                                delay={200}
                            />
                             <InfoCard
                                Icon={WhatsAppIcon}
                                title="WhatsApp"
                                detail="+254 792 528 578"
                                link="https://wa.me/254792528578"
                                delay={300}
                            />
                            <InfoCard
                                Icon={MapPinIcon}
                                title="Office Location"
                                detail="Utawala, Nairobi, Kenya"
                                link="#"
                                delay={400}
                            />
                        </div>
                    </div>

                    {/* Column 2 & 3: Contact Form (Animated Block) */}
                    <AnimatedSection delay={200} className="lg:col-span-2 h-full">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-[${ACCENT_PINK}] h-full">
                            <h3 className={`text-3xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-6`}>
                                Send Us a Message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${primaryDarkTextClass}`}>Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${ACCENT_PINK}] focus:border-[${ACCENT_PINK}] transition duration-150"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${primaryDarkTextClass}`}>Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${ACCENT_PINK}] focus:border-[${ACCENT_PINK}] transition duration-150"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${primaryDarkTextClass}`}>Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        rows={5} 
                                        required 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[${ACCENT_PINK}] focus:border-[${ACCENT_PINK}] transition duration-150 resize-none"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className={`w-full rounded-full px-8 py-3 text-lg font-bold text-white transition-all duration-300 shadow-lg bg-[${PRIMARY_DARK}] hover:bg-[#2e5a52] transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[${ACCENT_PINK}]/50`}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </AnimatedSection>
                </section>
                
                {/* GOOGLE MAPS EMBED (Animated Block) */}
                <AnimatedSection delay={500} className="mt-24">
                    <section>
                        <h3 className={`text-3xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-6`}>
                            Where to Find Us (Utawala, Kenya)
                        </h3>
                        {/* Responsive Map Container */}
                        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl border-4 border-[${PRIMARY_DARK}]" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                            {/* The iframe is absolutely positioned to fill the responsive container */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4037807990514!2d36.94860687102329!3d-1.2897157183708194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1300541a30ef%3A0x2155964a54937e55!2sUtawala!5e0!3m2!1sen!2ske!4v1762610828374!5m2!1sen!2ske" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Utawala, Nairobi, Kenya Map"
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </div>
                    </section>
                </AnimatedSection>

            </div>
        </main>
    );
};

export default ContactPage;