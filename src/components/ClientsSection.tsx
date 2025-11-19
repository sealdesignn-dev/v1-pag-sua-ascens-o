import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Zap, TrendingUp, BarChart3, Headphones } from "lucide-react";
import logo from "@/assets/logo.png";

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
    title: "Recebimento instantâneo",
    description: "Seu dinheiro na hora que precisa"
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
    window.open('https://wa.me/5511999999999?text=Olá! Quero ser cliente', '_blank');
  };

  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            A maquininha que <span className="text-primary">impulsiona</span> o seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para aceitar pagamentos e crescer com segurança
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={handleContact}
            className="group flex items-center gap-2"
          >
            Quero minha <img src={logo} alt="V1 Pag" className="h-6 inline-block" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
