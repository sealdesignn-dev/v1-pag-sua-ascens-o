import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-machines.png";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start mb-6">
                <img src={logo} alt="V1 Pag Logo" className="h-20 md:h-24 lg:h-28 w-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">A maquininha perfeita para lucrar mais.</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto lg:mx-0">
                Diga adeus a Bitributação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => window.open('https://wa.link/m60tf5', '_blank')}
                className="group"
              >
                Conversar com Gestor
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline-light" 
                size="xl"
                onClick={() => window.open('http://v1pag.stafebank.com.br', '_blank')}
                className="group"
              >
                Acessar área
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Maquininhas de pagamento V1 Pag" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
