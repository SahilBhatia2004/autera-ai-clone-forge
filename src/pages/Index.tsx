import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import EmployeesSection from "@/components/EmployeesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <HeroSection />
      <ClientsSection />
      <EmployeesSection />
    </div>
  );
};

export default Index;
