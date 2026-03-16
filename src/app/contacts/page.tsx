import { ContactForm } from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use same navbar as homepage */}
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-[#34495E]">Get in Touch</h1>
          <p className="text-gray-600 mb-12">We'd love to hear from you</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="text-[#2E75B6] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-gray-600">+254 7XX XXX XXX</p>
                  <p className="text-gray-600">Available 24/7</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#2E75B6] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-600">info@kevronchemist.com</p>
                  <p className="text-gray-600">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#2E75B6] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-gray-600">[Your Nairobi Address]</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#2E75B6] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-600">Saturday: 9am - 5pm</p>
                  <p className="text-gray-600">Sunday: 10am - 3pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="h-96 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </div>
  );
}