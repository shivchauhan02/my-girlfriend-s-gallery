import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";

const reasons = [
  "Your smile lights up my entire world",
  "The way you laugh at my silly jokes",
  "How your eyes sparkle when you're happy",
  "Your kindness that touches everyone around you",
  "The way you make everything feel like home",
  "How beautiful you look without even trying",
];

const LoveLetter = () => (
  <section className="py-24 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero opacity-50" />

    <div className="max-w-2xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <Sparkles className="mx-auto text-warm-gold mb-4" size={32} />
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-love mb-4">
          Why I Love You
        </h2>
        <p className="text-muted-foreground font-body italic">
          Let me count the ways...
        </p>
      </motion.div>

      <div className="space-y-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex items-start gap-4 bg-card/80 backdrop-blur-sm rounded-xl p-5 shadow-romantic"
          >
            <div className="mt-1 shrink-0">
              <Heart size={18} className="text-primary" fill="hsl(var(--primary))" />
            </div>
            <p className="font-body text-foreground text-lg">{reason}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-center bg-card rounded-2xl p-8 shadow-glow"
      >
        <Star className="mx-auto text-warm-gold mb-4" size={28} fill="hsl(var(--warm-gold))" />
        <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
          "You are my today and all of my tomorrows."
        </p>
        <p className="text-muted-foreground font-body mt-4">— Forever Yours 💕</p>
      </motion.div>
    </div>
  </section>
);

export default LoveLetter;
