import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-12 py-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-heading text-xl font-bold text-accent tracking-wider">
              M ENERGY ASIA
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-sm font-medium text-accent/70 hover:text-accent transition-colors uppercase tracking-wider">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-accent/70 hover:text-accent transition-colors uppercase tracking-wider">
              Services
            </a>
            <a href="#values" className="text-sm font-medium text-accent/70 hover:text-accent transition-colors uppercase tracking-wider">
              Core Values
            </a>
            <a href="#industry" className="text-sm font-medium text-accent/70 hover:text-accent transition-colors uppercase tracking-wider">
              Industry
            </a>
            <Button size="sm" className="bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
