import { Card } from "@/components/ui/card";
import { Ship, Fuel, Calculator, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Vessel Operation",
    description: "Comprehensive vessel management including voyage instructions, loading/discharging procedures, compliance monitoring, and optimal routing considering geography, meteorology, and canal requirements."
  },
  {
    icon: Fuel,
    title: "Bunker Management",
    description: "Expert handling of fuel types, quality measurement, and environmental compliance. Future plans include acquiring storage capacity and blending plants to meet specification needs for China and India markets."
  },
  {
    icon: Calculator,
    title: "Voyage Estimation",
    description: "Precise voyage planning including daily operating costs, route calculation, load line optimization, and strategic bunker port selection for maximum cargo efficiency."
  },
  {
    icon: TrendingUp,
    title: "Trading Services",
    description: "Long-standing relationships with producers and refiners globally. We deliver crude oil anywhere required, with access to dedicated vessels and worldwide land storage facilities."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-left mb-16 max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
              Our Services
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            End-to-end oil and gas trading services backed by industry expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-10 bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center border border-accent/20">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-accent mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
