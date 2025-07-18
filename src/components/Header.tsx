import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            Autera
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#employees" className="text-muted-foreground hover:text-foreground transition-colors">
              AI Employees
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              Custom Solutions
            </a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Work
            </a>
          </div>
          
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-glow-soft hover:shadow-glow transition-all duration-300"
          >
            Let's Chat
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;