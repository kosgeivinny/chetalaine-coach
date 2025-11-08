import React from 'react';
import Link from 'next/link';
import { FiMail, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi'; 

const Footer = () => {
  const footerBgClass = `bg-[#1C3A35]`; 
  const textOffWhiteClass = `text-[#EAEAEA]`;
  const headingFont = 'font-serif';
  const bodyFont = 'font-sans'; 

  const navItems = [
    { label: "Coaching", href: "/coaching" },
    { label: "Courses", href: "/courses" },
    { label: "The Philosophy", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
  ];
  
  const utilityItems = [
    { label: "Client Portal", href: "#" },
    { label: "Book Session", href: "/book" },
    { label: "Contact & FAQ", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className={`${footerBgClass} ${textOffWhiteClass} py-16 md:py-20 overflow-hidden relative`}>
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-12">
          
          {/* Branding & Mission */}
          <div className="col-span-2">
            <Link href="/" className={`text-3xl font-bold tracking-wide ${textOffWhiteClass} ${headingFont}`}>
              Monica Chetalaine
            </Link>
            <p className={`text-base mt-4 ${textOffWhiteClass} opacity-90 max-w-sm ${bodyFont}`}>
              Align your identity. Amplify your profits. Build an unshakeable business on a foundation of purpose.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-6">
              {[{
                icon: <FiInstagram size={24} />, href:'#', label:'Instagram'
              },{
                icon: <FiLinkedin size={24} />, href:'#', label:'LinkedIn'
              },{
                icon: <FiMail size={24} />, href:'mailto:hello@monica.com', label:'Email'
              }].map((social, idx)=>(
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white hover:text-[#E3A5A5] transform transition duration-300 hover:scale-110 hover:rotate-6"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coaching Links */}
          <div>
            <h3 className={`text-lg font-bold ${headingFont} mb-4 border-b border-gray-700 pb-2`}>
              Coaching Paths
            </h3>
            <ul className="space-y-3">
              {navItems.map((item)=>(
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={`text-base ${textOffWhiteClass} opacity-90 ${bodyFont} hover:text-[#E3A5A5] hover:underline transition-colors`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Links */}
          <div>
            <h3 className={`text-lg font-bold ${headingFont} mb-4 border-b border-gray-700 pb-2`}>
              Quick Access
            </h3>
            <ul className="space-y-3">
              {utilityItems.map((item)=>(
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className={`text-base ${textOffWhiteClass} opacity-90 ${bodyFont} hover:text-[#E3A5A5] hover:underline transition-colors`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Signup */}
          <div className="col-span-2 md:col-span-1">
            <h3 className={`text-lg font-bold ${headingFont} mb-4 border-b border-gray-700 pb-2`}>
              Aligned Insights
            </h3>
            <p className={`text-sm ${textOffWhiteClass} opacity-90 mb-4`}>
              Get my free weekly strategy guide delivered straight to your inbox.
            </p>
            <form>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  aria-label="Email Subscription"
                  className="w-full p-3 pr-10 rounded-full text-sm text-[#1C3A35] bg-white border-none focus:ring-2 focus:ring-[#E3A5A5] transition-all"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="absolute right-0 top-0 h-full p-3 rounded-full text-white bg-[#E3A5A5] hover:bg-[#D48D8D] hover:scale-105 shadow-lg transition-all duration-300"
                >
                  <FiArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center mt-8 pt-4">
          <p className={`text-sm text-white ${bodyFont} opacity-90`}>
            &copy; {new Date().getFullYear()} Monica Chetalaine Coaching. All rights reserved. | Built with Purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
