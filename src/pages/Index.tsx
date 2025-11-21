import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CoreValues from "@/components/CoreValues";
import Industry from "@/components/Industry";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Industry />
      <Footer />
    </div>
  );
};

export default Index;
