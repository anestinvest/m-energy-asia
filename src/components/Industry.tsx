import { Card } from "@/components/ui/card";

const topConsumers = [
  { country: "China", volume: "3.96 billion bbls", percentage: "30.22%" },
  { country: "United States", volume: "2.14 billion bbls", percentage: "16.35%" },
  { country: "India", volume: "1.47 billion bbls", percentage: "11.22%" },
  { country: "South Korea", volume: "971 million bbls", percentage: "7.40%" },
  { country: "Japan", volume: "902 million bbls", percentage: "6.88%" }
];

const Industry = () => {
  return (
    <section id="industry" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Market Intelligence
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Industry Overview
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Global oil consumption leaders and market dynamics
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-white/5 border-white/10 backdrop-blur-sm">
            <h3 className="font-heading text-2xl font-semibold text-white mb-8 text-center">
              Top Oil Consumers Annually
            </h3>
            <div className="space-y-4">
              {topConsumers.map((consumer, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg">{consumer.country}</div>
                      <div className="text-sm text-primary-foreground/70">{consumer.volume} annually</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent font-heading">{consumer.percentage}</div>
                    <div className="text-xs text-primary-foreground/70">of global consumption</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <p className="text-primary-foreground/80 leading-relaxed">
                The marine industry is structured on similar lines as the rest of the world, 
                with Asia-Pacific representing the largest and fastest-growing market for oil and gas commodities.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Industry;
