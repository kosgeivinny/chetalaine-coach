"use client";

import React from 'react';

// NOTE: To resolve the Next.js ESLint warning, uncomment the line below 
// and replace the standard <img> tag with the <Image /> component in the CourseCard.
import Image from 'next/image';

// --- THEME DEFINITIONS ---
const PRIMARY_DARK = '#1C3A35';    
const ACCENT_PINK = '#E3A5A5';    
const TEXT_DARK = '#1A1A1A';      
const TEXT_LIGHT = '#5A5A5A';     
const BACKGROUND_COLOR = '#FFFDFB'; 
const LIGHT_ACCENT_BG = '#F5E6E6'; 

const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const textDarkClass = `text-[${TEXT_DARK}]`;
const primaryDarkBgClass = `bg-[${PRIMARY_DARK}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

const headingFont = 'font-serif';
const bodyFont = 'font-sans'; 

// --- TYPE DEFINITIONS & ICON PROPS ---

interface IconProps {
    className?: string;
    size?: number;
}

interface CourseImage {
    src: string;
    width: number;
    height: number;
}

interface Course {
    id: number;
    title: string;
    tagline: string;
    modules: number;
    duration: string;
    price: string;
    image: CourseImage; // Now using the structured image type
    href: string;
}

interface CourseCardProps {
    course: Course;
    index: number;
}


// --- ICON COMPONENTS (TYPES FIXED) ---

// FiBookOpen (Modules)
const BookOpenIcon: React.FC<IconProps> = ({ className, size }) => (
    <svg className={className} width={size || 20} height={size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.461 9.332 5 7.8 5c-2.43 0-4.4 1.97-4.4 4.4 0 1.088.39 2.122 1.097 2.923l2.872 3.513c.09.11.18.2.27.28l.2.18c.09.08.18.15.27.22l.2.16c.09.07.18.12.27.17l.2.13c.09.05.18.09.27.12l.2.06c.09.03.18.05.27.06l.2.01c.09 0 .18 0 .27-.01l.2-.06c.09-.03.18-.07.27-.12l.2-.17c.09-.08.18-.15.27-.22l.2-.18c.09-.08.18-.17.27-.27l2.872-3.513c.707-.801 1.097-1.835 1.097-2.923 0-2.43-1.97-4.4-4.4-4.4-1.532 0-3.032.461-4.2.984z"></path></svg>
);
// FiClock (Duration)
const ClockIcon: React.FC<IconProps> = ({ className, size }) => (
    <svg className={className} width={size || 20} height={size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
// FiChevronRight (CTA Arrow)
const ChevronRightIcon: React.FC<IconProps> = ({ className, size }) => (
    <svg className={className} width={size || 20} height={size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
);
// Trust/Checkmark Icon for FAQ
const CheckCircleIcon: React.FC<IconProps> = ({ className, size }) => (
    <svg className={className} width={size || 20} height={size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

// --- DUMMY DATA (Now structured for Next.js <Image /> component) ---
const courses: Course[] = [
    {
        id: 1,
        title: "The Identity & Impact Blueprint",
        tagline: "Uncover your core purpose to build an unshakable business foundation.",
        modules: 8,
        duration: "4 Weeks",
        price: "$497",
        // When you use your own images, replace this object with your imported image variable:
        // image: YourLocalImageVariable
        image: { 
            src: `/images/identity.jpeg`,
            width: 800,
            height: 600,
        },
        href: "#"
    },
    {
        id: 2,
        title: "High-Leverage Offer Creation",
        tagline: "Design premium service packages that sell themselves and reduce client churn.",
        modules: 6,
        duration: "3 Weeks",
        price: "$349",
        image: { 
            src: `/images/offer.jpeg`,
            width: 800,
            height: 600,
        },
        href: "#"
    },
    {
        id: 3,
        title: "Flow State Marketing Systems",
        tagline: "Implement effortless, automated marketing funnels that align with your natural energy.",
        modules: 10,
        duration: "Self-Paced",
        price: "$597",
        image: { 
            src: `/images/flow.jpeg`,
            width: 800,
            height: 600,
        },
        href: "#"
    },
];

// -----------------------------------------------------------------
// 1. Courses Page Hero
// -----------------------------------------------------------------
const CoursesHero: React.FC = () => (
    <section className={`py-24 md:py-40 bg-[${LIGHT_ACCENT_BG}] text-center overflow-hidden border-b-4 border-[${ACCENT_PINK}]/50`}>
        <div className="container mx-auto max-w-4xl px-4">
            <h1 className={`text-sm font-bold uppercase tracking-[0.3em] ${accentTextClass} ${bodyFont} mb-4`}>
                Self-Paced Digital Courses
            </h1>
            <h2 className={`text-6xl md:text-8xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-6`}>
                Scale Your Impact. <br /> Master Your <strong className={accentTextClass}>Method</strong>.
            </h2>
            <p className={`text-xl md:text-2xl ${textDarkClass} ${bodyFont} max-w-3xl mx-auto mb-10 opacity-90`}>
                Get the exact frameworks and processes used in 1:1 coaching, packaged into digestible, self-paced training you can start <strong>right now</strong>.
            </p>
        </div>
    </section>
);

// -----------------------------------------------------------------
// 2. Course Catalog / Grid Component
// -----------------------------------------------------------------
// Component props are now explicitly typed here
const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
    <a 
        href={course.href}
        className={`group block bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl border-2 border-transparent hover:border-[${ACCENT_PINK}]`}
    >
        {/* TO RESOLVE ESLINT: 
            1. Uncomment the Image import at the top.
            2. Swap the <img> tag below with this commented-out block: 

            <Image
                src={course.image.src}
                alt={course.title}
                width={course.image.width}
                height={course.image.height}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.05]"
            />
        */}
        <div className="relative h-56 w-full">
             <Image
                src={course.image.src}
                alt={course.title}
                width={course.image.width}
                height={course.image.height}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.05]"
                loading="lazy"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/fallback.jpg"; // ✅ Optional fallback image
                }}
            />
        </div>
        
        <div className="p-6 md:p-8">
            <h3 className={`text-3xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-3 leading-snug`}>{course.title}</h3>
            <p className={`${textLightClass} text-base mb-6 italic`}>{course.tagline}</p>
            
            {/* Meta Data */}
            <div className={`flex justify-between items-center text-sm mb-6 border-t border-b py-3 border-gray-100`}>
                <div className={`${textLightClass} flex items-center font-medium`}>
                    <BookOpenIcon size={18} className={`mr-2 ${accentTextClass}`} /> {course.modules} Modules
                </div>
                <div className={`${textLightClass} flex items-center font-medium`}>
                    <ClockIcon size={18} className={`mr-2 ${accentTextClass}`} /> {course.duration}
                </div>
            </div>
            
            {/* Price and CTA */}
            <div className="flex justify-between items-center mt-6">
                <span className={`text-4xl font-extrabold ${accentTextClass} ${headingFont}`}>{course.price}</span>
                <div 
                    className={`flex items-center rounded-full px-8 py-3 text-base font-bold text-white transition-all shadow-lg ${primaryDarkBgClass} hover:bg-[#152e2a] transform group-hover:scale-[1.05]`}
                >
                    View Details
                    <ChevronRightIcon size={20} className="ml-2" />
                </div>
            </div>
        </div>
    </a>
);

const CoursesCatalog: React.FC = () => (
    <section className={`py-20 md:py-28 ${bgColorClass}`}>
        <div className="container mx-auto max-w-7xl px-4">
            <h3 className={`text-4xl md:text-5xl font-extrabold text-center ${primaryDarkTextClass} ${headingFont} mb-12`}>
                The Curriculum for the Soul-Led Strategist
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {courses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                ))}
            </div>
            
            {/* Secondary CTA / All-Access Pass */}
            <div className={`mt-24 p-12 md:p-16 text-center rounded-2xl shadow-2xl bg-[${ACCENT_PINK}]/10 border-4 border-[${ACCENT_PINK}]`} >
                <h4 className={`text-3xl md:text-4xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-3`}>
                    Unlock Everything with the All-Access Pass
                </h4>
                <p className={`${textDarkClass} text-xl mb-8 max-w-4xl mx-auto opacity-90`}>
                    Get immediate, <strong>lifetime access</strong> to all current and future courses, templates, and community forums for a single, future-proof investment.
                </p>
                <a 
                    href="#" 
                    className={`inline-flex items-center rounded-full px-12 py-4 text-lg font-bold text-white transition-all shadow-xl ${primaryDarkBgClass} hover:bg-[#152e2a] transform hover:scale-[1.01] duration-300`}
                >
                    Explore Pass Options
                    <ChevronRightIcon size={20} className="ml-3" />
                </a>
            </div>
        </div>
    </section>
);

// -----------------------------------------------------------------
// 3. Trust and FAQ Section
// -----------------------------------------------------------------
const CoursesFAQ: React.FC = () => {
    const questions = [
        { q: "Is there a time limit to complete the courses?", a: "No. All courses are self-paced and come with lifetime access to materials and all future updates. Learn on your own schedule." },
        { q: "What is the typical time commitment per week?", a: "We recommend dedicating 2-3 focused hours per week to absorb the lessons and complete the implementation exercises for maximum retention." },
        { q: "Do the courses include templates and resources?", a: "Yes, every course module includes exclusive downloadable worksheets, high-leverage templates, and practical checklists used in my 1:1 client work." },
        { q: "What is the refund policy?", a: "We offer a 7-day money-back guarantee, no questions asked, provided you have not completed more than 20% of the course material."}
    ];
    
    return (
        <section className={`py-20 md:py-28 bg-[${LIGHT_ACCENT_BG}]`}>
            <div className="container mx-auto max-w-5xl px-4">
                <h3 className={`text-4xl md:text-5xl font-extrabold text-center ${primaryDarkTextClass} ${headingFont} mb-12`}>
                    Questions Answered
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {questions.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[${ACCENT_PINK}] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <h4 className={`text-xl font-bold ${primaryDarkTextClass} mb-2 flex items-start`}>
                                <CheckCircleIcon size={20} className={`mt-1 mr-3 ${accentTextClass} shrink-0`} /> 
                                {item.q}
                            </h4>
                            <p className={`${textLightClass} pl-8 mt-1`}>{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// -----------------------------------------------------------------
// PAGE ASSEMBLY
// -----------------------------------------------------------------
const CoursesPage: React.FC = () => {
  return (
    <main className={`${bodyFont} ${bgColorClass} overflow-hidden`}>
      <CoursesHero />
      <CoursesCatalog />
      <CoursesFAQ />
    </main>
  );
};

export default CoursesPage;