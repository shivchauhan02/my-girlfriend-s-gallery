import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import photo3 from "@/assets/photo3.jpeg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
    <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
        className="mb-8"
      >
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-glow border-4 border-petal mx-auto">
          <img src={photo3} alt="My Love" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl md:text-7xl font-display font-bold text-gradient-love mb-4"
      >
        To My Beautiful Girl
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl md:text-2xl text-muted-foreground font-body italic max-w-xl"
      >
        Every moment with you is a beautiful memory I want to keep forever
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="text-primary" size={32} fill="hsl(var(--primary))" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
