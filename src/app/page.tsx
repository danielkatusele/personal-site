// app/page.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src="/assets/headshot.jpg"
          alt="Daniel Katusele"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">Daniel Katusele</h1>
          <p className="mt-4 text-lg">
            Hi, I&apos;m Daniel Katusele, a researcher and engineer working at the intersection of soft robotics,
            functional materials, and computational modeling. My work explores the behavior of soft electromechanical
            systems, including dielectric elastomers and magnetic composites, with a focus on continuum theory,
            multi-physics coupling, and microstructure-informed design.
          </p>
          <p className="mt-2 text-lg">
            I&apos;m passionate about building robust mathematical and simulation tools that help design the next
            generation of responsive, adaptive materials and devices.
          </p>
        </div>
      </div>
    </main>
  )
}
