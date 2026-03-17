"use client";

import Link from 'next/link';
import { Clock, Pill, Truck, Users, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative text-white py-24 md:py-36 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-20 h-20 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-400 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-blue-400 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6 border border-white/20">
              🏥 Trusted Pharmacy in Nairobi
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Health is <span className="text-[#60A5FA]">Our Priority</span>
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-xl">
              Quality medicines, expert pharmacist consultation, and convenient delivery right to your doorstep in Nairobi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contacts" className="group bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                Order Medicines
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 inline-flex items-center justify-center gap-2 transition-all">
                Learn More
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Users className="w-6 h-6" />
                </div>
                <div><p className="font-bold text-2xl">500+</p><p className="text-blue-300 text-sm">Happy Customers</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Star className="w-6 h-6" />
                </div>
                <div><p className="font-bold text-2xl">100%</p><p className="text-blue-300 text-sm">Quality Guaranteed</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Clock className="w-6 h-6" />
                </div>
                <div><p className="font-bold text-2xl">24/7</p><p className="text-blue-300 text-sm">Available</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Services</h2>
          <p className="text-center text-gray-400 mb-12">Comprehensive pharmaceutical care for you and your family</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Pill, title: 'OTC Medicines', desc: 'Wide range of over-the-counter medications for all your health needs', color: 'from-[#3B82F6] to-[#1E3A8A]' },
              { icon: Users, title: 'Expert Consultation', desc: 'Licensed pharmacists available for professional medical advice', color: 'from-[#06B6D4] to-[#0E7490]' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Same-day delivery across Nairobi and surrounding areas', color: 'from-[#8B5CF6] to-[#6D28D9]' }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-[#60A5FA] font-semibold mt-4 hover:gap-3 transition-all">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Kevron Chemist?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're committed to providing you with the best pharmaceutical services in Nairobi</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              {[
                { icon: Users, text: 'Licensed, experienced pharmacists', color: 'bg-[#3B82F6]' },
                { icon: Star, text: '100% quality assured medicines', color: 'bg-[#06B6D4]' },
                { icon: Pill, text: 'Affordable prices', color: 'bg-[#8B5CF6]' },
                { icon: Truck, text: 'Fast, reliable delivery', color: 'bg-[#3B82F6]' },
                { icon: Pill, text: 'Professional customer service', color: 'bg-[#06B6D4]' },
                { icon: Clock, text: 'Secure transactions', color: 'bg-[#8B5CF6]' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-x-2">
                    <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-200 font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="relative">
              <div className="bg-white/5 border border-white/10 p-2 rounded-3xl backdrop-blur-sm">
                <div className="bg-gradient-to-br from-[#3B82F6] via-[#1E3A8A] to-[#3B82F6] h-80 rounded-2xl flex flex-col items-center justify-center text-white">
                  <Pill className="w-24 h-24 mb-4 opacity-90" />
                  <p className="text-2xl font-bold">Professional Pharmacy</p>
                  <p className="text-blue-200">Serving Nairobi since 2020</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-black/60 backdrop-blur-xl border border-white/15 p-4 rounded-xl shadow-lg shadow-black/30">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">4.9/5</p>
                    <p className="text-sm text-gray-400">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
            <p className="text-gray-400 text-lg">Join hundreds of satisfied customers in Nairobi</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', text: 'Great service and fast delivery. Highly recommended!', avatar: 'JD', role: 'Nairobi' },
              { name: 'Jane Smith', text: 'Professional pharmacists who actually take time to help. Excellent!', avatar: 'JS', role: 'Kasarani' },
              { name: 'Mike Johnson', text: 'Best pharmacy experience in Nairobi. Will definitely order again.', avatar: 'MJ', role: 'Westlands' }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-[#1E3A8A]/20 backdrop-blur-sm border-y border-white/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Order?</h2>
            <p className="text-xl text-blue-200 mb-8">Get quality medicines delivered to your door. Our team is ready to assist you 24/7.</p>
            <Link href="/contacts" className="group bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-500/30 inline-flex items-center gap-3 text-lg transition-all hover:-translate-y-1">
              Contact Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}