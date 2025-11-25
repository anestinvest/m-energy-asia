import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const navLinks = [
    { href: "#about", label: t('header.about') },
    { href: "#commercial-offer", label: t('header.commercialOffer') },
    { href: "#services", label: t('header.services') },
    { href: "#banking", label: t('header.banking') },
    { href: "#values", label: t('header.values') },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 md:px-12 py-4 md:py-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-heading text-lg md:text-xl font-bold text-accent tracking-wider">
              M ENERGY ASIA
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-accent/70 hover:text-accent transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-accent/70 hover:text-accent hover:bg-accent/10"
            >
              <Languages className="h-4 w-4 mr-2" />
              {language === 'en' ? 'RU' : 'EN'}
            </Button>
            <Button size="sm" className="bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20">
              {t('header.contact')}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-accent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background border-border">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-lg font-medium text-accent/70 hover:text-accent transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  variant="outline"
                  onClick={() => {
                    toggleLanguage();
                    handleLinkClick();
                  }}
                  className="w-full"
                >
                  <Languages className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'Русский' : 'English'}
                </Button>
                <Button className="bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 w-full mt-4">
                  {t('header.contact')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
