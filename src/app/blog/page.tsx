// app/blog/page.tsx
import Link from 'next/link'

const posts = [
  {
    title: 'From Microstructure to Motion',
    slug: 'microstructure-to-motion',
    excerpt:
      'Explore how the internal structure of soft magnetic materials influences their global actuation response...'
  },
  {
    title: 'Simulating Large Deformations in Soft Materials',
    slug: 'large-deformations-simulation',
    excerpt:
      'Step-by-step guide to building a nonlinear elasticity model in FEniCSx...'
  },
  {
    title: 'Why Bifurcation Theory Still Matters',
    slug: 'bifurcation-theory',
    excerpt:
      'How classical bifurcation theory continues to shape our understanding of soft robotics and multi-stable systems...'
  }
]

export default function Blog() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-6">
          <h2 className="text-2xl font-semibold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="text-gray-700">{post.excerpt}</p>
        </div>
      ))}
    </main>
  )
}
