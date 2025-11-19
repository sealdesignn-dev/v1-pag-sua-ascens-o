import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-primary">V1</span> Pag
            </h3>
            <p className="text-background/70">
              Você em 1º lugar! Soluções de pagamento para seu negócio crescer.
            </p>
          </div>

          {/* Links - Clientes */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Para Clientes</h4>
            <ul className="space-y-2">
              <li>
                <a href="#clientes" className="text-background/70 hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#clientes" className="text-background/70 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Links - Franqueados */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Seja Franqueado</h4>
            <ul className="space-y-2">
              <li>
                <a href="#franqueados" className="text-background/70 hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#franqueados" className="text-background/70 hover:text-primary transition-colors">
                  Investimento
                </a>
              </li>
              <li>
                <a href="#franqueados" className="text-background/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © {currentYear} V1 Pag. Todos os direitos reservados.
          </p>

          {/* Social Media */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
