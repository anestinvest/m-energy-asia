import heroImage from "@/assets/hero-lng-tanker.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          M ENERGY ASIA LIMITED
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
          Leading International Oil & Gas Trading Company
        </p>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Specializing in crude oil, LNG, and petroleum products across Asia
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base px-8">
            Learn More
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
            Our Services
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
