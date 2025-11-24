import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section id="about" className="py-12 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-12">
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
            <div className="text-muted-foreground leading-relaxed text-base">
              <p className="mb-6">
                <strong className="text-accent">M Energy Asia Limited</strong> was incorporated in Labuan on December 1st, 2016, 
                with principal activities in oil and commodities trading, specializing in blending, refinement, 
                voyage operation, and sale of crude, natural gas, and petroleum products.
              </p>
              
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleContent className="space-y-6 mb-6">
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
                </CollapsibleContent>
                
                <CollapsibleTrigger className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium">
                  {isOpen ? "Hide" : "Read More"}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
              </Collapsible>

              <Accordion type="single" collapsible className="mt-8">
                <AccordionItem value="org-chart" className="border-border/30">
                  <AccordionTrigger className="text-accent hover:text-accent/80 font-medium">
                    Organization Chart
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="py-6">
                      {/* CEO Level */}
                      <div className="flex flex-col items-center mb-8">
                        <div className="bg-primary border-2 border-accent px-6 py-3 rounded-lg shadow-lg">
                          <div className="text-accent font-bold text-center">CEO</div>
                        </div>
                        <div className="w-0.5 h-8 bg-border/50"></div>
                      </div>

                      {/* Department Level */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative">
                        <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-border/50" style={{ top: '-1rem' }}></div>
                        
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">Compliance Officer</div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">Admin & Finance Department</div>
                          </div>
                          <div className="w-0.5 h-6 bg-border/50"></div>
                          <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs w-full mt-2">
                            <div className="text-muted-foreground">Finance Manager</div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">Operation Department</div>
                          </div>
                          <div className="w-0.5 h-6 bg-border/50"></div>
                          <div className="grid grid-cols-1 gap-2 w-full mt-2">
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">Operation Manager</div>
                            </div>
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">Logistics Manager</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-border/50 md:block hidden"></div>
                          <div className="bg-card border-2 border-primary px-4 py-3 rounded-lg shadow text-center w-full">
                            <div className="font-semibold text-sm text-foreground">Commercial Department</div>
                          </div>
                          <div className="w-0.5 h-6 bg-border/50"></div>
                          <div className="grid grid-cols-1 gap-2 w-full mt-2">
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">Trader</div>
                            </div>
                            <div className="bg-card/80 border border-border px-3 py-2 rounded text-center text-xs">
                              <div className="text-muted-foreground">Procurement</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Level Positions */}
                      <div className="mt-8 pt-6 border-t border-border/30">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">Finance Executive</div>
                          </div>
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">Admin Executive</div>
                          </div>
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">Receptionist</div>
                          </div>
                          <div className="bg-muted/30 border border-border/50 px-3 py-2 rounded text-center">
                            <div className="text-xs text-muted-foreground">Office Clerk</div>
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
