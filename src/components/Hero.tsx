import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-machines.png";
import logoV1Pag from "@/assets/logomarca-v1-pag.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-secondary via-secondary to-[hsl(220,65%,12%)]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 pb-12 relative z-10 flex-1 flex flex-col">
        {/* Logo Grande em Destaque */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={logoV1Pag} 
            alt="V1 PAG - Você em 1º Lugar" 
            className="h-60 md:h-80 lg:h-[28rem] w-auto drop-shadow-2xl" 
          />
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center flex-1 max-w-7xl mx-auto w-full">
          {/* Imagem das Maquininhas - Esquerda */}
          <div className="relative flex justify-center order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-75" />
              <img 
                src={heroImage} 
                alt="Maquininhas de pagamento V1 Pag" 
                className="relative w-full max-w-lg h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,122,0,0.3)] hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Botões - Direita */}
          <div className="space-y-6 order-1 lg:order-2 animate-fade-in">
            {/* Split de Pagamento */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open('https://wa.me/5531999196066?text=Olá! Quero saber sobre Split de Pagamento', '_blank')} 
                className="group w-full text-lg md:text-xl py-6"
              >
                Quero Split de Pagamento
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
              <p className="text-primary font-bold text-center mt-3 text-lg">
                Diga adeus à Bitributação!
              </p>
            </div>

            {/* Taxas mais baratas */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open('https://wa.me/5531999196066?text=Olá! Quero saber sobre as taxas', '_blank')} 
                className="group w-full text-lg md:text-xl py-6"
              >
                Quero Taxas Mais Baratas
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
              <p className="text-primary font-bold text-center mt-3 text-lg">
                As taxas mais baratas do mercado. Compare!
              </p>
            </div>

            {/* Falar com Gestor */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-white/10">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => window.open('https://wa.link/m60tf5', '_blank')} 
                className="group w-full text-lg md:text-xl py-6"
              >
                <MessageCircle className="mr-2" />
                Falar com o Gestor
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Área do Cliente - Grande Destaque */}
        <div className="mt-12 flex justify-center animate-fade-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-400 to-primary rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            <Button 
              variant="outline-light" 
              size="xl" 
              onClick={() => window.open('http://v1pag.stafebank.com.br', '_blank')} 
              className="relative text-xl md:text-2xl px-12 md:px-20 py-8 border-4 border-primary bg-secondary hover:bg-primary hover:text-secondary-foreground font-bold rounded-xl"
            >
              ÁREA DO CLIENTE
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;