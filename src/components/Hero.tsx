import heroImage from "@/assets/hero-lng-tanker.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Heavy Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[#2a3d3d]/95"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-12 text-left max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm md:text-lg lg:text-xl text-accent/80 mb-4 uppercase tracking-widest font-light">
            Presentation for
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl font-bold text-accent mb-6 md:mb-8 tracking-tight uppercase leading-none">
            MALAYSIAN<br />OIL & GAS<br />COMPANY
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-accent/70 mb-12 font-light tracking-wide">
            M Energy Asia Limited
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-accent/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
