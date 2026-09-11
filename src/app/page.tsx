import Hero from "@/components/Hero";
import StorefrontStory from "@/components/StorefrontStory";

/**
 * Inline SVG pattern — subtle tech circuit-node grid.
 * Encodes as a data URI for use as a CSS tiling background-image.
 * Visible only in the white margins around the opaque Hero card.
 */
const svgPattern = `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='1.2' fill='#6f3cff' fill-opacity='0.12'/><circle cx='0' cy='0' r='1.2' fill='#6f3cff' fill-opacity='0.12'/><circle cx='60' cy='0' r='1.2' fill='#6f3cff' fill-opacity='0.12'/><circle cx='0' cy='60' r='1.2' fill='#6f3cff' fill-opacity='0.12'/><circle cx='60' cy='60' r='1.2' fill='#6f3cff' fill-opacity='0.12'/><line x1='30' y1='30' x2='60' y2='0' stroke='#6f3cff' stroke-opacity='0.06' stroke-width='0.5'/><line x1='30' y1='30' x2='0' y2='0' stroke='#6f3cff' stroke-opacity='0.06' stroke-width='0.5'/><line x1='30' y1='30' x2='60' y2='60' stroke='#6f3cff' stroke-opacity='0.06' stroke-width='0.5'/><line x1='30' y1='30' x2='0' y2='60' stroke='#6f3cff' stroke-opacity='0.06' stroke-width='0.5'/><circle cx='30' cy='0' r='0.7' fill='#6f3cff' fill-opacity='0.08'/><circle cx='0' cy='30' r='0.7' fill='#6f3cff' fill-opacity='0.08'/><circle cx='60' cy='30' r='0.7' fill='#6f3cff' fill-opacity='0.08'/><circle cx='30' cy='60' r='0.7' fill='#6f3cff' fill-opacity='0.08'/></svg>`;

const patternBg = `url("data:image/svg+xml,${encodeURIComponent(svgPattern)}")`;

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#070019]">
      <main className="max-w-[1440px] mx-auto p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-8 sm:gap-14">
        {/* Hero zone — pattern background fills the white margin around the card */}
        <div className="relative lg:-mx-5 xl:-mx-7">
          <div
            aria-hidden="true"
            className="absolute inset-0 -m-3 sm:-m-4 md:-m-6 lg:-my-8 lg:-mx-3 xl:-mx-1 pointer-events-none z-0"
            style={{ backgroundImage: patternBg, backgroundSize: "60px 60px" }}
          />
          <Hero />
        </div>
        <StorefrontStory />
      </main>
    </div>
  );
}
