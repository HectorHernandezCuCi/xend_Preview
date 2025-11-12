"use client";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center">
      <video
        src="/videos/HeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-white px-10 translate-y-[-80px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Bienvenido a <span className="text-blue-300">XEND</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Transformamos la manera en que escuelas, alumnos y docentes se comunican.
        </p>
      </div>

    </section>
  );
};

export default HeroSection;
