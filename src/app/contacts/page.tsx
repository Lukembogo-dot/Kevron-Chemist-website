import { ContactForm } from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Get in Touch</h1>
          <p className="text-gray-400 mb-12">We'd love to hear from you</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="text-[#60A5FA] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-white">Phone</h3>
                  <p className="text-gray-400">+254 703355300</p>
                  <p className="text-gray-400">+254 780077737</p>
                  <p className="text-gray-400">Available 24/7</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[#60A5FA] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-white">Email</h3>
                  <p className="text-gray-400">kevronltd@gmail.com</p>
                  <p className="text-gray-400">Response within 2 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#60A5FA] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-white">Location</h3>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                  <a
                    href="https://maps.app.goo.gl/XkcsuSUGEwzELcxx8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#60A5FA] hover:text-[#93C5FD] transition-colors text-sm"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-[#60A5FA] flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2 text-white">Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 8am - 6pm</p>
                  <p className="text-gray-400">Saturday: 9am - 5pm</p>
                  <p className="text-gray-400">Sunday: 10am - 3pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="h-96 bg-white/5 border-y border-white/10">
        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3552.381147225256!2d36.937270974394664!3d-1.3934236985934045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0df4d531d893%3A0x1fc5bc94ddd5c1aa!2sKevron%20Healthcare%20Chemist!5e1!3m2!1sen!2ske!4v1773758487997!5m2!1sen!2ske"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kevron Healthcare Chemist Location"
        />
      </section>
    </div>
  );
}