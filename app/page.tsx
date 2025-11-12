import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import InfoSection from "./components/InfoSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <section className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center text-center -z-10">
      <video
        src="/videos/StudentLaptop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </section>
      <div className="relative z-10 bg-white">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white -translate-y-full" />
        <InfoSection />
      </div>
    </div>
  );
}
