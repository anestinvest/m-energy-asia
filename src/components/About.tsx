import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="container mx-auto px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-left mb-16">
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
              Executive Summary
            </h2>
          </div>
          
          <Card className="p-10 md:p-14 bg-card/50 border-border/30">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-base">
              <p>
                <strong className="text-accent">M Energy Asia Limited</strong> was incorporated in Labuan on December 1st, 2016, 
                with principal activities in oil and commodities trading, specializing in blending, refinement, 
                voyage operation, and sale of crude, natural gas, and petroleum products.
              </p>
              
              <p>
                We are currently negotiating off-take agreements with various refineries and trading companies 
                in China, Southeast Asia, and India. Our intention is to buy physical products directly from 
                traders/producers and sell to customers in Asia, focusing on India and China. Most of our 
                China buyers are top Fortune 500 companies.
              </p>
              
              <p>
                As a trading company, we employ an extensive trading desk. The Global Incentives for Trading (GIFT) 
                programme positions Malaysia as a regional trading hub for oil and gas. Under this programme, 
                we benefit from incentives offered through the establishment of the Labuan International Commodity 
                Trading Company (LITC).
              </p>
              
              <p>
                Using our sector knowledge and global supply base, we source and market commodities to industrial 
                consumers—such as manufacturers, power companies, and processors of oil. We procure and market 
                resources that play an essential role in modern oil and gas business.
              </p>
            </div>
            
            <div className="mt-12 pt-10 border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-left">
                  <div className="text-4xl font-bold text-accent font-heading mb-2">2016</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Established</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-accent font-heading mb-2">20M+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Barrels Traded</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-accent font-heading mb-2">$924M</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Total Revenue</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
