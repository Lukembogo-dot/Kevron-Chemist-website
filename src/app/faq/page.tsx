// src/app/faq/page.tsx
'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);
  
  const faqs = [
    { q: 'How do I place an order?', a: 'Call us or fill the contact form to discuss...' },
    { q: 'What are your delivery areas?', a: 'We deliver across Nairobi...' },
    { q: 'Do you deliver on weekends?', a: 'Yes, we deliver...' },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-12">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg">
              <button
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold">{faq.q}</span>
                <ChevronDown className={`transform transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 border-t text-gray-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}