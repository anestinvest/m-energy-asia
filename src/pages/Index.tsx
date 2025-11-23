import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CEO from "@/components/CEO";
import About from "@/components/About";
import Services from "@/components/Services";
import BankingInfrastructure from "@/components/BankingInfrastructure";
import CoreValues from "@/components/CoreValues";
import Industry from "@/components/Industry";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <Hero />
        <CEO />
        <About />
        <Services />
        <BankingInfrastructure />
        <CoreValues />
        <Industry />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
