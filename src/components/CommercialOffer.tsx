import { Building2, Package, TrendingUp, Shield, Globe2, Anchor } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const CommercialOffer = () => {
  const { t } = useLanguage();
  
  const offers = [
    {
      icon: Package,
      titleKey: 'commercialOffer.offers.petroleum.title',
      descKey: 'commercialOffer.offers.petroleum.desc'
    },
    {
      icon: Anchor,
      titleKey: 'commercialOffer.offers.infrastructure.title',
      descKey: 'commercialOffer.offers.infrastructure.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'commercialOffer.offers.commercial.title',
      descKey: 'commercialOffer.offers.commercial.desc'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      textKey: 'commercialOffer.solutionsList.buyer'
    },
    {
      icon: Globe2,
      textKey: 'commercialOffer.solutionsList.risks'
    },
    {
      icon: Building2,
      textKey: 'commercialOffer.solutionsList.tenders'
    },
    {
      icon: TrendingUp,
      textKey: 'commercialOffer.solutionsList.channel'
    },
    {
      icon: Package,
      textKey: 'commercialOffer.solutionsList.volumes'
    }
  ];

  return (
    <section id="commercial-offer" className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('commercialOffer.title')}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('commercialOffer.subtitle')}
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-accent">
            {t('commercialOffer.whatWeOffer')}
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
                        {t(offer.titleKey)}
                      </h4>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pl-[116px]">
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      {t(offer.descKey)}
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
            {t('commercialOffer.solutions')}
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
                      {t(solution.textKey)}
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
