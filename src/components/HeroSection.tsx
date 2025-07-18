import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  const animatedWords = ["Save Time", "Cut Costs", "Grow Sales"];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,255,148,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
          Start using AI before others
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Worlds Best AI
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Employees that{" "}
            <span className="text-primary bg-gradient-accent bg-clip-text text-transparent">
              <AnimatedText words={animatedWords} />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build, grow, and scale your business with a team of AI employees.
          </p>
        </div>
        
        <div className="mb-12">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-glow hover:shadow-glow-soft transform hover:scale-105 transition-all duration-300 animate-glow"
          >
            <div className="text-center">
              <div className="font-bold">Book a Free Strategy Call</div>
              <div className="text-sm opacity-90">Find your best AI use cases</div>
            </div>
          </Button>
        </div>
        
        <div className="flex items-center justify-center text-sm text-muted-foreground max-w-2xl mx-auto">
          <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
          <span>
            <strong>Disclaimer:</strong> this is not a sales call, but a{" "}
            <span className="text-primary font-semibold">Free</span> consultation 
            on How you could start using AI in your business
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;