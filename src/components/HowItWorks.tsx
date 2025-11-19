import { Card } from "@/components/ui/card";
import { FileText, CheckSquare, Package, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Faça seu cadastro",
    description: "Processo simples e rápido, 100% online"
  },
  {
    icon: CheckSquare,
    number: "02",
    title: "Escolha seu plano",
    description: "Opções flexíveis para cada necessidade"
  },
  {
    icon: Package,
    number: "03",
    title: "Receba sua maquininha",
    description: "Entrega rápida no endereço desejado"
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Comece a vender ou lucrar",
    description: "Tudo pronto para você crescer"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como <span className="text-primary">funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em 4 passos simples você está pronto para começar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative group">
              <div className="space-y-4">
                <div className="relative">
                  <div className="text-7xl font-bold text-primary/10 absolute -top-8 left-1/2 -translate-x-1/2">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative z-10 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground pt-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
