import { marquee } from "../data";

export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="relative border-y border-line bg-paper2/60 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 will-change-transform">
        {row.map((m, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display font-medium text-[13px] sm:text-sm tracking-tight text-muted whitespace-nowrap"
          >
            {m}
            <span className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
