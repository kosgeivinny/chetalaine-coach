'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation'; // Next.js hook

const navLinks = [
  { href: '/coaching', label: 'Coaching' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Current route
  const toggleMenu = () => setIsOpen(!isOpen);

  const bodyFont = 'font-sans';
  const initialsFontClass = `font-['Dancing_Script'] italic`;

  const linkClasses = (href: string) =>
    `text-base font-medium ${bodyFont} tracking-wide transition-colors ${
      pathname === href ? 'text-[#E3A5A5] underline decoration-pink-300 decoration-2' : 'text-[#1A1A1A] hover:text-[#E3A5A5]'
    }`;

  const mobileLinkClasses = (href: string) =>
    `text-lg font-medium py-3 px-2 font-sans border-b border-gray-100 last:border-b-0 transition-colors ${
      pathname === href ? 'text-[#E3A5A5] underline decoration-pink-300 decoration-2' : 'text-[#1A1A1A] hover:text-[#E3A5A5]'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg border-b border-gray-100 py-4 bg-[#FFFDFB]">
      <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
        
        {/* Branding */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className={`text-3xl font-bold text-[#1C3A35] ${initialsFontClass} transition-all duration-500 hover:scale-[1.05]`}
          >
            MC
          </Link>
          <div className="hidden sm:block border-l border-gray-300 pl-3 leading-none">
            <p className={`text-sm font-semibold text-[#1C3A35] ${bodyFont}`}>Monica Chetalaine</p>
            <p className={`text-xs text-[#E3A5A5] uppercase tracking-wider ${bodyFont} mt-0.5`}>Strategy Coach</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClasses(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Primary CTA */}
          <Link
            href="/book"
            className="rounded-full px-6 py-2.5 text-base font-semibold text-white bg-[#E3A5A5] hover:bg-[#D48D8D] transition-all shadow-xl hover:scale-[1.03]"
          >
            Book Session
          </Link>

          {/* Secondary Link */}
          <Link
            href="#"
            className={`text-base font-semibold text-[#1C3A35] ${bodyFont} hover:underline transition-colors`}
          >
            Client Portal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#1C3A35] p-2 rounded-md hover:bg-gray-50 transition-colors">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden shadow-inner pb-4 bg-[#FFFDFB]">
          <nav className="flex flex-col space-y-2 px-4 pt-3">
            {[...navLinks, { href: '/client-login', label: 'Client Portal' }].map((link) => (
              <Link key={link.href} href={link.href} onClick={toggleMenu} className={mobileLinkClasses(link.href)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={toggleMenu}
              className="text-center mt-5 rounded-full px-5 py-3 text-lg font-semibold text-white bg-[#E3A5A5] hover:bg-[#D48D8D] shadow-md transition-all"
            >
              Book Session Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
