import EmployeeCard from "./EmployeeCard";

const EmployeesSection = () => {
  const employees = [
    {
      name: "Orion",
      role: "Booking Manager", 
      avatar: "📅",
      color: "#4F46E5",
      features: ["Automates bookings through WhatsApp and SMS", "Manages confirmations, cancellations, and modifications effortlessly"],
      capabilities: ["24/7 booking availability", "Multi-platform integration", "Smart scheduling optimization"]
    },
    {
      name: "Benji",
      role: "Personal Assistant",
      avatar: "🤖", 
      color: "#059669",
      features: ["Manages tasks, reminders, schedules, and emails", "Automates posts on Instagram, Facebook, X, and LinkedIn"],
      capabilities: ["Cross-platform messaging", "Social media automation", "Calendar management", "Voice control integration"]
    },
    {
      name: "Adam",
      role: "Customer Support Manager",
      avatar: "💬",
      color: "#DC2626",
      features: ["Handles real-time inquiries via Websites, WhatsApp, SMS, and Telegram", "Instantly answers questions and escalates complex issues"],
      capabilities: ["Multi-channel support", "Intelligent escalation", "Real-time responses", "Issue tracking"]
    },
    {
      name: "Henry",
      role: "Reminder Automation Manager",
      avatar: "⏰",
      color: "#9333EA",
      features: ["Sends automated reminders through WhatsApp and SMS", "Reduces missed appointments and boosts engagement"],
      capabilities: ["Smart reminder scheduling", "Multi-platform delivery", "Engagement tracking", "Custom reminder flows"]
    },
    {
      name: "Jacky", 
      role: "Inbound Call Manager",
      avatar: "📞",
      color: "#EA580C",
      features: ["AI-powered booking assistant that automates reservations", "Confirms, modifies, and manages booking requests"],
      capabilities: ["Natural voice interaction", "Booking automation", "Request management", "Phone integration"]
    },
    {
      name: "Ringo",
      role: "AI Cold Caller", 
      avatar: "🎯",
      color: "#0891B2",
      features: ["AI-powered call manager for lead generation and sales outreach", "Automates calls, delivers personalized messages"],
      capabilities: ["Lead generation", "Sales automation", "Personalized messaging", "Call analytics", "Follow-up sequences"]
    }
  ];

  return (
    <section id="employees" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            AI Employees
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Worlds Best AI Employees
          </h2>
          <p className="text-xl text-muted-foreground">
            Automates work. Even while you sleep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={employee.name}
              name={employee.name}
              role={employee.role}
              avatar={employee.avatar}
              color={employee.color}
              index={index}
              features={employee.features}
              capabilities={employee.capabilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeesSection;