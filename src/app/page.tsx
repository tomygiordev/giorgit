import Hero from "@/components/Hero";
import StorefrontStory from "@/components/StorefrontStory";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#070019]">
      <main className="max-w-[1440px] mx-auto p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col gap-8 sm:gap-14">
        <Hero />
        <StorefrontStory />
      </main>
    </div>
  );
}
