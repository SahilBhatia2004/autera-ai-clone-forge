import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EmployeesSection from "@/components/EmployeesSection";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <HeroSection />
      <EmployeesSection />
      <CustomSolutionsSection />
    </div>
  );
};

export default Index;
