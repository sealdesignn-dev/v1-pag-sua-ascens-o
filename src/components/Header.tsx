import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          <img src={logo} alt="V1 Pag Logo" className="h-16 w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
