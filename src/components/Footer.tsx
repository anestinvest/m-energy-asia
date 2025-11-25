import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary border-t border-border/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 max-w-6xl mx-auto">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-5 text-accent uppercase tracking-wider">
              {t('footer.companyName')}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.companyDesc')}
            </p>
          </div>
          
          {/* Registered Office */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-accent uppercase tracking-wider">
              {t('footer.registeredOffice')}
            </h4>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              Unit Level 11(A), Main Office Tower<br />
              Financial Park Labuan<br />
              Jalan Merdeka, 87000<br />
              Federal Territory of Labuan, Malaysia
            </address>
          </div>
          
          {/* Company Details */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-accent uppercase tracking-wider">
              {t('footer.companyDetails')}
            </h4>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                <strong className="text-accent">{t('footer.regNo')}</strong> LL13304
              </p>
              <p>
                <strong className="text-accent">{t('footer.incorporated')}</strong> 1st December 2016
              </p>
              <p className="mt-4 text-xs leading-relaxed">
                {t('footer.license')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border/20 text-center max-w-6xl mx-auto">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            © {new Date().getFullYear()} M Energy Asia Limited. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
