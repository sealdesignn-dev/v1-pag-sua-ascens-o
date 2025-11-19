import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientsSection from "@/components/ClientsSection";
import FranchiseSection from "@/components/FranchiseSection";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ClientsSection />
      <FranchiseSection />
      <Testimonials />
      <Stats />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
