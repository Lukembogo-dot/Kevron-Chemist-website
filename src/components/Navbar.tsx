"use client";

import Link from 'next/link';
import { Pill, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-black/40 backdrop-blur-xl shadow-lg shadow-black/20 z-50 border-b border-white/10">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-15 h-15 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] rounded-full flex items-center justify-center p-5">
            <Pill className="w-10 h-10 text-white ml-0.5" />
          </div>
          <Link href="/" className="text-xl font-bold tracking-wider text-white">Kevron <span className="text-[#60A5FA]">Chemist</span></Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="text-gray-300 hover:text-[#60A5FA] transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-[#60A5FA] transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-[#60A5FA] transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contacts" className="text-gray-300 hover:text-[#60A5FA] transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all group-hover:w-full"></span>
          </Link>
        </div>
        
        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contacts" className="hidden md:block bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all">
            Order Now
          </Link>
          <button 
            className="md:hidden p-2 text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 py-4 px-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/services" className="text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/contacts" className="text-gray-300 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link href="/contacts" className="bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white px-6 py-3 rounded-lg text-center font-semibold">
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
