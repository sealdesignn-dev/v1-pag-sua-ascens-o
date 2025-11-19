import { Card } from "@/components/ui/card";
import { Users, Award, ThumbsUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10.000+",
    label: "Clientes ativos"
  },
  {
    icon: Award,
    value: "300+",
    label: "Franqueados"
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "de satisfação"
  },
  {
    icon: Clock,
    value: "24h",
    label: "Média de aprovação"
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Números que <span className="text-primary">comprovam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança de milhares em números
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
