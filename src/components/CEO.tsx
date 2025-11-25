import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ceoImage from "@/assets/ceo-portrait.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const CEO = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* CEO Photo */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img 
                  src={ceoImage} 
                  alt="Brandon Lim Kim Seng - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* CEO Info */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
                  {t('ceo.tag')}
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-3 uppercase">
                {t('ceo.title')}
              </h2>
              <p className="text-lg text-accent/70 mb-8 font-medium">{t('ceo.position')}</p>
              
              <p className="text-muted-foreground leading-relaxed mb-10">
                {t('ceo.intro')}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-accent/60 uppercase tracking-widest mb-6">
                  {t('ceo.experience')}
                </h3>
              </div>

              <Accordion type="single" collapsible defaultValue="item-1" className="space-y-2">
                <AccordionItem value="item-1" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('ceo.mea.company')}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {t('ceo.mea.role')}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>{t('ceo.mea.desc1')}</p>
                    <p>{t('ceo.mea.desc2')}</p>
                    <p>{t('ceo.mea.desc3')}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('ceo.military.company')}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {t('ceo.military.role')}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>{t('ceo.military.desc1')}</p>
                    <p>{t('ceo.military.desc2')}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('ceo.bank.company')}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {t('ceo.bank.role')}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>{t('ceo.bank.desc1')}</p>
                    <p>{t('ceo.bank.desc2')}</p>
                    <p>{t('ceo.bank.desc3')}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">{t('ceo.bdg.company')}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {t('ceo.bdg.role')}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>{t('ceo.bdg.desc1')}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
