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
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Foundation
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our operations and relationships
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="p-6 border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
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
