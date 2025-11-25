import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Zap, Users, Target, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CoreValues = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Shield,
      titleKey: 'values.safety.title',
      descKey: 'values.safety.desc'
    },
    {
      icon: Zap,
      titleKey: 'values.entrepreneurialism.title',
      descKey: 'values.entrepreneurialism.desc'
    },
    {
      icon: Users,
      titleKey: 'values.openness.title',
      descKey: 'values.openness.desc'
    },
    {
      icon: Target,
      titleKey: 'values.simplicity.title',
      descKey: 'values.simplicity.desc'
    },
    {
      icon: Leaf,
      titleKey: 'values.responsibility.title',
      descKey: 'values.responsibility.desc'
    }
  ];

  return (
    <section id="values" className="py-12 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-left mb-16 max-w-5xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
              {t('values.tag')}
            </span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
            {t('values.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t('values.subtitle')}
          </p>
        </div>
        
        <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-0">
              <Card className="bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-300">
                <AccordionTrigger className="p-8 hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
                  <div className="flex items-center gap-5 w-full">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/10 flex items-center justify-center border border-accent/20">
                        <value.icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-accent uppercase tracking-wide text-left flex-1">
                      {t(value.titleKey)}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 pt-0">
                  <div className="pl-[84px]">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(value.descKey)}
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

export default CoreValues;
