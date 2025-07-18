import { Settings, BarChart3, Zap, Users, GitBranch, Database, TrendingUp, Shield, Gauge, Clock, BarChart, Bot } from "lucide-react";

const CustomSolutionsSection = () => {
  const solutions = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Workflow Optimization",
      description: "We optimize workflows by connecting systems, automating tasks, and minimizing wasted time."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "AI Analysis",
      description: "We analyze your workflows and implement AI solutions to streamline and optimize them."
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Task Automation",
      description: "We automate daily tasks like customer support and emails, saving you valuable hours."
    }
  ];

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Improved Customer Experience" },
    { icon: <GitBranch className="w-5 h-5" />, text: "System Integration" },
    { icon: <Database className="w-5 h-5" />, text: "Data Driven Decisions" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Scalability" },
    { icon: <Gauge className="w-5 h-5" />, text: "Enhanced Productivity" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Availability" },
    { icon: <Shield className="w-5 h-5" />, text: "Data Safeguard" },
    { icon: <BarChart className="w-5 h-5" />, text: "Analytics" }
  ];

  return (
    <section id="solutions" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Custom Solutions
          </h2>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow-soft transition-all duration-300 group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-4 justify-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-full px-6 py-3 flex items-center gap-3 hover:shadow-glow-soft transition-all duration-300 hover:scale-105"
            >
              <div className="text-primary">
                {feature.icon}
              </div>
              <span className="text-foreground font-medium text-sm">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;