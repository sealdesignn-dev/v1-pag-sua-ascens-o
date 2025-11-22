import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, GraduationCap, TrendingUp, Briefcase } from "lucide-react";
import franchiseeImage from "@/assets/franchisee-success.jpg";
import logo from "@/assets/logo.png";

const highlights = [
  {
    icon: DollarSign,
    title: "Lucro recorrente",
    description: "Ganhos mensais com cada cliente ativo"
  },
  {
    icon: GraduationCap,
    title: "Suporte e treinamento completo",
    description: "Aprenda tudo sobre o negócio"
  },
  {
    icon: TrendingUp,
    title: "Baixo investimento inicial",
    description: "Comece com capital acessível"
  },
  {
    icon: Briefcase,
    title: "Operação simples e escalável",
    description: "Modelo de negócio testado e aprovado"
  }
];

const FranchiseSection = () => {
  const handleContact = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Quero ser franqueado', '_blank');
  };

  return (
    <section id="franqueados" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={franchiseeImage} 
                alt="Franqueado V1 Pag de sucesso" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3 flex-wrap">
                Seja franqueado <img src={logo} alt="V1 Pag" className="h-12 inline-block" /> e transforme sua renda
              </h2>
              <p className="text-xl text-secondary-foreground/80">
                Uma oportunidade real de construir um negócio lucrativo e escalável
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="p-6 bg-[hsl(29,100%,50%)] border-[hsl(29,100%,50%)] hover:bg-[hsl(29,100%,55%)] transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-[hsl(220,65%,18%)]/20 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-[hsl(220,65%,18%)]" />
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(220,65%,18%)]">{highlight.title}</h3>
                    <p className="text-sm text-[hsl(220,65%,18%)]/80">{highlight.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="xl"
              onClick={handleContact}
              className="w-full sm:w-auto"
            >
              Quero ser franqueado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
