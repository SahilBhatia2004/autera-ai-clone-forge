import { useState } from "react";
import { Star } from "lucide-react";

interface EmployeeCardProps {
  name: string;
  role: string;
  avatar: string;
  color: string;
  index: number;
}

const EmployeeCard = ({ name, role, avatar, color, index }: EmployeeCardProps) => {
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
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 transition-transform duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}
          style={{ backgroundColor: color }}
        >
          {avatar}
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Efficiency</span>
          <div className="flex-1 mx-3 bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: isHovered ? '95%' : '85%' }}
            />
          </div>
          <span className="text-sm font-medium text-foreground">95%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Accuracy</span>
          <div className="flex-1 mx-3 bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: isHovered ? '98%' : '88%' }}
            />
          </div>
          <span className="text-sm font-medium text-foreground">98%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Speed</span>
          <div className="flex-1 mx-3 bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: isHovered ? '92%' : '82%' }}
            />
          </div>
          <span className="text-sm font-medium text-foreground">92%</span>
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