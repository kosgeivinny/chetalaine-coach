"use client";

import React, { useState, useMemo } from 'react';
// Using standard HTML elements, placeholder images, and inline SVGs for maximum compatibility.

// --- THEME DEFINITIONS ---
const PRIMARY_DARK = '#1C3A35';    // Deep Green (Main CTA, Active Category BG)
const ACCENT_PINK = '#E3A5A5';    // Soft Pink (Links, Icons, Focus)
const TEXT_DARK = '#1A1A1A';      // Deep Charcoal (Headings)
const TEXT_LIGHT = '#5A5A5A';     // Muted Gray (Body Text)
const BACKGROUND_COLOR = '#FFFDFB'; // Creamy White (Main Background)
const LIGHT_ACCENT_BG = '#F5E6E6'; // Very Light Pink (Hero/Subtle BG)

// Tailwind Utility Classes using defined colors
const primaryDarkTextClass = `text-[${PRIMARY_DARK}]`;
const accentTextClass = `text-[${ACCENT_PINK}]`;
const textLightClass = `text-[${TEXT_LIGHT}]`;
const textDarkClass = `text-[${TEXT_DARK}]`;
const accentBgClass = `bg-[${ACCENT_PINK}]`;
const primaryDarkBgClass = `bg-[${PRIMARY_DARK}]`;
const bgColorClass = `bg-[${BACKGROUND_COLOR}]`;

// Using Inter font for consistency and readability
const headingFont = 'font-serif'; 
const bodyFont = 'font-sans'; 

// --- ICON PLACEHOLDERS (Standard SVG for compatibility) ---
// Clock Icon for read time
const ClockIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 20} height={props.size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);
// Search Icon for the search bar
const SearchIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 20} height={props.size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);
// Right Arrow Icon for "Read More" links
const ArrowRightIcon = (props: { className?: string; size?: number }) => (
    <svg className={props.className} width={props.size || 20} height={props.size || 20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
);

// --- DUMMY DATA (Images are placeholders) ---
const allBlogPosts = [
    {
        id: 1,
        image: "images/business.jpeg",
        category: "Identity",
        title: "The Subtle Shift from Strategy to Soul-Led Success",
        summary: "Discover the three non-negotiable questions you must ask yourself to align your business with your true identity and purpose.",
        link: "#",
        isFeatured: true,
        readTime: "8 min read",
        date: "Oct 24, 2025"
    },
    {
        id: 2,
        image: "images/leadership.png",
        category: "Strategy",
        title: "Why Your Strategy Isn't Working (And How to Fix It)",
        summary: "We break down the common mistakes entrepreneurs make when scaling and provide a simple, 4-step framework for profitable execution.",
        link: "#",
        readTime: "12 min read",
        date: "Oct 19, 2025"
    },
    {
        id: 3,
        image: "images/productivity.jpeg",
        category: "Mindset",
        title: "Beyond Burnout: How to Build Sustainable High Performance",
        summary: "Learn Monica's favorite high-efficiency systems and mindset hacks to boost output without sacrificing well-being and fulfillment.",
        link: "#",
        readTime: "6 min read",
        date: "Oct 15, 2025"
    },
    {
        id: 4,
        image: "images/enrollment.jpeg",
        category: "Strategy",
        title: "Automate Your Enrollment: Systems for Consistent Client Acquisition",
        summary: "Stop chasing clients and start building evergreen systems that bring ideal leads directly to you, 24/7.",
        link: "#",
        readTime: "10 min read",
        date: "Oct 10, 2025"
    },
    {
        id: 5,
        image: "images/yin.jpeg",
        category: "Identity",
        title: "Balancing the Yin and Yang of Entrepreneurship",
        summary: "A guide to integrating feminine intuition with masculine structure for powerful, stress-free growth.",
        link: "#",
        readTime: "7 min read",
        date: "Oct 05, 2025"
    },
    {
        id: 6,
        image: "images/scarcity.jpeg",
        category: "Mindset",
        title: "Releasing the Scarcity Loop: A Wealth Mindset Toolkit",
        summary: "Tools and practices to shift your financial identity and attract abundance into your business and life.",
        link: "#",
        readTime: "9 min read",
        date: "Oct 01, 2025"
    },
];

const categories = ['All', 'Identity', 'Strategy', 'Mindset'];

// -----------------------------------------------------------------
// TYPE DEFINITIONS
// -----------------------------------------------------------------

interface Post {
    id: number;
    image: string;
    category: string;
    title: string;
    summary: string;
    link: string;
    isFeatured?: boolean;
    readTime: string;
    date: string;
}

interface PostCardProps {
    post: Post;
}

// -----------------------------------------------------------------
// COMPONENTS
// -----------------------------------------------------------------

/**
 * Renders a standard blog post card.
 */
const PostCard: React.FC<PostCardProps> = ({ post }) => (
    <div 
        key={post.id} 
        className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 transform hover:shadow-2xl hover:-translate-y-1 group border border-gray-100"
    >
        {/* Image Placeholder with Gradient Overlay */}
        <div className="relative w-full h-56 md:h-64">
            <div 
                className="w-full h-full bg-cover bg-center transition duration-500 group-hover:scale-[1.05] flex items-end justify-start p-4" 
                style={{ 
                    // Use CSS background property to apply both the gradient and the image
                    background: `linear-gradient(to bottom, rgba(28, 58, 53, 0.1) 0%, rgba(28, 58, 53, 0.6) 100%), url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                // Accessibility fallback for failed image load
                onError={(e) => {
                    const target = e.target as HTMLDivElement;
                    target.style.background = `linear-gradient(to bottom, #1C3A35, #5A5A5A)`;
                }}
            >
                <span className="text-sm font-semibold uppercase tracking-widest text-white px-3 py-1 rounded-full bg-black/40">
                    {post.category}
                </span>
            </div>
        </div>

        <div className="p-6 md:p-8">

            {/* Title */}
            <a 
                href={post.link}
                className={`text-2xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-3 group-hover:${accentTextClass} transition-colors leading-snug block`}
            >
                {post.title}
            </a>
            
            {/* Summary */}
            <p className={`text-base ${textLightClass} ${bodyFont} mb-6`}>
                {post.summary}
            </p>
            
            {/* Meta Data */}
            <div className={`flex items-center text-sm ${textLightClass} border-t border-gray-100 pt-4 mt-2`}>
                <ClockIcon size={16} className={`mr-2 ${accentTextClass}`} />
                <span className="mr-4">{post.readTime}</span>
                <span className="text-gray-400">|</span>
                <span className="ml-4 text-gray-400">{post.date}</span>
            </div>
            
            {/* Read More Link with Hover Effect */}
            <a 
                href={post.link} 
                className={`mt-6 block text-base font-bold ${accentTextClass} ${bodyFont} hover:underline flex items-center group-hover:pl-1 transition-all duration-300`}
            >
                Read Full Post
                <ArrowRightIcon size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
        </div>
    </div>
);


/**
 * Renders the large, distinct featured post component.
 */
const FeaturedPost: React.FC<PostCardProps> = ({ post }) => (
    <div 
        className={`relative flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transition duration-500 transform hover:scale-[1.005]`}
    >
        {/* Image Area */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-auto">
            <div 
                className="w-full h-full bg-cover bg-center flex items-end justify-start p-6" 
                style={{ 
                    background: `linear-gradient(to bottom, rgba(28, 58, 53, 0.1) 0%, rgba(28, 58, 53, 0.7) 100%), url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                // Accessibility fallback for failed image load
                onError={(e) => {
                    const target = e.target as HTMLDivElement;
                    target.style.background = `linear-gradient(to bottom, #1C3A35, #5A5A5A)`;
                }}
            >
                <span className="text-sm font-semibold uppercase tracking-widest text-white px-4 py-1 rounded-full bg-black/40">
                    {post.category}
                </span>
            </div>
             {/* Featured Label */}
             <div className={`absolute top-0 right-0 ${accentBgClass} text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-bl-xl shadow-md`}>
                FEATURED
            </div>
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h3 className={`text-3xl md:text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-4 leading-tight`}>
                {post.title}
            </h3>
            
            <p className={`text-lg ${textLightClass} ${bodyFont} mb-6`}>
                {post.summary}
            </p>

            <div className={`flex items-center text-base ${textLightClass} mb-8`}>
                <ClockIcon size={18} className={`mr-2 ${accentTextClass}`} />
                <span className="mr-4 font-medium">{post.readTime}</span>
                <span className="text-gray-400">|</span>
                <span className="ml-4 text-gray-400 font-medium">{post.date}</span>
            </div>

            <a 
                href={post.link} 
                className={`flex items-center justify-center w-full lg:w-auto rounded-full px-10 py-3 text-lg font-bold text-white transition-all shadow-xl hover:shadow-2xl ${primaryDarkBgClass} hover:bg-[#2e5a52] transform hover:scale-[1.01] duration-300`}
            >
                Read Now
                <ArrowRightIcon size={20} className="ml-3" />
            </a>
        </div>
    </div>
);


// -----------------------------------------------------------------
// PAGE ASSEMBLY (App Component)
// -----------------------------------------------------------------
const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    // Filter posts based on category and search term
    const filteredPosts = useMemo(() => {
        return allBlogPosts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  post.summary.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchTerm]);

    const featuredPost = allBlogPosts.find(p => p.isFeatured) || allBlogPosts[0];
    const regularPosts = filteredPosts.filter(p => p.id !== featuredPost.id);


    return (
        <main className={`${bodyFont} ${bgColorClass} overflow-hidden min-h-screen`}>
            
            {/* 1. HERO SECTION */}
            <section className={`py-24 md:py-40 bg-[${LIGHT_ACCENT_BG}] text-center overflow-hidden border-b-4 border-[${ACCENT_PINK}]/50`}>
                <div className="container mx-auto max-w-4xl px-4">
                    <h1 className={`text-sm font-bold uppercase tracking-[0.3em] ${accentTextClass} ${bodyFont} mb-4`} >
                        The Aligned Empire
                    </h1>
                    <h2 className={`text-6xl md:text-8xl font-extrabold ${primaryDarkTextClass} ${headingFont} leading-tight mb-6`} >
                        Insights for the Soul-Led Strategist
                    </h2>
                    <p className={`text-xl md:text-2xl ${textDarkClass} ${bodyFont} max-w-3xl mx-auto mb-10 opacity-90`}>
                        Practical wisdom on mindset, high-level strategy, and integrating your identity for effortless business growth.
                    </p>
                </div>
            </section>
            
            <div className="container mx-auto max-w-7xl px-4 py-20 md:py-28">

                {/* 2. FEATURED POST */}
                <div className="mb-20">
                    <FeaturedPost post={featuredPost} />
                </div>

                {/* 3. FILTER & SEARCH BAR */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-4 md:space-y-0">
                    
                    {/* Categories */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat);
                                    setSearchTerm(''); // Clear search when changing category
                                }}
                                className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-300 shadow-md transform active:scale-95 ${
                                    selectedCategory === cat
                                        ? `bg-[${PRIMARY_DARK}] text-white shadow-xl`
                                        : `bg-white ${primaryDarkTextClass} border border-gray-300 hover:border-transparent hover:${accentTextClass} hover:shadow-lg`
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={`w-full py-2.5 pl-10 pr-4 border-2 border-gray-300 rounded-full focus:ring-4 focus:ring-[${ACCENT_PINK}]/50 focus:border-[${PRIMARY_DARK}] ${primaryDarkTextClass} transition-all shadow-inner`}
                        />
                        <SearchIcon size={18} className={`absolute left-3.5 top-1/2 transform -translate-y-1/2 ${accentTextClass}`} />
                    </div>
                </div>

                {/* 4. MAIN POST GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {regularPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                    
                    {/* Empty State */}
                    {regularPosts.length === 0 && (
                         <div className={`col-span-full text-center py-16 rounded-2xl border-4 border-dashed border-[${ACCENT_PINK}]/80 bg-white ${primaryDarkTextClass} shadow-inner`}>
                            <p className="text-2xl font-semibold mb-2">
                                {selectedCategory !== 'All' 
                                    ? `No articles found in the '${selectedCategory}' category.`
                                    : "No articles match your search criteria."}
                            </p>
                            <p className={textLightClass}>Try adjusting your filter or search terms.</p>
                        </div>
                    )}
                </div>
                
                {/* 5. CTA / Subscription */}
                <div className={`mt-32 p-12 md:p-16 text-center rounded-2xl shadow-xl bg-[${LIGHT_ACCENT_BG}] border-4 border-[${ACCENT_PINK}]/80`} >
                    <h4 className={`text-4xl md:text-5xl font-extrabold ${primaryDarkTextClass} ${headingFont} mb-3`}>
                        Never Miss a Strategic Insight
                    </h4>
                    <p className={`${textDarkClass} text-xl mb-10 max-w-3xl mx-auto opacity-90`}>
                        Join the community and get soul-led business wisdom delivered straight to your inbox every week.
                    </p>
                    <form className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your best email address"
                            className="w-full py-3 px-5 rounded-full border-2 border-gray-300 focus:border-[${PRIMARY_DARK}] focus:ring-2 focus:ring-[${PRIMARY_DARK}]/20 shadow-inner text-lg"
                            required
                        />
                        <button 
                            type="submit"
                            className={`w-full md:w-auto rounded-full px-8 py-3 text-lg font-bold text-white transition-all shadow-xl ${primaryDarkBgClass} hover:bg-[#2e5a52] transform hover:scale-[1.02] duration-300`}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
};

export default App;