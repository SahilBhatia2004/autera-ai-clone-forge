import EmployeeCard from "./EmployeeCard";

const EmployeesSection = () => {
  const employees = [
    {
      name: "Orion",
      role: "Booking Manager", 
      avatar: "OR",
      color: "#4F46E5"
    },
    {
      name: "Benji",
      role: "Personal Assistant",
      avatar: "BJ", 
      color: "#059669"
    },
    {
      name: "Adam",
      role: "Customer Support Manager",
      avatar: "AD",
      color: "#DC2626" 
    },
    {
      name: "Henry",
      role: "Reminder Automation Manager",
      avatar: "HY",
      color: "#9333EA"
    },
    {
      name: "Jacky", 
      role: "Inbound Call Manager",
      avatar: "JY",
      color: "#EA580C"
    },
    {
      name: "Ringo",
      role: "AI Cold Caller", 
      avatar: "RG",
      color: "#0891B2"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeesSection;