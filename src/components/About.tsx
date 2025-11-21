import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Executive Summary
            </h2>
          </div>
          
          <Card className="p-8 md:p-12 border-border">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">M Energy Asia Limited</strong> was incorporated in Labuan on December 1st, 2016, 
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
            
            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">2016</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">20M+</div>
                  <div className="text-sm text-muted-foreground">Barrels Traded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-heading mb-2">$924M</div>
                  <div className="text-sm text-muted-foreground">Total Revenue</div>
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
