import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Franqueado V1 Pag",
    content: "Ganhei mais autonomia financeira com a franquia. O suporte é excepcional e o retorno apareceu rápido!",
    rating: 5
  },
  {
    name: "Ana R.",
    role: "Lojista",
    content: "Taxas baixas e máquina confiável. A melhor que já usei para o meu comércio. Recomendo!",
    rating: 5
  },
  {
    name: "Juliana S.",
    role: "Empreendedora",
    content: "Atendimento incrível, recomendo demais. Resolveram tudo super rápido e sempre atentos.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de quem confia na V1 Pag
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-[hsl(220,70%,45%)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-white leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
