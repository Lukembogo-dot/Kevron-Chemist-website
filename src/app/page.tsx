"use client";

import Link from 'next/link';
import { Phone, MapPin, Clock, Pill, Truck, Users, ArrowRight, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-15 h-15 bg-gradient-to-br from-[#2E75B6] to-[#27AE60] rounded-full flex items-center justify-center p-5">
              <Pill className="w-10 h-10 text-white ml-0.5" />
            </div>
            <div className="text-xl font-bold tracking-wider text-slate-800">Kevron <span className="text-[#27AE60]">Chemist</span></div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className="text-gray-700 hover:text-[#2E75B6] transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2E75B6] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#2E75B6] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2E75B6] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#2E75B6] transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2E75B6] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-[#2E75B6] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2E75B6] transition-all group-hover:w-full"></span>
            </Link>
          </div>
          
          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contacts" className="hidden md:block bg-gradient-to-r from-[#2E75B6] to-[#1e5394] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Order Now
            </Link>
            <button 
              className="md:hidden p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/services" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/contacts" className="text-gray-700 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/contacts" className="bg-[#2E75B6] text-white px-6 py-3 rounded-lg text-center font-semibold">
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#2E75B6] via-[#2563a8] to-[#1e5394] text-white py-24 md:py-36 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-40 right-20 w-20 h-20 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6 border border-white/20">
              🏥 Trusted Pharmacy in Nairobi
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Health is <span className="text-[#27AE60]">Our Priority</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl">
              Quality medicines, expert pharmacist consultation, and convenient delivery right to your doorstep in Nairobi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contacts" className="group bg-white text-[#2E75B6] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 inline-flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:-translate-y-1">
                Order Medicines
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 inline-flex items-center justify-center gap-2 transition-all">
                Learn More
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div><p className="font-bold text-2xl">500+</p><p className="text-blue-200 text-sm">Happy Customers</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <div><p className="font-bold text-2xl">100%</p><p className="text-blue-200 text-sm">Quality Guaranteed</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div><p className="font-bold text-2xl">24/7</p><p className="text-blue-200 text-sm">Available</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#34495E]">Our Services</h2>
          <p className="text-center text-gray-600 mb-12">Comprehensive pharmaceutical care for you and your family</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Pill, title: 'OTC Medicines', desc: 'Wide range of over-the-counter medications for all your health needs', color: 'from-[#2E75B6] to-[#1e5394]' },
              { icon: Users, title: 'Expert Consultation', desc: 'Licensed pharmacists available for professional medical advice', color: 'from-[#27AE60] to-[#1e7a3e]' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Same-day delivery across Nairobi and surrounding areas', color: 'from-[#E74C3C] to-[#c0392b]' }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-[#34495E]">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-[#2E75B6] font-semibold mt-4 hover:gap-3 transition-all">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-br from-[#ECF0F1] to-[#dce4e6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#34495E]">Why Choose Kevron Chemist?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We're committed to providing you with the best pharmaceutical services in Nairobi</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              {[
                { icon: Users, text: 'Licensed, experienced pharmacists', color: 'bg-[#2E75B6]' },
                { icon: Star, text: '100% quality assured medicines', color: 'bg-[#27AE60]' },
                { icon: Pill, text: 'Affordable prices', color: 'bg-[#E74C3C]' },
                { icon: Truck, text: 'Fast, reliable delivery', color: 'bg-[#34495E]' },
                { icon: Phone, text: 'Professional customer service', color: 'bg-[#2E75B6]' },
                { icon: Clock, text: 'Secure transactions', color: 'bg-[#27AE60]' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-x-2">
                    <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="relative">
              <div className="bg-white p-2 rounded-3xl shadow-xl">
                <div className="bg-gradient-to-br from-[#2E75B6] via-[#27AE60] to-[#2E75B6] h-80 rounded-2xl flex flex-col items-center justify-center text-white">
                  <Pill className="w-24 h-24 mb-4 opacity-90" />
                  <p className="text-2xl font-bold">Professional Pharmacy</p>
                  <p className="text-blue-100">Serving Nairobi since 2020</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">4.9/5</p>
                    <p className="text-sm text-gray-500">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#34495E]">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Join hundreds of satisfied customers in Nairobi</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', text: 'Great service and fast delivery. Highly recommended!', avatar: 'JD', role: 'Nairobi' },
              { name: 'Jane Smith', text: 'Professional pharmacists who actually take time to help. Excellent!', avatar: 'JS', role: 'Kasarani' },
              { name: 'Mike Johnson', text: 'Best pharmacy experience in Nairobi. Will definitely order again.', avatar: 'MJ', role: 'Westlands' }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-[#ECF0F1] to-white rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2E75B6] to-[#27AE60] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#27AE60] to-[#1e7a3e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-xl text-green-100 mb-8">Get quality medicines delivered to your door. Our team is ready to assist you 24/7.</p>
            <Link href="/contacts" className="group bg-white text-[#27AE60] px-10 py-4 rounded-full font-bold hover:bg-gray-100 inline-flex items-center gap-3 text-lg transition-all hover:shadow-2xl hover:-translate-y-1">
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#34495E] to-[#2c3e50] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E75B6] to-[#27AE60] rounded-full flex items-center justify-center p-1">
                  <Pill className="w-7 h-7 text-white ml-0.5" />
                </div>
                <div className="text-xl font-bold tracking-wider text-white">Kevron <span className="text-[#27AE60]">Chemist</span></div>
              </div>
              <p className="text-gray-300 leading-relaxed">Trusted pharmacy serving Nairobi with quality medicines and expert care since 2020.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-[#27AE60] transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-[#27AE60] transition-colors">Services</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-[#27AE60] transition-colors">Blog</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-[#27AE60] transition-colors">FAQ</Link></li>
                <li><Link href="/contacts" className="text-gray-300 hover:text-[#27AE60] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-[#27AE60]" /> +254 7XX XXX XXX
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-[#27AE60]" /> Nairobi, Kenya
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Clock size={18} className="text-[#27AE60]" /> Open 24/7
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#2E75B6] rounded-full flex items-center justify-center hover:bg-[#1e5394] transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#27AE60] rounded-full flex items-center justify-center hover:bg-[#1e7a3e] transition-colors">
                  <span className="text-sm font-bold">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-[#E74C3C] rounded-full flex items-center justify-center hover:bg-[#c0392b] transition-colors">
                  <span className="text-sm font-bold">W</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Kevron Chemist. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}