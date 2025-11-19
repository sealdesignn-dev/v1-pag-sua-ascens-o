import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de falar com um especialista V1 Pag', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para começar?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Fale com um especialista agora e descubra como a V1 Pag pode transformar seu negócio
            </p>
          </div>

          <Button 
            variant="secondary" 
            size="xl"
            onClick={handleWhatsApp}
            className="group shadow-2xl"
          >
            <MessageCircle className="group-hover:scale-110 transition-transform" />
            Fale com um especialista agora
          </Button>

          <p className="text-sm text-primary-foreground/70">
            Atendimento disponível de segunda a sexta, das 8h às 20h
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
