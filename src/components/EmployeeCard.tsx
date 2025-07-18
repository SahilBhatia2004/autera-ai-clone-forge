import { useState } from "react";
import { Star } from "lucide-react";

interface EmployeeCardProps {
  name: string;
  role: string;
  avatar: string;
  color: string;
  index: number;
  features: string[];
  capabilities: string[];
}

const EmployeeCard = ({ name, role, avatar, color, index, features, capabilities }: EmployeeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 right-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 text-primary fill-current" 
            />
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div 
          className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl mb-4 transition-transform duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}
          style={{ backgroundColor: color }}
        >
          {avatar}
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
      
      <div className="space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="text-sm">
            <span className="font-semibold text-foreground">{feature}</span>
          </div>
        ))}
        
        <div className="space-y-2 mt-4">
          {capabilities.map((capability, i) => (
            <div key={i} className="text-sm text-muted-foreground">
              • {capability}
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Available 24/7 • Never takes breaks • Scales instantly
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;