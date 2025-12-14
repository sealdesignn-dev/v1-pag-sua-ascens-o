import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Zap, TrendingUp, BarChart3, Headphones } from "lucide-react";

const benefits = [
  {
    icon: CreditCard,
    title: "Aceita todas as bandeiras",
    description: "Visa, Mastercard, Elo e muito mais"
  },
  {
    icon: Zap,
    title: "Taxas baixas",
    description: "Competitivas e transparentes"
  },
  {
    icon: TrendingUp,
    title: "Recebimento D+1",
    description: "Dinheiro seguro com D+1"
  },
  {
    icon: BarChart3,
    title: "Plataforma de gestão",
    description: "Controle total das suas vendas"
  },
  {
    icon: Headphones,
    title: "Atendimento premium",
    description: "Suporte 24h sempre disponível"
  }
];

const ClientsSection = () => {
  const handleContact = () => {
    window.open('https://wa.me/5531999196066?text=Olá! Quero ser cliente', '_blank');
  };

  return (
    <section id="clientes" className="py-24 bg-[hsl(220,65%,18%)]">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            A <strong>maquininha</strong> que <strong>impulsiona</strong> o seu negócio
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Tudo que você precisa para aceitar pagamentos e crescer com segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 bg-[hsl(29,100%,50%)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-[hsl(29,100%,50%)] hover:border-[hsl(29,100%,55%)]">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-[hsl(220,65%,18%)]/20 rounded-xl flex items-center justify-center group-hover:bg-[hsl(220,65%,18%)]/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-[hsl(220,65%,18%)]" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(220,65%,18%)]">{benefit.title}</h3>
                <p className="text-[hsl(220,65%,18%)]/80">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={handleContact}
            className="group"
          >
            Quero minha V1 PAG
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
