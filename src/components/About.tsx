import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-12 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-left mb-16">
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent/60 uppercase tracking-widest">
                {t('about.tag')}
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-accent mb-6 uppercase">
              {t('about.title')}
            </h2>
          </div>
          
          <Card className="p-10 md:p-14 bg-card/50 border-border/30">
            <div className="text-muted-foreground leading-relaxed text-base">
              <p className="mb-6">
                <strong className="text-accent">M Energy Asia Limited</strong> {t('about.p1')}
              </p>
              
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleContent className="space-y-6 mb-6">
                  <p>{t('about.p2')}</p>
                  <p>{t('about.p3')}</p>
                  <p>{t('about.p4')}</p>
                </CollapsibleContent>
                
                <CollapsibleTrigger className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium">
                  {isOpen ? t('about.hide') : t('about.readMore')}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
              </Collapsible>

              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="org-chart" className="border-border/30">
                  <AccordionTrigger className="text-accent hover:text-accent/80 font-medium">
                    {t('about.orgChart')}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-6">
                      {/* CEO Level */}
                      <div className="flex flex-col items-center mb-8">
                        <div className="bg-primary border-2 border-accent px-6 py-3 rounded-lg shadow-lg">
                          <div className="text-accent font-bold text-center">{t('about.org.ceo')}</div>
                        </div>
                        <div className="w-0.5 h-8 bg-border/50"></div>
                      </div>

                      {/* Department Level */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative">
                        <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-border/50" style={{ top: '-1rem' }}></div>
                        
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">{t('about.org.compliance')}</div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">{t('about.org.adminFinance')}</div>
                          </div>
                          <div className="w-0.5 h-6 bg-border/50"></div>
                          <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs w-full mt-2">
                            <div className="text-muted-foreground">{t('about.org.financeManager')}</div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">{t('about.org.operations')}</div>
                          </div>
                          <div className="w-0.5 h-6 bg-border/50"></div>
                          <div className="grid grid-cols-1 gap-2 w-full mt-2">
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">{t('about.org.operationManager')}</div>
                            </div>
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">{t('about.org.logisticsManager')}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">{t('about.org.commercial')}</div>
                          </div>
                          <div className="w-0.5 h-6 bg-border/50"></div>
                          <div className="grid grid-cols-1 gap-2 w-full mt-2">
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">{t('about.org.trader')}</div>
                            </div>
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">{t('about.org.procurement')}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Level Positions */}
                      <div className="mt-8 pt-6 border-t border-border/30">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">{t('about.org.financeExec')}</div>
                          </div>
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">{t('about.org.adminExec')}</div>
                          </div>
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">{t('about.org.receptionist')}</div>
                          </div>
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">{t('about.org.clerk')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div className="mt-12 pt-10 border-t border-border/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-left">
                  <div className="text-4xl font-bold text-accent font-heading mb-2">2016</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{t('about.stats.established')}</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-accent font-heading mb-2">20M+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{t('about.stats.barrels')}</div>
                </div>
                <div className="text-left">
                  <div className="text-4xl font-bold text-accent font-heading mb-2">$924M</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{t('about.stats.revenue')}</div>
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
