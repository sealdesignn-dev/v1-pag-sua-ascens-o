import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-machines.png";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center space-y-12 max-w-5xl mx-auto">
          {/* Text content */}
          <div className="space-y-4 text-center">
            <div className="flex justify-center mb-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-primary font-extrabold">V1 PAG</h2>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">A <strong className="text-white">maquininha</strong> perfeita <strong className="text-white">para lucrar mais.</strong></span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
              Diga adeus a Bitributação.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center w-full">
            <img src={heroImage} alt="Maquininhas de pagamento V1 Pag" className="w-3/4 md:w-1/2 h-auto object-contain drop-shadow-2xl animate-fade-in hover:scale-150 transition-transform duration-300" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={() => window.open('https://wa.link/m60tf5', '_blank')} className="group">
              Conversar com Gestor
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl" onClick={() => scrollToSection('franqueados')} className="group">
              Seja um franqueado
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-light" size="xl" onClick={() => window.open('http://v1pag.stafebank.com.br', '_blank')} className="group">
              Acessar área do cliente
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;