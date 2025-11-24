import { Building2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const BankingInfrastructure = () => {
  const localBanks = [
    "APD Bank",
    "RHB Bank",
    "UOB Bank",
    "CIMB Bank",
    "AFFIN Bank",
    "Bank Islam"
  ];

  const foreignBanks = [
    "China Construction Bank",
    "ICBC",
    "Zhejiang Chouzhou Commercial Bank",
    "Zhejiang Mintai Commercial Bank",
    "VTB Bank"
  ];

  return (
    <section id="banking" className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Banking Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our extensive banking network enables seamless international transactions and provides robust financial support 
            for global trading operations. We maintain strategic partnerships with leading financial institutions across 
            local and international markets, ensuring secure and efficient payment processing for all commodity transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Local Banks */}
          <Card className="bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-accent uppercase tracking-wide">
                  Local Banks
                </h3>
              </div>
              <div className="space-y-3">
                {localBanks.map((bank, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background/50 border border-border/20 hover:border-accent/30 hover:bg-background/80 transition-all duration-300 group"
                  >
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {bank}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Foreign Banks */}
          <Card className="bg-card/40 border-border/30 hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-accent uppercase tracking-wide">
                  Foreign Banks
                </h3>
              </div>
              <div className="space-y-3">
                {foreignBanks.map((bank, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background/50 border border-border/20 hover:border-accent/30 hover:bg-background/80 transition-all duration-300 group"
                  >
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {bank}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BankingInfrastructure;