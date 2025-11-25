import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Ship, Fuel, Calculator, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Ship,
      titleKey: 'services.vessel.title',
      descKey: 'services.vessel.desc'
    },
    {
      icon: Fuel,
      titleKey: 'services.bunker.title',
      descKey: 'services.bunker.desc'
    },
    {
      icon: Calculator,
      titleKey: 'services.voyage.title',
      descKey: 'services.voyage.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'services.trading.title',
      descKey: 'services.trading.desc'
    }
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-left mb-16 max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
              {t('services.tag')}
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-0">
              <Card className="bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-300">
                <AccordionTrigger className="p-10 hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
                  <div className="flex items-center gap-5 w-full">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-accent/10 flex items-center justify-center border border-accent/20">
                        <service.icon className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-accent uppercase tracking-wide text-left flex-1">
                      {t(service.titleKey)}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-10 pb-10 pt-0">
                  <div className="pl-[76px]">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(service.descKey)}
                    </p>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
