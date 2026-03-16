export default function ServicesPage() {
  const services = [
    {
      title: 'Over-the-Counter Medicines',
      description: 'Wide range of commonly used medicines for pain, cough, digestive issues, and more.',
      icon: '💊'
    },
    {
      title: 'Prescription Fulfillment',
      description: 'Professional prescription verification and rapid fulfillment with expert guidance.',
      icon: '📋'
    },
    {
      title: 'Pharmacist Consultation',
      description: 'Free consultation with licensed pharmacists for medication advice and health guidance.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Fast Delivery',
      description: 'Same-day delivery available across Nairobi metropolitan area.',
      icon: '🚚'
    },
    {
      title: 'Health Products',
      description: 'Premium vitamins, supplements, skincare, and wellness products.',
      icon: '✨'
    },
    {
      title: 'Corporate Orders',
      description: 'Bulk ordering and corporate wellness programs for organizations.',
      icon: '🏢'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center text-[#34495E]">Our Services</h1>
          <p className="text-center text-gray-600 mb-16">Comprehensive pharmaceutical solutions for you and your family</p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#2E75B6]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}