// app/book/page.tsx
"use client"; 

import React from 'react';
import Link from 'next/link';
// FiCheckCircle has been added to the import list
import { FiClock, FiDollarSign, FiUserCheck, FiCheckCircle } from 'react-icons/fi'; 

// --- THEME DEFINITIONS ---
const PRIMARY_DARK = '#1C3A35';    // Deep Green
const ACCENT_PINK = '#E3A5A5';    // Soft Pink
const TEXT_DARK = '#1A1A1A';      // Deep Charcoal
const TEXT_LIGHT = '#5A5A5A';     // Muted Gray
const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White

const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const textDarkClass = `text-[${TEXT_DARK}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

const headingFont = 'font-serif';
const bodyFont = 'font-sans'; 

// -----------------------------------------------------------------
// PAGE ASSEMBLY
// -----------------------------------------------------------------
const BookingPage = () => {
    
    // NOTE: You can now use useSearchParams here if you wish to read the tier parameter:
    // const searchParams = useSearchParams();
    // const tier = searchParams.get('tier'); 

    // Placeholder for dynamic content
    const callType = "Alignment Assessment"; // More professional term
    const isApplication = true; 

    return (
        <main className={`${bodyFont} ${bgColorClass} py-16 md:py-24 overflow-hidden`}>
            <div className="container mx-auto max-w-6xl px-4">
                
                {/* Hero / Heading Block */}
                <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-down" data-aos-duration="800">
                    <h1 className={`text-base font-bold uppercase tracking-[0.2em] ${accentTextClass} ${bodyFont} mb-2`}>
                        {isApplication ? 'Your First Step' : 'Book Your Session'}
                    </h1>
                    <h2 className={`text-5xl md:text-6xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-4`}>
                        Book Your <strong>{callType}</strong>
                    </h2>
                    <p className={`text-xl ${textLightClass} max-w-2xl mx-auto`}>
                        This is a strategic, confidential 30-minute session dedicated to mapping out your current alignment gaps and assessing your fit for 1:1 partnership.
                    </p>
                </div>
                
                {/* Pre-Qualification & Expectations (Two Columns) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    
                    {/* Left Column: Expectations & Requirements */}
                    <div className="p-8 rounded-xl bg-[#F9D9D9] shadow-inner" data-aos="fade-right" data-aos-delay="200">
                        <h3 className={`text-2xl font-bold ${primaryDarkTextClass} ${headingFont} mb-5 flex items-center`}>
                            <FiUserCheck className={`mr-3 ${primaryDarkTextClass}`} size={24} />
                            Partnership Requirements
                        </h3>
                        <ul className={`space-y-4 ${textDarkClass}`}>
                            <li className="flex items-start">
                                <FiCheckCircle size={20} className={`mt-1 mr-3 ${accentTextClass} shrink-0`} />
                                <p>You must be an established business owner ready to scale <strong>past $5k/month</strong> in consistent revenue.</p>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle size={20} className={`mt-1 mr-3 ${accentTextClass} shrink-0`} />
                                <p>You must be committed to <strong>transformational identity work</strong>—not just marketing tactics.</p>
                            </li>
                            <li className="flex items-start">
                                <FiDollarSign size={20} className={`mt-1 mr-3 ${accentTextClass} shrink-0`} />
                                <p>Investment for 1:1 services starts at <strong>$5,000 USD/month</strong>.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Process Details */}
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-gray-100" data-aos="fade-left" data-aos-delay="400">
                        <h3 className={`text-2xl font-bold ${primaryDarkTextClass} ${headingFont} mb-5 flex items-center`}>
                            <FiClock className={`mr-3 ${primaryDarkTextClass}`} size={24} />
                            The Seamless 3-Step Process
                        </h3>
                        <ol className={`space-y-4 ${textDarkClass} list-decimal list-inside ml-4`}>
                            <li className="pl-1"><strong>Select Your Time:</strong> Use the calendar below to find a slot.</li>
                            <li className="pl-1"><strong>Complete Application:</strong> Fill out the short form with required business details.</li>
                            <li className="pl-1"><strong>Receive Confirmation:</strong> You&apos;ll get an email; Monica personally reviews applications before the call.</li>
                        </ol>
                        <p className={`mt-6 text-sm ${textLightClass}`}>
                            <strong>Note: If you do not meet the minimum requirements, the call may be rescheduled or canceled.</strong>
                        </p>
                    </div>
                </div>

                {/* Embedded Scheduling Component (The Conversion Funnel) */}
                <div 
                    className="w-full h-[800px] border-4 border-gray-100 rounded-xl overflow-hidden shadow-2xl" 
                    data-aos="fade-up" 
                    data-aos-delay="600"
                >
                    {/* The iframe is inserted here, inheriting 100% width and height from the parent div */}
                    <iframe 
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-J4wrV4YOOksDaV9hA3aP4FpH3cc2iGUVr_1xmjOSeXb_qb8bScW2eLnZcP1agaE6Mf783pMj?gv=true" 
                        style={{ border: 0, width: '100%', height: '100%' }} // Adjusted height to be 100% of the parent 800px container
                        title="Google Calendar Appointment Scheduling"
                        frameBorder="0"
                    ></iframe>
                </div>
                
                {/* Post-Booking CTA/Reminder */}
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
                    <p className={`text-lg font-semibold ${textDarkClass} italic`}>
                        Need to review services again? <Link href="/coaching" className={`font-bold underline ${accentTextClass} hover:text-[#D48D8D] transition-colors`}>View The Three Pillars</Link>.
                    </p>
                </div>
                
            </div>
        </main>
    );
};

export default BookingPage;