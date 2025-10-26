"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 via-[#0F766E]/20 to-gray-900 text-gray-200 py-16">
      {/* Decorative top border */}
      <div className="h-1 bg-linear-to-r from-[#0F766E] via-[#EC4899] to-[#0F766E] w-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section with Image */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#EC4899] shadow-lg">
                <Image
                  src="/images/monica.jpeg"
                  alt="Monica Chetalaine"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Monica Chetalaine
                </h3>
                <p className="text-sm text-[#EC4899] font-medium">
                  Business Strategy Coach
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Helping entrepreneurs and professionals build purposeful, profitable
              businesses with clarity and strategy.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Stay Inspired</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#EC4899] transition-colors"
                />
                <button className="px-4 py-2 rounded-lg bg-[#EC4899] hover:bg-[#be185d] text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#EC4899]/25">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#EC4899] rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#about" className="hover:text-[#EC4899] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EC4899] transition-colors"></span>
                  About Monica
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-[#EC4899] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EC4899] transition-colors"></span>
                  Programs & Courses
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#EC4899] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EC4899] transition-colors"></span>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#EC4899] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EC4899] transition-colors"></span>
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link href="#coaching" className="hover:text-[#EC4899] transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#EC4899] transition-colors"></span>
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#0F766E] rounded-full"></span>
              Get In Touch
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-[#EC4899] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <a href="mailto:info@monicachetalaine.com" className="hover:text-[#EC4899] transition-colors">
                    info@monicachetalaine.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-[#0F766E] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <span>Nairobi, Kenya</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#EC4899] rounded-full"></span>
              Connect
            </h4>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#0077B5] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-black flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-linear-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#coaching"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-[#0F766E] to-[#EC4899] text-white font-semibold text-sm hover:shadow-xl hover:shadow-[#EC4899]/25 transition-all duration-300 hover:scale-105"
              >
                <span>Book a Strategy Call</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Monica Chetalaine Coaching. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-[#EC4899] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="#" className="hover:text-[#EC4899] transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-700">•</span>
              <Link href="#" className="hover:text-[#EC4899] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
