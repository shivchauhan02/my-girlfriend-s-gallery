import { motion } from "framer-motion";
import { PenLine } from "lucide-react";

const LoveLetterSection = () => (
  <section className="py-24 px-6 bg-gradient-romantic">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <PenLine className="mx-auto text-warm-gold mb-4" size={28} />
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-love">
          A Letter For You
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-2xl p-8 md:p-12 shadow-glow relative overflow-hidden"
      >
        {/* Decorative corner flourishes */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-petal rounded-tl-lg opacity-50" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-petal rounded-tr-lg opacity-50" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-petal rounded-bl-lg opacity-50" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-petal rounded-br-lg opacity-50" />

        <div className="space-y-6 font-body text-foreground text-lg leading-relaxed italic">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My Dearest Darling,
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            I don't know where to begin, because loving you feels like something that has no beginning and no end — it just is, like breathing, like the sun rising every morning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            From the moment you walked into my life, everything changed. The colors got brighter, the music got sweeter, and even the ordinary days started feeling magical — all because of you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            You have the most beautiful soul I've ever known. The way you care for others, the way your laughter fills the room, the way you look at the world with wonder — every little thing about you makes me fall deeper in love.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            I want you to know that no matter what life brings us, I will always choose you. In every lifetime, in every universe, it will always be you. You are my heart's home.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
            className="text-right mt-8"
          >
            Forever & always yours,<br />
            <span className="text-gradient-love font-display text-2xl not-italic">
              Your Love 💕
            </span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LoveLetterSection;
