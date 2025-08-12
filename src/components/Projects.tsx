import React, { useRef } from "react";

/**
 * Replace the `image` values with your project thumbnails (ideally 2x/HD).
 * Each project can also have a `href` for linking to a project page or lightbox.
 */
const PROJECTS = [
  {
    id: 1,
    title: "Space occupants",
    image: "/projects/space-invaders.png",
  },
];

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  function scrollByOffset(offset: number) {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      scrollByOffset(400);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      scrollByOffset(-400);
      e.preventDefault();
    }
  }

  return (
    <section className="bg-white text-black py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
          <div className="flex items-center gap-2">
            <button
              aria-label="Scroll projects left"
              onClick={() => scrollByOffset(-600)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              ←
            </button>
            <button
              aria-label="Scroll projects right"
              onClick={() => scrollByOffset(600)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-black/5 hover:bg-black/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollerRef}
          onKeyDown={onKeyDown}
          tabIndex={0}
          className="relative flex gap-6 overflow-x-auto px-1 py-2 snap-x snap-mandatory touch-pan-x focus:outline-none no-scrollbar"
          aria-label="Project previews"
        >
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="snap-center shrink-0 w-[85%] sm:w-72 md:w-80 lg:w-96 rounded-xl overflow-hidden bg-gray-50 shadow-sm"
            >
              <a href={p.href} className="group block">
                {/* image area: fixed height */}
                <div className="relative h-48 md:h-56 lg:h-64 bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* caption */}
                <div className="p-4 bg-white">
                  <h4 className="text-sm md:text-base font-medium text-black">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-xs md:text-sm text-black/70">
                    Short caption or tech notes (e.g. "Shot on 35mm, ambient
                    light").
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* small helper text */}
        <p className="mt-4 text-sm text-black/60">
          Use ← → keys or the buttons to scroll. Tap/drag on touch devices.
        </p>
      </div>
    </section>
  );
}
