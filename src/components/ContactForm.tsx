'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(9, 'Invalid phone'),
  message: z.string().min(10, 'Message too short'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed');

      setStatus('success');
      reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">Name</label>
        <input
          {...register('name')}
          className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg focus:ring-2 focus:ring-[#3B82F6] text-white placeholder-gray-500"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">Email</label>
        <input
          {...register('email')}
          type="email"
          className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg focus:ring-2 focus:ring-[#3B82F6] text-white placeholder-gray-500"
          placeholder="Your email"
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">Phone</label>
        <input
          {...register('phone')}
          className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg focus:ring-2 focus:ring-[#3B82F6] text-white placeholder-gray-500"
          placeholder="+254..."
        />
        {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-300">Message</label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-2 bg-white/10 border border-white/15 rounded-lg focus:ring-2 focus:ring-[#3B82F6] text-white placeholder-gray-500"
          placeholder="Your message..."
        />
        {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 font-semibold transition-all"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="text-[#60A5FA] text-center">Message sent! We'll contact you soon.</p>}
      {status === 'error' && <p className="text-red-400 text-center">Error sending message. Try again.</p>}
    </form>
  );
}