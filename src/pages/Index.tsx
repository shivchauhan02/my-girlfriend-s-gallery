import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <FloatingHearts />
    <HeroSection />
    <PhotoGallery />
    <LoveLetter />
    <Footer />
  </div>
);

export default Index;
