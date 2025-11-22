const Footer = () => {
  return (
    <footer className="bg-primary border-t border-border/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 max-w-6xl mx-auto">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-5 text-accent uppercase tracking-wider">M ENERGY ASIA LIMITED</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading international oil and gas trading company specializing in crude oil, 
              LNG, and petroleum products across Asia.
            </p>
          </div>
          
          {/* Registered Office */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-accent uppercase tracking-wider">Registered Office</h4>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              Unit Level 11(A), Main Office Tower<br />
              Financial Park Labuan<br />
              Jalan Merdeka, 87000<br />
              Federal Territory of Labuan, Malaysia
            </address>
          </div>
          
          {/* Company Details */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-accent uppercase tracking-wider">Company Details</h4>
            <div className="text-muted-foreground text-sm space-y-3">
              <p>
                <strong className="text-accent">Registration No:</strong> LL13304
              </p>
              <p>
                <strong className="text-accent">Incorporated:</strong> 1st December 2016
              </p>
              <p className="mt-4 text-xs leading-relaxed">
                Licensed to carry on Labuan International Commodity Trading Business under 
                Global Incentives for Trading Programme (GIFT)
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-border/20 text-center max-w-6xl mx-auto">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            © {new Date().getFullYear()} M Energy Asia Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
