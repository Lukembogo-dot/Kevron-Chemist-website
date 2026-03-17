import Link from 'next/link';
import { Phone, MapPin, Clock, Pill } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-10 mb-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] rounded-full flex items-center justify-center p-1">
                                <Pill className="w-7 h-7 text-white ml-0.5" />
                            </div>
                            <div className="text-xl font-bold tracking-wider text-white">Kevron <span className="text-[#60A5FA]">Chemist</span></div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">Trusted pharmacy serving Nairobi with quality medicines and expert care since 2020.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-[#60A5FA] transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-[#60A5FA] transition-colors">Services</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-[#60A5FA] transition-colors">Blog</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-[#60A5FA] transition-colors">FAQ</Link></li>
                            <li><Link href="/contacts" className="text-gray-400 hover:text-[#60A5FA] transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone size={18} className="text-[#60A5FA]" /> +254 7XX XXX XXX
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin size={18} className="text-[#60A5FA]" /> Nairobi, Kenya
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Clock size={18} className="text-[#60A5FA]" /> Open 24/7
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all">
                                <span className="text-sm font-bold">f</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all">
                                <span className="text-sm font-bold">X</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all">
                                <span className="text-sm font-bold">W</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500">&copy; 2024 Kevron Chemist. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}
