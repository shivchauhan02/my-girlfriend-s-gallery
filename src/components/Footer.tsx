import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 text-center bg-gradient-romantic">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="inline-block mb-4"
      >
        <Heart size={28} className="text-primary" fill="hsl(var(--primary))" />
      </motion.div>
      <p className="font-display text-xl text-foreground">Made with love, just for you</p>
      <p className="text-muted-foreground font-body mt-2 text-sm italic">
        Because you deserve the world & more ✨
      </p>
    </motion.div>
  </footer>
);

export default Footer;
