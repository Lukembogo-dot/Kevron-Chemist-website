export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-white">About Kevron Chemist</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#60A5FA]">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2019, Kevron Chemist started with a simple mission:
                to provide quality medicines and expert pharmaceutical care to every customer in Nairobi.
              </p>
              <p className="text-gray-300 mb-4">
                From a single location, we've grown to become one of Nairobi's most trusted pharmacies,
                serving thousands of satisfied customers every month.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] h-96 rounded-lg flex items-center justify-center text-white border border-white/10">
              [Business Photo]
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-[#60A5FA] mb-2">500+</h3>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-[#06B6D4] mb-2">100%</h3>
              <p className="text-gray-400">Quality Assured</p>
            </div>
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-[#8B5CF6] mb-2">5+</h3>
              <p className="text-gray-400">Expert Pharmacists</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl mb-16">
            <h2 className="text-2xl font-bold mb-8 text-white">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'John Kipchoge', title: 'Chief Pharmacist', cert: 'B.Pharm, RPh' },
                { name: 'Sarah Mwangi', title: 'Pharmacist', cert: 'B.Pharm, RPh' },
                { name: 'Michael Ochieng', title: 'Pharmacy Technician', cert: 'Certified Technician' },
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 bg-white/10 border border-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400">
                    Photo
                  </div>
                  <h3 className="font-bold text-lg text-white">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.title}</p>
                  <p className="text-gray-500 text-xs">{member.cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Certifications</h2>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Kenya Pharmacy Board License: [License #]</li>
              <li>✓ ISO 9001:2015 Certified</li>
              <li>✓ COVID-19 Safety Certified</li>
              <li>✓ Customer Service Excellence Award (2023)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}