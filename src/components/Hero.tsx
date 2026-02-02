import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-machines.png";
import logoV1Pag from "@/assets/logomarca-v1-pag.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src={logoV1Pag} alt="V1 PAG Logo" className="h-24 md:h-32 w-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image - Left side */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <img 
              src={heroImage} 
              alt="Maquininhas de pagamento V1 Pag" 
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Buttons - Right side */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Split de Pagamento */}
            <div className="space-y-2">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open('https://wa.me/5531999196066?text=Olá! Quero saber sobre Split de Pagamento', '_blank')} 
                className="group w-full"
              >
                Quero Split de Pagamento
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-primary font-medium text-center">
                Diga adeus a Bitributação.
              </p>
            </div>

            {/* Taxas mais baratas */}
            <div className="space-y-2">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open('https://wa.me/5531999196066?text=Olá! Quero saber sobre as taxas', '_blank')} 
                className="group w-full"
              >
                Quero Taxas Mais Baratas
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-primary font-medium text-center">
                As taxas mais baratas do mercado. Compare.
              </p>
            </div>

            {/* Falar com Gestor */}
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => window.open('https://wa.link/m60tf5', '_blank')} 
              className="group w-full"
            >
              Falar com o Gestor
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Área do Cliente - Destaque */}
        <div className="mt-16 flex justify-center">
          <Button 
            variant="outline-light" 
            size="xl" 
            onClick={() => window.open('http://v1pag.stafebank.com.br', '_blank')} 
            className="group text-xl px-16 py-8 border-4"
          >
            Área do Cliente
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;