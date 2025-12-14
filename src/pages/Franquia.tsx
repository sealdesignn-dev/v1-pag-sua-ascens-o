import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, DollarSign, TrendingUp, Users, Shield, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const advantages = [
  {
    icon: DollarSign,
    title: "Lucro Recorrente",
    description: "Ganhos mensais consistentes com cada cliente ativo na sua carteira"
  },
  {
    icon: TrendingUp,
    title: "Baixo Investimento Inicial",
    description: "Comece seu negócio com capital acessível e retorno rápido"
  },
  {
    icon: Users,
    title: "Suporte Completo",
    description: "Treinamento e acompanhamento contínuo da nossa equipe"
  },
  {
    icon: Shield,
    title: "Marca Consolidada",
    description: "Trabalhe com uma marca reconhecida e confiável no mercado"
  },
  {
    icon: Clock,
    title: "Flexibilidade de Horários",
    description: "Organize sua rotina e trabalhe no seu próprio ritmo"
  },
  {
    icon: Award,
    title: "Modelo Testado",
    description: "Operação simples e escalável com resultados comprovados"
  }
];

const Franquia = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone || !formData.cidade) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá! Quero ser franqueado V1 PAG.%0A%0A*Nome:* ${encodeURIComponent(formData.nome)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Telefone:* ${encodeURIComponent(formData.telefone)}%0A*Cidade de interesse:* ${encodeURIComponent(formData.cidade)}`;
    
    window.open(`https://wa.me/5531999196066?text=${message}`, '_blank');
    
    toast({
      title: "Sucesso!",
      description: "Você será redirecionado para o WhatsApp"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-secondary-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
            Seja um Franqueado <span className="text-primary">V1 PAG</span>
          </h1>
          <p className="text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
            Transforme sua vida financeira com um negócio lucrativo e escalável
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Vantagens de ser nosso franqueado
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <advantage.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-secondary-foreground mb-10">
              O que você recebe como franqueado
            </h2>
            <div className="space-y-4">
              {[
                "Treinamento completo sobre vendas e operação",
                "Material de marketing e divulgação",
                "Sistema de gestão de clientes",
                "Suporte técnico especializado",
                "Comissões competitivas do mercado",
                "Área exclusiva de atuação"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-background/50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background" id="formulario">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">
              Preencha o formulário
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Entre em contato conosco e saiba como se tornar um franqueado
            </p>
            
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-card-foreground">Nome completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-card-foreground">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cidade" className="text-card-foreground">Cidade de interesse</Label>
                  <Input
                    id="cidade"
                    name="cidade"
                    placeholder="Digite a cidade"
                    value={formData.cidade}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Enviar para WhatsApp
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-center">
        <p className="text-secondary-foreground/60">
          © 2024 V1 PAG. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Franquia;
