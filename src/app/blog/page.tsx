// src/app/blog/page.tsx
export default function BlogPage() {
  const posts = [
    { title: 'How to Store Medicines Properly', date: 'March 15, 2024', excerpt: '...' },
    { title: 'Cold & Flu Season: Prevention Tips', date: 'March 14, 2024', excerpt: '...' },
    { title: 'Meet Our Pharmacist Team', date: 'March 13, 2024', excerpt: '...' },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Health Blog</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="border rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-[#2E75B6] font-semibold hover:underline">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}