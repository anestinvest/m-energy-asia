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
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end oil and gas trading services backed by industry expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
