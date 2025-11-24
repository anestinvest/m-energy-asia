import { Building2, Package, TrendingUp, Shield, Globe2, Anchor } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const CommercialOffer = () => {
  const offers = [
    {
      icon: Package,
      title: "Purchase of Petroleum Products and LNG",
      description: "Regular participation in government tenders across Asia. Long-term programs for raw materials and energy resources supply. Readiness to take stable volumes under our own contractual obligations."
    },
    {
      icon: Anchor,
      title: "Infrastructure and Real Assets",
      description: "Own storage facilities for petroleum products and LNG in key regional locations. Access to international fleet of gas and oil tankers. Multi-level logistics organization: from factory to end consumer. Turnkey supply chain management — including storage, blending, delivery and distribution."
    },
    {
      icon: TrendingUp,
      title: "Commercial Support and Sales Development",
      description: "We operate as your external export division in Southeast Asia. Counterparty verification, asset audit, risk management. Participation in negotiations at the level of top management of foreign companies. Formation of sustainable deal schemes with end customers."
    }
  ];

  const solutions = [
    {
      icon: Shield,
      text: "Ensure a reliable and solvent buyer in the foreign market"
    },
    {
      icon: Globe2,
      text: "Reduce risks when working with new countries and jurisdictions"
    },
    {
      icon: Building2,
      text: "Support participation of producers in international tenders"
    },
    {
      icon: TrendingUp,
      text: "Build a stable export channel for the long term"
    },
    {
      icon: Package,
      text: "Increase supply volumes through our infrastructure and distribution"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Partnership Proposal
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are an international energy company operating in Asia and the Middle East.
            Ready to act both as a buyer and as your external commercial partner in foreign markets.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-accent">
            What We Offer to Producers
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {offers.map((offer, index) => (
              <AccordionItem key={index} value={`offer-${index}`} className="border-none">
                <Card className="bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-300">
                  <AccordionTrigger className="hover:no-underline px-8 py-6">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-accent/10 flex items-center justify-center border border-accent/20 shrink-0">
                        <offer.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-heading text-xl md:text-2xl font-semibold text-left">
                        {offer.title}
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pl-[116px]">
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {offer.description}
                    </p>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Solutions We Provide */}
        <div>
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-accent">
            Solutions We Provide
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors">
                      <solution.icon className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {solution.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialOffer;
