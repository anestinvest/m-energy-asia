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
    <section id="industry" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-left mb-16 max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
              Market Intelligence
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
            Industry Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Global oil consumption leaders and market dynamics
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="p-10 md:p-14 bg-card/40 border-border/30">
            <h3 className="font-heading text-3xl font-semibold text-accent mb-10 uppercase tracking-wide">
              Top Oil Consumers Annually
            </h3>
            <div className="space-y-4">
              {topConsumers.map((consumer, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 bg-primary/40 border border-border/20 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-lg border border-accent/20">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-accent text-lg uppercase tracking-wide">{consumer.country}</div>
                      <div className="text-sm text-muted-foreground">{consumer.volume} annually</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent font-heading">{consumer.percentage}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">of global consumption</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-10 border-t border-border/30">
              <p className="text-muted-foreground leading-relaxed text-base">
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
