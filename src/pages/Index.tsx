import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TransformationSection from "@/components/TransformationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ProblemsSection from "@/components/ProblemsSection";
import TrialForm from "@/components/TrialForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TransformationSection />
      <TestimonialsSection />
      <AboutSection />
      <ProblemsSection />
      <TrialForm />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
