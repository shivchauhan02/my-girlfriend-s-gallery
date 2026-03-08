import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetterSection from "@/components/LoveLetterSection";
import LoveLetter from "@/components/LoveLetter";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <FloatingHearts />
    <HeroSection />
    <PhotoGallery />
    <LoveLetterSection />
    <LoveLetter />
    <Footer />
  </div>
);

export default Index;
