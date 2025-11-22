import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ceoImage from "@/assets/ceo-portrait.jpg";

const CEO = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-12">
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
                  Leadership
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-accent mb-3 uppercase">
                Brandon Lim Kim Seng
              </h2>
              <p className="text-lg text-accent/70 mb-8 font-medium">Chief Executive Officer</p>
              
              <p className="text-muted-foreground leading-relaxed mb-10">
                Dr. Brandon Lim Kim Seng is a seasoned executive with over 20 years of leadership 
                experience in energy trading, investment banking, international commodities, and 
                large-scale development projects across Asia and Africa.
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-accent/60 uppercase tracking-widest mb-6">
                  Professional Experience
                </h3>
              </div>

              <Accordion type="single" collapsible defaultValue="item-1" className="space-y-2">
                <AccordionItem value="item-1" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">M Energy Asia Limited</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Chief Executive Officer (CEO) • 2019 – Present
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>
                      Founded M Energy Asia Limited (MEA) in 2019. Within a short period, transformed 
                      the company into a leading oil trading and brokerage house in Asia by establishing 
                      a robust supply chain for crude oil originating from China and India.
                    </p>
                    <p>
                      Under Dr. Lim's leadership, MEA has executed over 200 crude oil transactions, 
                      generating a cumulative turnover exceeding USD 1 billion. Successfully navigated 
                      the company through the COVID-19 pandemic while maintaining strong growth momentum.
                    </p>
                    <p>
                      Oversees overall corporate strategy, business development, financial performance, 
                      profit & loss management, and day-to-day operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">Military Veterans Association of Malaysia</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Special Project Advisor • 2016 – 2018
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>
                      Designed and implemented public safety enhancement programs focusing on cybersecurity 
                      and C4ISR communication systems for the Malaysian market.
                    </p>
                    <p>
                      Coordinated multi-year cooperation initiatives with government entities in Malaysia, 
                      Russia, and Angola. Established a sustainable asset-management program for retired 
                      military personnel.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">Development Bank of Guinea</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        CEO / Board Director • 2012 – 2016
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>
                      Represented major shareholders on the Board of Directors. Led the formulation and 
                      execution of the bank's overall strategy, managed all banking operations, stakeholders, 
                      and corporate affairs.
                    </p>
                    <p>
                      Secured funding from top-tier institutions in China, Malaysia, Société Générale (France), 
                      and leading West African banks.
                    </p>
                    <p>
                      During his tenure, spearheaded major energy and agricultural projects, including a 
                      300 MW heavy-fuel power plant and the development of 50,000 hectares of palm oil 
                      plantations for local consumption and export in West Africa.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-border/20 bg-card/30 px-6 rounded-sm">
                  <AccordionTrigger className="text-accent hover:no-underline py-5">
                    <div className="text-left">
                      <div className="font-semibold text-lg">BDG Capital Ltd</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Executive Director • 2010 – 2016
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 space-y-3">
                    <p>
                      Initiated and managed a gold trading platform involving the procurement of 99.2% 
                      purity gold bars in Portugal and Dubai, followed by international exchange sales 
                      and local market distribution.
                    </p>
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
