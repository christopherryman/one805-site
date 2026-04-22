const photos = [
  {
    src: "https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6996251df1a664da221aefb2_one805live-2025-9.avif",
    alt: "Group of uniformed police officers and officials on stage",
    span: "md:col-span-2",
  },
  {
    src: "https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6996251cb3574aeb0d06aaa7_one805live-2025-1.avif",
    alt: "Musician with tattoos playing electric guitar on stage",
    span: "",
  },
  {
    src: "https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6996251d73473c3d7080646f_one805live-2025-8.avif",
    alt: "Woman smiling and shaking hands at the event",
    span: "",
  },
  {
    src: "https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/6996251c2b291722cd2e3027_one805live-2025-3.avif",
    alt: "Three men on stage including fire chief and firefighter with dog",
    span: "",
  },
  {
    src: "https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/697bcc29620c48585cb09af9_stage-wide.jpg",
    alt: "Wide stage shot at One805LIVE!",
    span: "md:col-span-2",
  },
  {
    src: "https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/699a383854e0f380d4827c4b_JohnFogerty_One805LIVE!2023_JayFarbmanPhotography.jpg",
    alt: "John Fogerty performing at One805LIVE! 2023",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-gold-400/70 mb-3">
              Photo Gallery
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              One805LIVE!{" "}
              <span className="text-white/40 italic font-normal">In Action</span>
            </h2>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {photos.map(({ src, alt, span }, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl aspect-[4/3] group ${span}`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Aerial standalone */}
        <div className="mt-3 relative overflow-hidden rounded-2xl aspect-[21/9] group">
          <img
            src="https://cdn.prod.website-files.com/6971129e5006a691e2ea93c8/699627d593bfdda90b88092e_Overhead%20Shot%20One805LIVE!%202025%20(2).avif"
            alt="Aerial night view of One805LIVE! 2025 at the oceanside estate"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-1">
              One805LIVE! 2025
            </p>
            <p className="font-display text-2xl font-bold text-white">
              Kevin Costner's Oceanside Estate · Summerland, CA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
