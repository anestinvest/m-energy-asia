import { Card } from "@/components/ui/card";
import { Shield, Zap, Users, Target, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety",
    description: "Our first priority is protecting the health and well-being of all our people. We take a proactive approach with continuous improvement in preventing occupational diseases and injuries."
  },
  {
    icon: Zap,
    title: "Entrepreneurialism",
    description: "We foster the highest level of professionalism, personal ownership and entrepreneurial spirit while never compromising on safety and well-being."
  },
  {
    icon: Users,
    title: "Openness",
    description: "We value open relationships and communication based on integrity, cooperation, transparency and mutual benefit with all stakeholders."
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "We achieve key deliverables efficiently as a path to industry-leading returns, maintaining focus on excellence, quality, and sustainability."
  },
  {
    icon: Leaf,
    title: "Responsibility",
    description: "We recognize our impact on society and the environment. We care profoundly about environmental protection, health, and safety performance."
  }
];

const CoreValues = () => {
  return (
    <section id="values" className="py-12 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-left mb-16 max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
              Our Foundation
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
            Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The principles that guide our operations and relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors border border-accent/20">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-accent mb-4 uppercase tracking-wide">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
