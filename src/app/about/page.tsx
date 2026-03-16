export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-[#34495E]">About Kevron Chemist</h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#2E75B6]">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in [YEAR], Kevron Chemist started with a simple mission: 
                to provide quality medicines and expert pharmaceutical care to every customer in Nairobi.
              </p>
              <p className="text-gray-700 mb-4">
                From a single location, we've grown to become one of Nairobi's most trusted pharmacies,
                serving thousands of satisfied customers every month.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#2E75B6] to-[#27AE60] h-96 rounded-lg flex items-center justify-center text-white">
              [Business Photo]
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#2E75B6] mb-2">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#27AE60] mb-2">100%</h3>
              <p className="text-gray-600">Quality Assured</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#E74C3C] mb-2">5+</h3>
              <p className="text-gray-600">Expert Pharmacists</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-8 text-[#34495E]">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'John Kipchoge', title: 'Chief Pharmacist', cert: 'B.Pharm, RPh' },
                { name: 'Sarah Mwangi', title: 'Pharmacist', cert: 'B.Pharm, RPh' },
                { name: 'Michael Ochieng', title: 'Pharmacy Technician', cert: 'Certified Technician' },
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    Photo
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                  <p className="text-gray-500 text-xs">{member.cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#ECF0F1] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#34495E]">Our Certifications</h2>
            <ul className="space-y-2 text-gray-700">
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