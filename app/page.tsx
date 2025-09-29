// "use client";
// import React, { useState } from "react";

// // Simple, dependency‑light React component (Tailwind CSS recommended)
// // Drop this into a Next.js app (e.g., app/page.tsx) or any React app.
// // Add Tailwind for styling, or replace classNames with your own CSS.

// export default function GazaProjectSite() {
//   const [tab, setTab] = useState<"about" | "gallery" | "donate">("about");

//   return (
//     <div className="min-h-screen bg-neutral-50 text-neutral-900">
//       {/* Header / Nav */}
//       <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
//         <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
//           <a href="#" className="flex items-center gap-2">
//             <span className="inline-block rounded-xl bg-purple-100 p-2" aria-hidden>
//               <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-5.1 9.3-6.53 10.33a1 1 0 0 1-1.14 0C9.9 18.3 4.9 14.25 4.9 9A7 7 0 0 1 12 2Z"/></svg>
//             </span>
//             <div>
//               <h1 className="text-lg font-semibold leading-tight">Gaza Community Kitchen</h1>
//               <p className="text-xs text-neutral-600">Hot meals, clean water, real hope</p>
//             </div>
//           </a>
//           <nav className="flex gap-1" aria-label="Primary">
//             <TabButton active={tab === "about"} onClick={() => setTab("about")}>About</TabButton>
//             <TabButton active={tab === "gallery"} onClick={() => setTab("gallery")}>Gallery</TabButton>
//             <TabButton active={tab === "donate"} onClick={() => setTab("donate")}>Donate today</TabButton>
//           </nav>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="bg-gradient-to-b from-purple-50 to-transparent">
//         <div className="mx-auto max-w-5xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fueling dignity with meals & water in Al‑Maghazi, Gaza</h2>
//             <p className="mt-3 text-neutral-700">Grassroots support led by Dina & Mohammad—serving families daily despite unimaginable hardship.</p>
//             <div className="mt-5 flex gap-3">
//               <a
//                 href="#donate"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setTab("donate");
//                 }}
//                 className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
//               >
//                 Donate today
//               </a>
//               <a
//                 href="#about"
//                 onClick={(e) => { e.preventDefault(); setTab("about"); }}
//                 className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-white text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50"
//               >
//                 Learn more
//               </a>
//               <a
//                 href="https://forms.gle/N3Nqo5HkTd6sx4D37"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200"
//               >
//                 Get involved
//               </a>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white flex items-center justify-center">
//               <img src="/hero.jpg" alt="Hero placeholder" className="h-full w-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs */}
//       <main className="mx-auto max-w-5xl px-4 py-8">
//         {tab === "about" && <AboutSection />}
//         {tab === "gallery" && <GallerySection />}
//         {tab === "donate" && <DonateSection />}
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-neutral-200">
//         <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
//           <p>&copy; {new Date().getFullYear()} Gaza Community Kitchen · Al‑Maghazi Refugee Camp</p>
//           <p className="text-neutral-500">Built with care. Hosted on Vercel.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function TabButton({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
//   return (
//     <button
//       onClick={onClick}
//       className={[
//         "px-3 py-2 rounded-lg text-sm font-medium",
//         active
//           ? "bg-purple-600 text-white"
//           : "text-neutral-700 hover:bg-purple-100"
//       ].join(" ")}
//       aria-current={active ? "page" : undefined}
//     >
//       {children}
//     </button>
//   );
// }

// function AboutSection() {
//   return (
//     <section aria-labelledby="about-heading" className="scroll-mt-24"> 
//       <h3 id="about-heading" className="text-2xl font-semibold">About</h3>
//       <div className="mt-4 grid gap-6 md:grid-cols-5">
//         <div className="md:col-span-3">
//           <article className="prose prose-neutral max-w-none space-y-6">
//             <p>
//             In the heart of central Gaza, Dina and Mohammad are keeping hope alive through a grassroots initiative that provides hot meals, clean drinking water and basic supplies to families in Al-Maghazi refugee camp. From the beginning of the war, these parents of three young children devote time and effort to care for their community. They embody humanity and solidarity by refusing to let their neighbors go hungry and thirsty. Even as the sound of heavy bombardments shakes their nights, their mornings are spent cooking and distributing food. 
//             </p>
//             <p>
//             At least three times a week, they cook hot meals three for the entire neighborhood and distribute packages with necessities for those in need. Already more than 100 families rely on them for cooked meals and supplies, but now that number increases daily with more and more displaced families seeking safe place in their neighborhood. Dina and Mohammad need your help  to help those who were left homeless and without means of survival. 
//             </p>
//             <p>
//             Your support keeps this lifeline going. Every contribution helps feed families, sustain the resilience of the Al-Maghazi community, and preserve the sense of meaning and dignity for those carrying out this work. 
//             </p>
//             <p>
//             We are seeking both one-time and monthly donors to create a stable support network, and volunteers who can help fundraising to expand the project’s reach. Together, we can ensure that Dina and Mohammad’s mission not only survives but thrives—providing nourishment, water, and hope where they are most desperately needed. 
//             </p>
//           </article>
//           <div className="mt-6">
//             <a
//               href="https://forms.gle/N3Nqo5HkTd6sx4D37"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
//             >
//               Get involved (Google Form)
//               <span aria-hidden>↗</span>
//             </a>
//           </div>
//         </div>
//         <aside className="md:col-span-2 space-y-4">
//           <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
//             <h4 className="font-semibold">Impact snapshot</h4>
//             <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5">
//               <li>Over 100 families served with cooked meals (and growing)</li>
//               <li>Clean drinking water distribution</li>
//               <li>Basic goods packages for families living in the streets</li>
//             </ul>
//           </div>
//           <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
//             <h4 className="font-semibold">How you can help</h4>
//             <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5">
//               <li>Become a monthly donor</li>
//               <li>Make a one-time contribution</li>
//               <li>Volunteer fundraising skills</li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }

// function GallerySection() {
//   // Place your photos into /public/gallery/ and rename below
//   const images = [
//     "/gallery/top.jpg",
//     "/gallery/IMG-20250920-WA0013.jpg",
//     "/gallery/img9.jpg",
//     "/gallery/IMG-20250919-WA0025.jpg",
//     "/gallery/IMG-20250920-WA0007.jpg",
//     "/gallery/IMG-20250920-WA0021.jpg",
//     "/gallery/IMG-20250920-WA0009.jpg",
//     "/gallery/IMG-20250919-WA0017.jpg",
//     "/gallery/img10.jpg",
//     "/gallery/IMG-20250919-WA0019.jpg",
//     "/gallery/IMG-20250920-WA0008.jpg",
//     "/gallery/img5.jpg",
//     "/gallery/IMG-20250920-WA0017.jpg",
//     "/gallery/IMG-20250919-WA0042.jpg",
//     "/gallery/IMG-20250919-WA0029.jpg",
//     "/gallery/IMG-20250919-WA0031.jpg",
//     "/gallery/img2.jpg",
//     "/gallery/IMG-20250920-WA0006.jpg",
//     "/gallery/IMG-20250919-WA0016.jpg",
//     "/gallery/IMG-20250920-WA0014.jpg",
//     "/gallery/img8.jpg",
//     "/gallery/IMG-20250919-WA0034.jpg",
//     "/gallery/img4.jpg",
//     "/gallery/IMG-20250920-WA0022.jpg",
//     "/gallery/IMG-20250919-WA0013.jpg",
//     "/gallery/IMG-20250920-WA0015.jpg",


//   ];

//   return (
//     <section aria-labelledby="gallery-heading" className="scroll-mt-24">
//       <h3 id="gallery-heading" className="text-2xl font-semibold">Gallery</h3>
//       {/* <p className="mt-2 text-sm text-neutral-600">Replace the six placeholders below with your images in <code>/public/gallery</code>.</p> */}
//       <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//         {images.map((src, i) => (
//           <figure key={i} className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
//             <img src={src} alt={`Gallery image ${i + 1}`} className="h-56 w-full object-cover" />
//           </figure>
//         ))}
//       </div>
//     </section>
//   );
// }

// function DonateSection() {
//   return (
//     <section aria-labelledby="donate-heading" className="scroll-mt-24">
//       <h3 id="donate-heading" className="text-2xl font-semibold">Donate today</h3>
//       <p className="mt-2 text-neutral-700 max-w-2xl">
//         Your donation directly funds hot meals, clean water, and care packages for families in Al-Maghazi Gaza.
//       </p>

//       <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
//         <a
//           href="https://chuffed.org/project/150508-gaza-community-kitchen "
//           target="_blank"
//           rel="noreferrer noopener"
//           className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:bg-purple-50"
//         >
//           <h4 className="font-semibold">Chuffed</h4>
//           <p className="text-sm text-neutral-600 mt-1">Support the fundraiser on Chuffed.</p>
//           <p className="mt-3 text-sm text-neutral-500">Opens in a new tab ↗</p>
//         </a>

//         {/* <a
//           href="https://gofund.me/8cb3284a0"
//           target="_blank"
//           rel="noreferrer noopener"
//           className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:bg-purple-50"
//         >
//           <h4 className="font-semibold">GoFundMe</h4>
//           <p className="text-sm text-neutral-600 mt-1">Support the fundraiser on GoFundMe.</p>
//           <p className="mt-3 text-sm text-neutral-500">Opens in a new tab ↗</p>
//         </a> */}
//       </div>
//     </section>
//   );
// }

// "use client";
// import React, { useState } from "react";

// // Simple, dependency‑light React component (Tailwind CSS recommended)
// // Drop this into a Next.js app (e.g., app/page.tsx) or any React app.
// // Add Tailwind for styling, or replace classNames with your own CSS.

// export default function GazaProjectSite() {
//   const [tab, setTab] = useState<"about" | "gallery" | "donate">("about");
//   const [language, setLanguage] = useState<
//     "english" | "german" | "french" | "hebrew" | "arabic" | "spanish"
//   >("english");

//   return (
//     <div className="min-h-screen bg-neutral-50 text-neutral-900">
//       {/* Header / Nav */}
//       <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
//         <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
//           <a href="#" className="flex items-center gap-2">
//             <span className="inline-block rounded-xl bg-purple-100 p-2" aria-hidden>
//               <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 5.25-5.1 9.3-6.53 10.33a1 1 0 0 1-1.14 0C9.9 18.3 4.9 14.25 4.9 9A7 7 0 0 1 12 2Z"/></svg>
//             </span>
//             <div>
//               <h1 className="text-lg font-semibold leading-tight">Gaza Community Kitchen</h1>
//               <p className="text-xs text-neutral-600">Hot meals, clean water, real hope</p>
//             </div>
//           </a>
//           <nav className="flex gap-1" aria-label="Primary">
//             <TabButton active={tab === "about"} onClick={() => setTab("about")}>About</TabButton>
//             <TabButton active={tab === "gallery"} onClick={() => setTab("gallery")}>Gallery</TabButton>
//             <TabButton active={tab === "donate"} onClick={() => setTab("donate")}>Donate today</TabButton>
//           </nav>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="bg-gradient-to-b from-purple-50 to-transparent">
//         <div className="mx-auto max-w-5xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fueling dignity with meals & water in Al‑Maghazi, Gaza</h2>
//             <p className="mt-3 text-neutral-700">Grassroots support led by Dina & Mohammad—serving families daily despite unimaginable hardship.</p>
//             <div className="mt-5 flex gap-3 flex-wrap">
//               <a
//                 href="#donate"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setTab("donate");
//                 }}
//                 className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-purple-600 text-white hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
//               >
//                 Donate today
//               </a>
//               <a
//                 href="#about"
//                 onClick={(e) => { e.preventDefault(); setTab("about"); }}
//                 className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-white text-neutral-900 ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50"
//               >
//                 Learn more
//               </a>
//               <a
//                 href="https://forms.gle/N3Nqo5HkTd6sx4D37"
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-purple-100 text-purple-700 hover:bg-purple-200"
//               >
//                 Get involved
//               </a>
//             </div>

//             {/* Language buttons */}
//             <div className="mt-5 flex gap-2 flex-wrap">
//               {[
//                 { code: "english", label: "English" },
//                 { code: "german", label: "Deutsch" },
//                 { code: "french", label: "Français" },
//                 { code: "hebrew", label: "עברית" },
//                 { code: "arabic", label: "العربية" },
//                 { code: "spanish", label: "Español" },
//               ].map((lang) => (
//                 <button
//                   key={lang.code}
//                   onClick={() => setLanguage(lang.code as any)}
//                   className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
//                     language === lang.code
//                       ? "bg-purple-600 text-white"
//                       : "bg-purple-100 text-purple-700 hover:bg-purple-200"
//                   }`}
//                 >
//                   {lang.label}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="relative">
//             <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white flex items-center justify-center">
//               <img src="/hero.jpg" alt="Hero placeholder" className="h-full w-full object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tabs */}
//       <main className="mx-auto max-w-5xl px-4 py-8">
//         {tab === "about" && <AboutSection language={language} />}
//         {tab === "gallery" && <GallerySection />}
//         {tab === "donate" && <DonateSection />}
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-neutral-200">
//         <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
//           <p>&copy; {new Date().getFullYear()} Gaza Community Kitchen · Al‑Maghazi Refugee Camp</p>
//           <p className="text-neutral-500">Built with care. Hosted on Vercel.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// function TabButton({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
//   return (
//     <button
//       onClick={onClick}
//       className={[
//         "px-3 py-2 rounded-lg text-sm font-medium",
//         active
//           ? "bg-purple-600 text-white"
//           : "text-neutral-700 hover:bg-purple-100"
//       ].join(" ")}
//       aria-current={active ? "page" : undefined}
//     >
//       {children}
//     </button>
//   );
// }

// function AboutSection({ language }: { language: "english" | "german" | "french" | "hebrew" | "arabic" | "spanish" }) {
//   const content: Record<typeof language, React.ReactNode> = {
    // english: (
    //   <>
    //     <p>
    //       In the heart of central Gaza, Dina and Mohammad are keeping hope alive through a grassroots initiative that provides hot meals, clean drinking water and basic supplies to families in Al-Maghazi refugee camp. From the beginning of the war, these parents of three young children devote time and effort to care for their community. They embody humanity and solidarity by refusing to let their neighbors go hungry and thirsty. Even as the sound of heavy bombardments shakes their nights, their mornings are spent cooking and distributing food.
    //     </p>
    //     <p>
    //       At least three times a week, they cook hot meals three for the entire neighborhood and distribute packages with necessities for those in need. Already more than 100 families rely on them for cooked meals and supplies, but now that number increases daily with more and more displaced families seeking safe place in their neighborhood. Dina and Mohammad need your help  to help those who were left homeless and without means of survival.
    //     </p>
    //     <p>
    //       Your support keeps this lifeline going. Every contribution helps feed families, sustain the resilience of the Al-Maghazi community, and preserve the sense of meaning and dignity for those carrying out this work.
    //     </p>
    //     <p>
    //       We are seeking both one-time and monthly donors to create a stable support network, and volunteers who can help fundraising to expand the project’s reach. Together, we can ensure that Dina and Mohammad’s mission not only survives but thrives—providing nourishment, water, and hope where they are most desperately needed.
    //     </p>
    //   </>
    // ),
    // german: (
    //   <>
    //     <p>
    //       Im zentralen Gazastreifen bewahren Dina und Mohammad die Hoffnung – mit einer Basisinitiative, die warme Mahlzeiten, sauberes Trinkwasser und grundlegende Hilfsgüter an Familien im Flüchtlingslager Al-Maghazi verteilt. Seit Beginn des Krieges widmen die Eltern von drei kleinen Kindern ihre gesamte Zeit und Kraft der Fürsorge für ihre Nachbarschaft. Sie verkörpern Menschlichkeit und Solidarität, indem sie nicht zulassen, dass ihre Mitmenschen hungern oder dursten. Selbst wenn das Dröhnen schwerer Bombardierungen ihre Nächte erschüttert, beginnen sie am Morgen damit, Essen zu kochen und zu verteilen.
    //     </p>
    //     <p>
    //       Mindestens dreimal pro Woche bereiten sie warme Mahlzeiten für die gesamte Nachbarschaft zu und versorgen Bedürftige mit Paketen lebensnotwendiger Güter. Schon jetzt sind mehr als 100 Familien auf ihre Mahlzeiten und Hilfeleistungen angewiesen – und die Zahl wächst täglich, da immer mehr Vertriebene in ihrem Viertel Zuflucht suchen. Dina und Mohammad brauchen Ihre Unterstützung, um jenen beizustehen, die ohne Obdach und Lebensmittel geblieben sind.
    //     </p>
    //     <p>
    //       Ihre Hilfe erhält diese Lebensader aufrecht. Jeder Beitrag trägt dazu bei, Familien zu ernähren, den Überlebenswillen der Gemeinschaft von Al-Maghazi zu stärken und denjenigen, die diese Arbeit leisten, Sinn und Würde zu bewahren.
    //     </p>
    //     <p>
    //      Gesucht werden sowohl einmalige als auch regelmäßige Spenden, um ein stabiles Unterstützernetzwerk aufzubauen, sowie Freiwillige, die bei der Mittelbeschaffung helfen und die Reichweite des Projekts vergrößern können. Gemeinsam können wir dafür sorgen, dass Dinas und Mohammads Mission nicht nur fortgesetzt wird, sondern aufblüht – und dort Nahrung, Wasser und Hoffnung schenkt, wo sie am dringendsten gebraucht werden.
    //     </p>
    //   </>
    // ),
    // french: (
    //   <>
    //     <p>
    //      Au cœur de la bande de Gaza centrale, Dina et Mohammad maintiennent l’espoir vivant grâce à une initiative locale qui fournit des repas chauds, de l’eau potable et des produits de première nécessité aux familles du camp de réfugiés d’Al-Maghazi. Depuis le début de la guerre, ces parents de trois jeunes enfants consacrent temps et énergie à prendre soin de leur communauté. Ils incarnent l’humanité et la solidarité en refusant de laisser leurs voisins souffrir de la faim et de la soif. Même lorsque le fracas des bombardements lourds secoue leurs nuits, leurs matinées sont consacrées à cuisiner et à distribuer de la nourriture.
    //     </p>
    //     <p>
    //      Au moins trois fois par semaine, ils préparent des repas chauds pour tout le quartier et distribuent des colis contenant des produits essentiels aux plus démunis. Plus de 100 familles dépendent déjà d’eux pour les repas et l’approvisionnement, et ce nombre augmente chaque jour avec l’arrivée de nouvelles familles déplacées cherchant refuge dans leur quartier. Dina et Mohammad ont besoin de votre aide pour soutenir ceux qui ont perdu leur maison et leurs moyens de subsistance.
    //     </p>
    //     <p>       
    //      Votre soutien maintient ce lien vital. Chaque contribution aide à nourrir les familles, à renforcer la résilience de la communauté d’Al-Maghazi et à préserver le sens et la dignité de ceux qui mènent ce travail.
    //     </p>
    //     <p>       
    //      Nous recherchons à la fois des donateurs ponctuels et mensuels afin de créer un réseau de soutien stable, ainsi que des bénévoles pour aider à la collecte de fonds et à l’élargissement du projet. Ensemble, nous pouvons faire en sorte que la mission de Dina et Mohammad non seulement survive mais prospère – en apportant nourriture, eau et espoir là où ils sont le plus nécessaires.
    //     </p>
    //   </>
    // ),
    // hebrew: (
    //   <>
    //     <p>
    //      בלב רצועת עזה, דינא ומוחמד שומרים על התקווה חיה באמצעות יוזמה קהילתית המספקת ארוחות חמות, מים נקיים וציוד בסיסי למשפחות במחנה הפליטים אל־מע’אזי.
    //     </p>
    //     <p>
    //      מאז תחילת המלחמה, לצד דאגה לשלושת ילדיהם הקטנים, הם מקדישים זמן ומאמץ לסיוע לקהילה שלהם. הם מסרבים לתת לשכניהם להישאר רעבים וצמאים. גם כאשר הפצצות כבדות מרעידות את לילותיהם, את הבקרים שלהם הם מבלים בבישול ובחלוקת מזון.
    //     </p>
    //     <p>
    //      לפחות שלוש פעמים בשבוע הם מבשלים ארוחות חמות לכל השכונה ומחלקים חבילות של מוצרי יסוד לנזקקים. למעלה מ־100 משפחות  נסמכות עליהם לאוכל ולציוד בסיסי, אך מספר זה גדל מדי יום, בשל הגעה של משפחות נוספות שנעקרו מבתיהן בעיר עזה ומחפשות מקום בטוח בשכונה.
    //     </p>
    //     <p>
    //      דינא ומוחמד זקוקים לעזרתכם כדי לתמוך באלו שנשארו ללא קורת גג וללא אמצעי קיום.
    //     </p>
    //     <p>
    //      הסיוע שלכם מציל חיים! כל תרומה מסייעת להאכיל משפחות, לחזק את החוסן של קהילת אל־מע’אזי, ולשמור על תחושת המשמעות והכבוד של אלה העוסקים במלאכה החשובה הזו.
    //     </p>
    //     <p>
    //      אנחנו מחפשים תורמים הן לתרומות חד־פעמיות והן לתרומות חודשיות, כדי לבנות רשת תמיכה יציבה, וכן מתנדבים שיסייעו בגיוס כספים להרחבת היקף הפרויקט.
    //     </p>
    //     <p>
    //      יחד נוכל להבטיח את המשך פעילותם של דינא ומוחמד ואת הרחבתה, כך שעוד ועוד אנשים יוכלו לקבל את מה שנחוץ להם ביותר כדי לשרוד: מים, מזון ותקווה.
    //     </p>
    //   </>
    // ),
    // arabic: (
    //   <>
    //     <p>
    //       في قلب غزة الوسطى، يُبقي دينا ومحمد الأمل حيًا من خلال مبادرة شعبية تُقدّم وجبات ساخنة ومياه شرب نظيفة ومستلزمات أساسية لعائلات مخيم المغازي للاجئين. منذ بداية الحرب، يُكرّس هذان الأبوان، اللذان لديهما ثلاثة أطفال صغار، وقتهما وجهدهما لرعاية مجتمعهما. يُجسّدان الإنسانية والتضامن برفضهما ترك جيرانهما يعانون من الجوع والعطش. حتى مع دويّ القصف العنيف الذي يُزلزل لياليهما، يقضيان صباحاتهما في الطبخ وتوزيع الطعام.
    //     </p>
    //     <p>
    //      ثلاث مرات أسبوعيًا على الأقل، يُحضّران وجبات ساخنة لجميع سكان الحيّ، ويُوزّعان طرودًا تحتوي على الضروريات للمحتاجين. تعتمد أكثر من 100 عائلة عليهما بالفعل في إعداد الوجبات المطبوخة والإمدادات، لكن هذا العدد يتزايد يوميًا مع تزايد عدد العائلات النازحة التي تبحث عن ملاذ آمن في حيّها. دينا ومحمد بحاجة إلى مساعدتكم لمساعدة من تُركوا بلا مأوى وبلا سبل عيش.
    //     </p>
    //     <p>
    //      دعمكم يُبقي هذا السند مُستمرًا. كل تبرع يُسهم في إطعام الأسر، ويدعم صمود مجتمع المغازي، ويحفظ معنى وكرامة القائمين على هذا العمل.
    //     </p>
    //     <p>
    //      نبحث عن متبرعين لمرة واحدة أو شهريًا لإنشاء شبكة دعم مستقرة، وعن متطوعين قادرين على المساعدة في جمع التبرعات لتوسيع نطاق المشروع. معًا، نضمن استمرار مهمة دينا ومحمد، بل وازدهارها - بتوفير الغذاء والماء والأمل حيث تشتد الحاجة إليها.
    //     </p>
    //   </>
    // ),
    // spanish: (
    //   <>
    //     <p>
    //       En el corazón de Gaza central, Dina y Mohammed mantienen viva la esperanza a través de una iniciativa comunitaria que organiza comidas calientes, agua potable y suministros esenciales para las familias del campo de refugiados de Maghazi. Desde el comienzo de la guerra, estos padres de tres hijos pequeños han dedicado su tiempo y energía al cuidado de su comunidad. Representan la humanidad y la solidaridad al negarse a permitir que sus vecinos sufran hambre y sed. Incluso mientras el sonido de los intensos bombardeos sacude sus noches, dedican las mañanas a cocinar y distribuir alimentos.
    //     </p>
    //     <p>
    //      Al menos tres veces por semana, preparan comidas calientes para todos los residentes del barrio y entregan paquetes con artículos esenciales a quienes más lo necesitan. Más de 100 familias ya dependen de ellos para obtener comidas cocinadas y suministros, pero esa cifra crece a diario a medida que más desplazados buscan refugio en su barrio. Dina y Mohammed necesitan tu ayuda para apoyar a quienes se han quedado sin hogar ni medios de vida.
    //     </p>
    //     <p>
    //      Tu aporte hace posible esta labor. Cada donación contribuye a alimentar a las familias, fortalecer la resiliencia de la comunidad de Maghazi y preservar el sentido de dignidad de quienes impulsan este esfuerzo. Buscamos donantes puntuales o mensuales para crear una red de apoyo estable, así como voluntarios que puedan ayudar a recaudar fondos y expandir el proyecto. Juntos podemos garantizar que la misión de Dina y Mohammed continúe e incluso prospere, proporcionando comida, agua y esperanza donde más se necesita.
    //     </p>
    //   </>
    // ),
//   } as const;

//   return (
//     <section aria-labelledby="about-heading" className="scroll-mt-24"> 
//       <h3 id="about-heading" className="text-2xl font-semibold">About</h3>
//       <div className="mt-4 grid gap-6 md:grid-cols-5">
//         <div className="md:col-span-3">
//           <article className="prose prose-neutral max-w-none space-y-6">
//             {content[language]}
//           </article>
//           <div className="mt-6">
//             <a
//               href="https://forms.gle/N3Nqo5HkTd6sx4D37"
//               target="_blank"
//               rel="noreferrer noopener"
//               className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-purple-700"
//             >
//               Get involved (Google Form)
//               <span aria-hidden>↗</span>
//             </a>
//           </div>
//         </div>
//         <aside className="md:col-span-2 space-y-4">
//           <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
//             <h4 className="font-semibold">Impact snapshot</h4>
//             <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5">
//               <li>Over 100 families served with cooked meals (and growing)</li>
//               <li>Clean drinking water distribution</li>
//               <li>Basic goods packages for families living in the streets</li>
//             </ul>
//           </div>
//           <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
//             <h4 className="font-semibold">How you can help</h4>
//             <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5">
//               <li>Become a monthly donor</li>
//               <li>Make a one-time contribution</li>
//               <li>Volunteer fundraising skills</li>
//             </ul>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }

// function GallerySection() {
//   // Place your photos into /public/gallery/ and rename below
//   const images = [
//     "/gallery/top.jpg",
//     "/gallery/IMG-20250920-WA0013.jpg",
//     "/gallery/img9.jpg",
//     "/gallery/IMG-20250919-WA0025.jpg",
//     "/gallery/IMG-20250920-WA0007.jpg",
//     "/gallery/IMG-20250920-WA0021.jpg",
//     "/gallery/IMG-20250920-WA0009.jpg",
//     "/gallery/IMG-20250919-WA0017.jpg",
//     "/gallery/img10.jpg",
//     "/gallery/IMG-20250919-WA0019.jpg",
//     "/gallery/IMG-20250920-WA0008.jpg",
//     "/gallery/img5.jpg",
//     "/gallery/IMG-20250920-WA0017.jpg",
//     "/gallery/IMG-20250919-WA0042.jpg",
//     "/gallery/IMG-20250919-WA0029.jpg",
//     "/gallery/IMG-20250919-WA0031.jpg",
//     "/gallery/img2.jpg",
//     "/gallery/IMG-20250920-WA0006.jpg",
//     "/gallery/IMG-20250919-WA0016.jpg",
//     "/gallery/IMG-20250920-WA0014.jpg",
//     "/gallery/img8.jpg",
//     "/gallery/IMG-20250919-WA0034.jpg",
//     "/gallery/img4.jpg",
//     "/gallery/IMG-20250920-WA0022.jpg",
//     "/gallery/IMG-20250919-WA0013.jpg",
//     "/gallery/IMG-20250920-WA0015.jpg",
//   ];

//   return (
//     <section aria-labelledby="gallery-heading" className="scroll-mt-24">
//       <h3 id="gallery-heading" className="text-2xl font-semibold">Gallery</h3>
//       <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
//         {images.map((src, i) => (
//           <figure key={i} className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
//             <img src={src} alt={`Gallery image ${i + 1}`} className="h-56 w-full object-cover" />
//           </figure>
//         ))}
//       </div>
//     </section>
//   );
// }

// function DonateSection() {
//   return (
//     <section aria-labelledby="donate-heading" className="scroll-mt-24">
//       <h3 id="donate-heading" className="text-2xl font-semibold">Donate today</h3>
//       <p className="mt-2 text-neutral-700 max-w-2xl">
//         Your donation directly funds hot meals, clean water, and care packages for families in Al-Maghazi Gaza.
//       </p>

//       <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
//         <a
//           href="https://chuffed.org/project/150508-gaza-community-kitchen "
//           target="_blank"
//           rel="noreferrer noopener"
//           className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:bg-purple-50"
//         >
//           <h4 className="font-semibold">Chuffed</h4>
//           <p className="text-sm text-neutral-600 mt-1">Support the fundraiser on Chuffed.</p>
//           <p className="mt-3 text-sm text-neutral-500">Opens in a new tab ↗</p>
//         </a>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";

// Simple, dependency‑light React component (Tailwind CSS recommended)
// Drop this into a Next.js app (e.g., app/page.tsx) or any React app.
// Add Tailwind for styling, or replace classNames with your own CSS.

type Language = "english" | "german" | "french" | "hebrew" | "arabic" | "spanish";

export default function GazaProjectSite() {
  const [tab, setTab] = useState<"about" | "gallery" | "donate">("about");
  const [language, setLanguage] = useState<Language>("english");

  const LANGUAGES: ReadonlyArray<{ code: Language; label: string }> = [
    { code: "english", label: "English" },
    { code: "german", label: "Deutsch" },
    { code: "french", label: "Français" },
    { code: "hebrew", label: "עברית" },
    { code: "arabic", label: "العربية" },
    { code: "spanish", label: "Español" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"   // update with your file name
              alt="Gaza Community Kitchen Logo"
              width={60}        // adjust size as needed
              height={60}
              className="rounded-xl"
            />
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
            <div className="mt-5 flex gap-3 flex-wrap">
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

            {/* Language buttons */}
            <div className="mt-5 flex gap-2 flex-wrap">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    language === lang.code
                      ? "bg-purple-600 text-white"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
              <Image
                src="/hero.jpg"
                alt="Hero placeholder"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <main className="mx-auto max-w-5xl px-4 py-8">
        {tab === "about" && <AboutSection language={language} />}
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

function AboutSection({ language }: { language: Language }) {
  const content: Record<Language, React.ReactNode> = {
        english: (
      <>
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
      </>
    ),
    german: (
      <>
        <p>
          Im zentralen Gazastreifen bewahren Dina und Mohammad die Hoffnung – mit einer Basisinitiative, die warme Mahlzeiten, sauberes Trinkwasser und grundlegende Hilfsgüter an Familien im Flüchtlingslager Al-Maghazi verteilt. Seit Beginn des Krieges widmen die Eltern von drei kleinen Kindern ihre gesamte Zeit und Kraft der Fürsorge für ihre Nachbarschaft. Sie verkörpern Menschlichkeit und Solidarität, indem sie nicht zulassen, dass ihre Mitmenschen hungern oder dursten. Selbst wenn das Dröhnen schwerer Bombardierungen ihre Nächte erschüttert, beginnen sie am Morgen damit, Essen zu kochen und zu verteilen.
        </p>
        <p>
          Mindestens dreimal pro Woche bereiten sie warme Mahlzeiten für die gesamte Nachbarschaft zu und versorgen Bedürftige mit Paketen lebensnotwendiger Güter. Schon jetzt sind mehr als 100 Familien auf ihre Mahlzeiten und Hilfeleistungen angewiesen – und die Zahl wächst täglich, da immer mehr Vertriebene in ihrem Viertel Zuflucht suchen. Dina und Mohammad brauchen Ihre Unterstützung, um jenen beizustehen, die ohne Obdach und Lebensmittel geblieben sind.
        </p>
        <p>
          Ihre Hilfe erhält diese Lebensader aufrecht. Jeder Beitrag trägt dazu bei, Familien zu ernähren, den Überlebenswillen der Gemeinschaft von Al-Maghazi zu stärken und denjenigen, die diese Arbeit leisten, Sinn und Würde zu bewahren.
        </p>
        <p>
         Gesucht werden sowohl einmalige als auch regelmäßige Spenden, um ein stabiles Unterstützernetzwerk aufzubauen, sowie Freiwillige, die bei der Mittelbeschaffung helfen und die Reichweite des Projekts vergrößern können. Gemeinsam können wir dafür sorgen, dass Dinas und Mohammads Mission nicht nur fortgesetzt wird, sondern aufblüht – und dort Nahrung, Wasser und Hoffnung schenkt, wo sie am dringendsten gebraucht werden.
        </p>
      </>
    ),
    french: (
      <>
        <p>
         Au cœur de la bande de Gaza centrale, Dina et Mohammad maintiennent l’espoir vivant grâce à une initiative locale qui fournit des repas chauds, de l’eau potable et des produits de première nécessité aux familles du camp de réfugiés d’Al-Maghazi. Depuis le début de la guerre, ces parents de trois jeunes enfants consacrent temps et énergie à prendre soin de leur communauté. Ils incarnent l’humanité et la solidarité en refusant de laisser leurs voisins souffrir de la faim et de la soif. Même lorsque le fracas des bombardements lourds secoue leurs nuits, leurs matinées sont consacrées à cuisiner et à distribuer de la nourriture.
        </p>
        <p>
         Au moins trois fois par semaine, ils préparent des repas chauds pour tout le quartier et distribuent des colis contenant des produits essentiels aux plus démunis. Plus de 100 familles dépendent déjà d’eux pour les repas et l’approvisionnement, et ce nombre augmente chaque jour avec l’arrivée de nouvelles familles déplacées cherchant refuge dans leur quartier. Dina et Mohammad ont besoin de votre aide pour soutenir ceux qui ont perdu leur maison et leurs moyens de subsistance.
        </p>
        <p>       
         Votre soutien maintient ce lien vital. Chaque contribution aide à nourrir les familles, à renforcer la résilience de la communauté d’Al-Maghazi et à préserver le sens et la dignité de ceux qui mènent ce travail.
        </p>
        <p>       
         Nous recherchons à la fois des donateurs ponctuels et mensuels afin de créer un réseau de soutien stable, ainsi que des bénévoles pour aider à la collecte de fonds et à l’élargissement du projet. Ensemble, nous pouvons faire en sorte que la mission de Dina et Mohammad non seulement survive mais prospère – en apportant nourriture, eau et espoir là où ils sont le plus nécessaires.
        </p>
      </>
    ),
    hebrew: (
      <>
        <p>
         בלב רצועת עזה, דינא ומוחמד שומרים על התקווה חיה באמצעות יוזמה קהילתית המספקת ארוחות חמות, מים נקיים וציוד בסיסי למשפחות במחנה הפליטים אל־מע’אזי.
        </p>
        <p>
         מאז תחילת המלחמה, לצד דאגה לשלושת ילדיהם הקטנים, הם מקדישים זמן ומאמץ לסיוע לקהילה שלהם. הם מסרבים לתת לשכניהם להישאר רעבים וצמאים. גם כאשר הפצצות כבדות מרעידות את לילותיהם, את הבקרים שלהם הם מבלים בבישול ובחלוקת מזון.
        </p>
        <p>
         לפחות שלוש פעמים בשבוע הם מבשלים ארוחות חמות לכל השכונה ומחלקים חבילות של מוצרי יסוד לנזקקים. למעלה מ־100 משפחות  נסמכות עליהם לאוכל ולציוד בסיסי, אך מספר זה גדל מדי יום, בשל הגעה של משפחות נוספות שנעקרו מבתיהן בעיר עזה ומחפשות מקום בטוח בשכונה.
        </p>
        <p>
         דינא ומוחמד זקוקים לעזרתכם כדי לתמוך באלו שנשארו ללא קורת גג וללא אמצעי קיום.
        </p>
        <p>
         הסיוע שלכם מציל חיים! כל תרומה מסייעת להאכיל משפחות, לחזק את החוסן של קהילת אל־מע’אזי, ולשמור על תחושת המשמעות והכבוד של אלה העוסקים במלאכה החשובה הזו.
        </p>
        <p>
         אנחנו מחפשים תורמים הן לתרומות חד־פעמיות והן לתרומות חודשיות, כדי לבנות רשת תמיכה יציבה, וכן מתנדבים שיסייעו בגיוס כספים להרחבת היקף הפרויקט.
        </p>
        <p>
         יחד נוכל להבטיח את המשך פעילותם של דינא ומוחמד ואת הרחבתה, כך שעוד ועוד אנשים יוכלו לקבל את מה שנחוץ להם ביותר כדי לשרוד: מים, מזון ותקווה.
        </p>
      </>
    ),
    arabic: (
      <>
        <p>
          في قلب غزة الوسطى، يُبقي دينا ومحمد الأمل حيًا من خلال مبادرة شعبية تُقدّم وجبات ساخنة ومياه شرب نظيفة ومستلزمات أساسية لعائلات مخيم المغازي للاجئين. منذ بداية الحرب، يُكرّس هذان الأبوان، اللذان لديهما ثلاثة أطفال صغار، وقتهما وجهدهما لرعاية مجتمعهما. يُجسّدان الإنسانية والتضامن برفضهما ترك جيرانهما يعانون من الجوع والعطش. حتى مع دويّ القصف العنيف الذي يُزلزل لياليهما، يقضيان صباحاتهما في الطبخ وتوزيع الطعام.
        </p>
        <p>
         ثلاث مرات أسبوعيًا على الأقل، يُحضّران وجبات ساخنة لجميع سكان الحيّ، ويُوزّعان طرودًا تحتوي على الضروريات للمحتاجين. تعتمد أكثر من 100 عائلة عليهما بالفعل في إعداد الوجبات المطبوخة والإمدادات، لكن هذا العدد يتزايد يوميًا مع تزايد عدد العائلات النازحة التي تبحث عن ملاذ آمن في حيّها. دينا ومحمد بحاجة إلى مساعدتكم لمساعدة من تُركوا بلا مأوى وبلا سبل عيش.
        </p>
        <p>
         دعمكم يُبقي هذا السند مُستمرًا. كل تبرع يُسهم في إطعام الأسر، ويدعم صمود مجتمع المغازي، ويحفظ معنى وكرامة القائمين على هذا العمل.
        </p>
        <p>
         نبحث عن متبرعين لمرة واحدة أو شهريًا لإنشاء شبكة دعم مستقرة، وعن متطوعين قادرين على المساعدة في جمع التبرعات لتوسيع نطاق المشروع. معًا، نضمن استمرار مهمة دينا ومحمد، بل وازدهارها - بتوفير الغذاء والماء والأمل حيث تشتد الحاجة إليها.
        </p>
      </>
    ),
    spanish: (
      <>
        <p>
          En el corazón de Gaza central, Dina y Mohammed mantienen viva la esperanza a través de una iniciativa comunitaria que organiza comidas calientes, agua potable y suministros esenciales para las familias del campo de refugiados de Maghazi. Desde el comienzo de la guerra, estos padres de tres hijos pequeños han dedicado su tiempo y energía al cuidado de su comunidad. Representan la humanidad y la solidaridad al negarse a permitir que sus vecinos sufran hambre y sed. Incluso mientras el sonido de los intensos bombardeos sacude sus noches, dedican las mañanas a cocinar y distribuir alimentos.
        </p>
        <p>
         Al menos tres veces por semana, preparan comidas calientes para todos los residentes del barrio y entregan paquetes con artículos esenciales a quienes más lo necesitan. Más de 100 familias ya dependen de ellos para obtener comidas cocinadas y suministros, pero esa cifra crece a diario a medida que más desplazados buscan refugio en su barrio. Dina y Mohammed necesitan tu ayuda para apoyar a quienes se han quedado sin hogar ni medios de vida.
        </p>
        <p>
         Tu aporte hace posible esta labor. Cada donación contribuye a alimentar a las familias, fortalecer la resiliencia de la comunidad de Maghazi y preservar el sentido de dignidad de quienes impulsan este esfuerzo. Buscamos donantes puntuales o mensuales para crear una red de apoyo estable, así como voluntarios que puedan ayudar a recaudar fondos y expandir el proyecto. Juntos podemos garantizar que la misión de Dina y Mohammed continúe e incluso prospere, proporcionando comida, agua y esperanza donde más se necesita.
        </p>
      </>
    ),
  };

  return (
    <section aria-labelledby="about-heading" className="scroll-mt-24"> 
      <h3 id="about-heading" className="text-2xl font-semibold">About</h3>
      <div className="mt-4 grid gap-6 md:grid-cols-5">
        <div className="md:col-span-3">
          <article className="prose prose-neutral max-w-none space-y-6">
            {content[language]}
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
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <figure key={i} className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={800}
              height={600}
              className="h-56 w-full object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
            />
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
        Your donation directly funds hot meals, clean water, and care packages for families in Al-Maghazi Gaza.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
        <a
          href="https://chuffed.org/project/150508-gaza-community-kitchen "
          target="_blank"
          rel="noreferrer noopener"
          className="block rounded-2xl border border-neutral-200 bg-white p-5 hover:bg-purple-50"
        >
          <h4 className="font-semibold">Chuffed</h4>
          <p className="text-sm text-neutral-600 mt-1">Support the fundraiser on Chuffed.</p>
          <p className="mt-3 text-sm text-neutral-500">Opens in a new tab ↗</p>
        </a>
      </div>
    </section>
  );
}
