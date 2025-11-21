const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">M ENERGY ASIA LIMITED</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading international oil and gas trading company specializing in crude oil, 
              LNG, and petroleum products across Asia.
            </p>
          </div>
          
          {/* Registered Office */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Registered Office</h4>
            <address className="text-primary-foreground/80 text-sm not-italic leading-relaxed">
              Unit Level 11(A), Main Office Tower<br />
              Financial Park Labuan<br />
              Jalan Merdeka, 87000<br />
              Federal Territory of Labuan, Malaysia
            </address>
          </div>
          
          {/* Company Details */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Company Details</h4>
            <div className="text-primary-foreground/80 text-sm space-y-2">
              <p>
                <strong className="text-primary-foreground">Registration No:</strong> LL13304
              </p>
              <p>
                <strong className="text-primary-foreground">Incorporated:</strong> 1st December 2016
              </p>
              <p className="mt-4 text-xs">
                Licensed to carry on Labuan International Commodity Trading Business under 
                Global Incentives for Trading Programme (GIFT)
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} M Energy Asia Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
