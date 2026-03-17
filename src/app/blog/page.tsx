// src/app/blog/page.tsx
export default function BlogPage() {
  const posts = [
    { title: 'How to Store Medicines Properly', date: 'March 15, 2024', excerpt: '...' },
    { title: 'Cold & Flu Season: Prevention Tips', date: 'March 14, 2024', excerpt: '...' },
    { title: 'Meet Our Pharmacist Team', date: 'March 13, 2024', excerpt: '...' },
  ];

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-white">Health Blog</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
              <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <a href="#" className="text-[#60A5FA] font-semibold hover:text-[#93C5FD] transition-colors">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}