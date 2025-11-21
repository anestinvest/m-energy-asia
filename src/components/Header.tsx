import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-heading text-2xl font-bold text-primary">
              M ENERGY ASIA
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#values" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Core Values
            </a>
            <a href="#industry" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Industry
            </a>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
