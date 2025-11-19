import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, HeadphonesIcon, TrendingUp, Users } from "lucide-react";
import terminalImage from "@/assets/terminal-closeup.jpg";

const benefits = [
  {
    icon: TrendingUp,
    text: "Taxas competitivas e transparentes"
  },
  {
    icon: Clock,
    text: "Aprovação rápida"
  },
  {
    icon: HeadphonesIcon,
    text: "Suporte humanizado 24h"
  },
  {
    icon: CheckCircle2,
    text: "Ideal para pequenos e grandes negócios"
  },
  {
    icon: Users,
    text: "Modelo de franquia lucrativo"
  }
];

const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Por que escolher a <span className="text-primary">V1 Pag</span>?
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-5 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:translate-x-2">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-foreground">{benefit.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={terminalImage} 
                alt="Maquininha V1 Pag moderna" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
