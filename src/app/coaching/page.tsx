// app/coaching/page.tsx
import React from 'react';
import Link from 'next/link';
// FiX has been added here 
import { FiCheckCircle, FiTarget, FiZap, FiUser, FiX } from 'react-icons/fi';

// --- THEME DEFINITIONS (Repeat for component safety) ---
const PRIMARY_DARK = '#1C3A35';    // Deep Green
const ACCENT_PINK = '#E3A5A5';    // Soft Pink
const TEXT_DARK = '#1A1A1A';      // Deep Charcoal
const TEXT_LIGHT = '#5A5A5A';     // Muted Gray
const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White

const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const textDarkClass = `text-[${TEXT_DARK}]`;
const accentBgClass = `bg-[${ACCENT_PINK}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

const headingFont = 'font-serif';
const bodyFont = 'font-sans'; 


// -----------------------------------------------------------------
// 1. Coaching Page Hero (Initial Page Load Animation)
// -----------------------------------------------------------------
const CoachingHero = () => (
    // Set duration to make the initial drop feel graceful
    <section className={`py-20 md:py-32 bg-[#F9D9D9] text-center overflow-hidden`} data-aos="fade-down" data-aos-duration="800">
        <div className="container mx-auto max-w-4xl px-4">
            {/* Tagline loads first */}
            <h1 className={`text-sm font-bold uppercase tracking-[0.2em] ${primaryDarkTextClass} ${bodyFont} mb-4`} data-aos="fade-down" data-aos-delay="100">
                1:1 Signature Coaching
            </h1>
            {/* Main Headline slides down */}
            <h2 className={`text-5xl md:text-7xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-6`} data-aos="fade-down" data-aos-delay="200">
                Your <strong>Purpose-Driven</strong> Path to Profit.
            </h2>
            {/* Subtext fades in */}
            <p className={`text-xl md:text-2xl ${textDarkClass} ${bodyFont} max-w-3xl mx-auto mb-10`} data-aos="fade-in" data-aos-delay="400">
                Stop settling for strategies that don&apos;t fit. This is deeply personalized guidance to ensure your business alignment drives <strong>exponential, sustainable</strong> growth.
            </p>
            {/* CTA zooms in */}
            <Link 
                href="/book" 
                className={`inline-block rounded-full px-12 py-4 text-xl font-bold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.05] ${accentBgClass} hover:bg-[#D48D8D]`}
                data-aos="zoom-in" data-aos-delay="600"
            >
                Apply for 1:1 Coaching
            </Link>
        </div>
    </section>
);

// -----------------------------------------------------------------
// 2. The Coaching Pillars (Sequential Scroll Animation)
// -----------------------------------------------------------------
const PillarsDetail = () => {
    const pillars = [
        { icon: FiTarget, title: "Identity Integration", description: "Deep work on eliminating limiting beliefs to align your personal purpose with your business model." },
        { icon: FiZap, title: "High-Leverage Strategy", description: "Customized frameworks for scaling revenue, optimizing systems, and maximizing client value." },
        { icon: FiUser, title: "Direct 1:1 Access", description: "Weekly deep-dive sessions, direct messaging support, and priority review of all your strategic documents." },
    ];

    return (
        <section className={`py-20 ${bgColorClass}`}>
            <div className="container mx-auto max-w-7xl px-4">
                <h3 className={`text-3xl md:text-4xl font-bold text-center ${primaryDarkTextClass} ${headingFont} mb-12`} data-aos="fade-up">
                    What Makes This Program Different?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div 
                            key={index} 
                            className="text-center p-8 border border-gray-100 rounded-xl shadow-md bg-white"
                            data-aos="fade-up"
                            data-aos-delay={index * 150} // Staggered card reveal
                        >
                            <pillar.icon size={40} className={`mx-auto mb-4 ${accentTextClass}`} />
                            <h4 className={`text-xl font-bold ${primaryDarkTextClass} mb-2`}>{pillar.title}</h4>
                            <p className={`${textLightClass} text-base`}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// -----------------------------------------------------------------
// 3. Program Comparison / Pricing Table (Sequenced Animation for Impact)
// -----------------------------------------------------------------
const PricingComparison = () => {
    const features = [
        { label: "Weekly 60-min Strategy Sessions", Starter: '4/mo', Premium: '4/mo', Exclusive: '6/mo' },
        { label: "Direct Access via Priority Messaging (Slack/WhatsApp)", Starter: 'Limited', Premium: 'Daily', Exclusive: '24/7 Priority' },
        { label: "Full Identity & Purpose Audit", Starter: true, Premium: true, Exclusive: true },
        { label: "High-Leverage Scaling System Design", Starter: false, Premium: true, Exclusive: true },
        { label: "On-Site / Virtual Strategy Retreats", Starter: false, Premium: false, Exclusive: '1/Quarter' },
        { label: "Guaranteed Response Time", Starter: '24 hrs', Premium: '6 hrs', Exclusive: '1 hr' },
    ];
    
    const renderFeature = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? <FiCheckCircle size={24} className={`mx-auto ${accentTextClass}`} /> : <FiX size={24} className="mx-auto text-gray-300" />;
        }
        return <span className={textDarkClass}>{value}</span>;
    };

    return (
        <section className={`py-20 md:py-32 bg-[#F9D9D9]`}>
            <div className="container mx-auto max-w-7xl px-4">
                {/* Heading and Subtext animations kept */}
                <h3 className={`text-4xl font-extrabold text-center ${primaryDarkTextClass} ${headingFont} mb-4`} data-aos="fade-up">
                    Find Your Perfect Coaching Tier
                </h3>
                <p className={`text-xl text-center ${textLightClass} mb-12`} data-aos="fade-up" data-aos-delay="100">
                    All programs require an application for acceptance to ensure mutual fit.
                </p>

                <div className="overflow-x-auto">
                    {/* The table container slides up as a unit */}
                    <table 
                        className="min-w-full bg-white rounded-xl shadow-2xl overflow-hidden border-separate"
                        data-aos="fade-up" 
                        data-aos-delay="300"
                    >
                        <thead>
                            <tr className={`text-left ${primaryDarkTextClass} border-b border-gray-100`}>
                                <th className="p-4 w-1/4"></th>
                                {['The Starter', 'The Premium', 'The Exclusive'].map((tier, index) => (
                                    <th 
                                        key={tier} 
                                        className={`p-4 text-center text-xl font-bold ${headingFont} ${index === 2 ? accentTextClass : primaryDarkTextClass}`}
                                    >
                                        {tier}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Individual feature rows appear sequentially */}
                            {features.map((feature, index) => (
                                <tr key={index} className={`border-b border-gray-100 transition-colors hover:bg-gray-50`} data-aos="fade-right" data-aos-delay={400 + index * 50}>
                                    <td className={`p-4 font-medium ${textDarkClass} w-1/4`}>{feature.label}</td>
                                    <td className="p-4 text-center">{renderFeature(feature.Starter)}</td>
                                    <td className="p-4 text-center">{renderFeature(feature.Premium)}</td>
                                    <td className={`p-4 text-center font-bold ${accentTextClass}`}>{renderFeature(feature.Exclusive)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                             <tr className="bg-gray-100" data-aos="fade-up" data-aos-delay={400 + features.length * 50}>
                                <td className={`p-4 font-bold ${primaryDarkTextClass}`}>Investment (per month)</td>
                                <td className="p-4 text-center font-bold text-xl">${'5k+'}</td>
                                <td className="p-4 text-center font-bold text-xl">${'10k+'}</td>
                                <td className={`p-4 text-center font-bold text-2xl ${accentTextClass}`}>Custom</td>
                            </tr>
                            <tr className="bg-white" data-aos="fade-up" data-aos-delay={600 + features.length * 50}>
                                <td className="p-4"></td>
                                {['Starter', 'Premium', 'Exclusive'].map((tier) => (
                                    <td key={tier} className="p-4 text-center">
                                        <Link 
                                            href={`/book?tier=${tier}`} 
                                            className={`inline-block rounded-full px-6 py-2 text-sm font-bold text-white transition-all shadow-md ${accentBgClass} hover:bg-[#D48D8D]`}
                                        >
                                            Apply Now
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};


// -----------------------------------------------------------------
// 4. Final CTA (Simple contact block)
// -----------------------------------------------------------------
const FinalCTA = () => (
    <section className={`py-20 md:py-24 ${bgColorClass} text-center`}>
        <div className="container mx-auto max-w-4xl px-4">
            <h3 className={`text-4xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-6`} data-aos="fade-up">
                Ready for Unshakable Alignment?
            </h3>
            <p className={`text-xl ${textLightClass} mb-8`} data-aos="fade-up" data-aos-delay="100">
                The first step is a confidential discovery call to assess your goals and ensure this is the right fit.
            </p>
            <Link 
                href="/book" 
                className={`inline-block rounded-full px-12 py-4 text-xl font-bold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.05] ${accentBgClass} hover:bg-[#D48D8D]`}
                data-aos="zoom-in" data-aos-delay="200"
            >
                Book Your Discovery Call
            </Link>
        </div>
    </section>
);


// -----------------------------------------------------------------
// PAGE ASSEMBLY
// -----------------------------------------------------------------
const CoachingPage = () => {
  return (
    // Added overflow-hidden to main to prevent horizontal scroll during animations
    <main className={`${bodyFont} overflow-hidden`}> 
      <CoachingHero />
      <PillarsDetail />
      <PricingComparison />
      <FinalCTA />
    </main>
  );
};

export default CoachingPage;