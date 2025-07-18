const ClientsSection = () => {
  // Mock client logos for the scrolling animation
  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "FutureWorks", logo: "FW" },
    { name: "SmartSolutions", logo: "SS" },
    { name: "DigitalPro", logo: "DP" },
    { name: "CloudTech", logo: "CT" },
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-12">
          Our employees are already helping:
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x space-x-12">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-bold text-lg border border-border hover:border-primary/50 transition-colors"
              >
                {client.logo}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-bold text-lg border border-border hover:border-primary/50 transition-colors"
              >
                {client.logo}
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {clients.map((client, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-bold text-lg border border-border hover:border-primary/50 transition-colors"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;