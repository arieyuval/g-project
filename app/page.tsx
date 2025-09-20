"use client";
import React, { useState } from "react";

// Simple, dependency‑light React component (Tailwind CSS recommended)
// Drop this into a Next.js app (e.g., app/page.tsx) or any React app.
// Add Tailwind for styling, or replace classNames with your own CSS.

export default function GazaProjectSite() {
  const [tab, setTab] = useState<"about" | "gallery" | "donate">("about");

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block rounded-xl bg-purple-100 p-2" aria-hidden>
              <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-5.1 9.3-6.53 10.33a1 1 0 0 1-1.14 0C9.9 18.3 4.9 14.25 4.9 9A7 7 0 0 1 12 2Z"/></svg>
            </span>
            <div>
              <h1 className="text-lg font-semibold leading-tight">Gaza Community Kitchen</h1>
              <p className="text-xs text-neutral-600">Hot meals, clean water, real hope</p>
            </div>
          </a>
          <nav className="flex gap-1" aria-label="Primary">
            <TabButton active={tab === "about"} onClick={() => setTab("about")}>About</TabButton>
            <TabButton active={tab === "gallery"} onClick={() => setTab("gallery")}>Gallery</TabButton>
            <TabButton active={tab === "donate"} onClick={() => setTab("donate")}>Donate today</TabButton>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-transparent">
        <div className="mx-auto max-w-5xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fueling dignity with meals & water in Al‑Maghazi, Gaza</h2>
            <p className="mt-3 text-neutral-700">Grassroots support led by Dina & Mohammad—serving families daily despite unimaginable hardship.</p>
            <div className="mt-5 flex gap-3">
              <a
                href="#donate"
                onClick={(e) => {
                  e.preventDefault();
                  setTab("donate");
                }}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Donate today
              </a>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); setTab("about"); }}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-white text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50"
              >
                Learn more
              </a>
              <a
                href="https://forms.gle/N3Nqo5HkTd6sx4D37"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200"
              >
                Get involved
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white flex items-center justify-center">
              <img src="/hero.jpg" alt="Hero placeholder" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {tab === "about" && <AboutSection />}
        {tab === "gallery" && <GallerySection />}
        {tab === "donate" && <DonateSection />}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Gaza Community Kitchen · Al‑Maghazi Refugee Camp</p>
          <p className="text-neutral-500">Built with care. Hosted on Vercel.</p>
        </div>
      </footer>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-3 py-2 rounded-lg text-sm font-medium",
        active
          ? "bg-purple-600 text-white"
          : "text-neutral-700 hover:bg-purple-100"
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </button>
  );
}

function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="scroll-mt-24"> 
      <h3 id="about-heading" className="text-2xl font-semibold">About</h3>
      <div className="mt-4 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <article className="prose prose-neutral max-w-none space-y-6">
            <p>
            In the heart of central Gaza, Dina and Mohammad are keeping hope alive through a grassroots initiative that provides hot meals, clean drinking water and basic supplies to families in Al-Maghazi refugee camp. From the beginning of the war, these parents of three young children devote time and effort to care for their community. They embody humanity and solidarity by refusing to let their neighbors go hungry and thirsty. Even as the sound of heavy bombardments shakes their nights, their mornings are spent cooking and distributing food. 
            </p>
            <p>
            At least three times a week, they cook hot meals three for the entire neighborhood and distribute packages with necessities for those in need. Already more than 100 families rely on them for cooked meals and supplies, but now that number increases daily with more and more displaced families seeking safe place in their neighborhood. Dina and Mohammad need your help  to help those who were left homeless and without means of survival. 
            </p>
            <p>
            Your support keeps this lifeline going. Every contribution helps feed families, sustain the resilience of the Al-Maghazi community, and preserve the sense of meaning and dignity for those carrying out this work. 
            </p>
            <p>
            We are seeking both one-time and monthly donors to create a stable support network, and volunteers who can help fundraising to expand the project’s reach. Together, we can ensure that Dina and Mohammad’s mission not only survives but thrives—providing nourishment, water, and hope where they are most desperately needed. 
            </p>
          </article>
          <div className="mt-6">
            <a
              href="https://forms.gle/N3Nqo5HkTd6sx4D37"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
            >
              Get involved (Google Form)
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        <aside className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <h4 className="font-semibold">Impact snapshot</h4>
            <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5">
              <li>Over 100 families served with cooked meals (and growing)</li>
              <li>Clean drinking water distribution</li>
              <li>Basic goods packages for families living in the streets</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <h4 className="font-semibold">How you can help</h4>
            <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5">
              <li>Become a monthly donor</li>
              <li>Make a one-time contribution</li>
              <li>Volunteer fundraising skills</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function GallerySection() {
  // Place your photos into /public/gallery/ and rename below
  const images = [
    "/gallery/top.jpg",
    "/gallery/IMG-20250920-WA0013.jpg",
    "/gallery/img9.jpg",
    "/gallery/IMG-20250919-WA0025.jpg",
    "/gallery/IMG-20250920-WA0007.jpg",
    "/gallery/IMG-20250920-WA0021.jpg",
    "/gallery/IMG-20250920-WA0009.jpg",
    "/gallery/IMG-20250919-WA0017.jpg",
    "/gallery/img10.jpg",
    "/gallery/IMG-20250919-WA0019.jpg",
    "/gallery/IMG-20250920-WA0008.jpg",
    "/gallery/img5.jpg",
    "/gallery/IMG-20250920-WA0017.jpg",
    "/gallery/IMG-20250919-WA0042.jpg",
    "/gallery/IMG-20250919-WA0029.jpg",
    "/gallery/IMG-20250919-WA0031.jpg",
    "/gallery/img2.jpg",
    "/gallery/IMG-20250920-WA0006.jpg",
    "/gallery/IMG-20250919-WA0016.jpg",
    "/gallery/IMG-20250920-WA0014.jpg",
    "/gallery/img8.jpg",
    "/gallery/IMG-20250919-WA0034.jpg",
    "/gallery/img4.jpg",
    "/gallery/IMG-20250920-WA0022.jpg",
    "/gallery/IMG-20250919-WA0013.jpg",
    "/gallery/IMG-20250920-WA0015.jpg",


  ];

  return (
    <section aria-labelledby="gallery-heading" className="scroll-mt-24">
      <h3 id="gallery-heading" className="text-2xl font-semibold">Gallery</h3>
      {/* <p className="mt-2 text-sm text-neutral-600">Replace the six placeholders below with your images in <code>/public/gallery</code>.</p> */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <figure key={i} className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
            <img src={src} alt={`Gallery image ${i + 1}`} className="h-56 w-full object-cover" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function DonateSection() {
  return (
    <section aria-labelledby="donate-heading" className="scroll-mt-24">
      <h3 id="donate-heading" className="text-2xl font-semibold">Donate today</h3>
      <p className="mt-2 text-neutral-700 max-w-2xl">
        Your donation directly funds hot meals, clean water, and care packages for families in Al-Maghazi Gaza. Choose a platform below:
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
        <a
          href="https://www.paypal.com/paypalme/free681?country.x=BE&locale.x=en_US&fbclid=IwY2xjawM1iWtleHRuA2FlbQIxMQABHk51z4HCDwDGh517Q7wpwjrtrFImMq4XGcnwEiFMmo10f7KjQIXSjO9W4zTc_aem_5g-o2jFDI40szLbO4uBIyQ"
          target="_blank"
          rel="noreferrer noopener"
          className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:bg-purple-50"
        >
          <h4 className="font-semibold">PayPal</h4>
          <p className="text-sm text-neutral-600 mt-1">Donate securely via PayPal.</p>
          <p className="mt-3 text-sm text-neutral-500">Opens in a new tab ↗</p>
        </a>

        <a
          href="https://gofund.me/8cb3284a0"
          target="_blank"
          rel="noreferrer noopener"
          className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:bg-purple-50"
        >
          <h4 className="font-semibold">GoFundMe</h4>
          <p className="text-sm text-neutral-600 mt-1">Support the fundraiser on GoFundMe.</p>
          <p className="mt-3 text-sm text-neutral-500">Opens in a new tab ↗</p>
        </a>
      </div>
    </section>
  );
}

