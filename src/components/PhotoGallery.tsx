import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";

const photos = [
  { src: photo1, caption: "Stunning as always ✨", rotate: -3 },
  { src: photo2, caption: "That smile though 💙", rotate: 2 },
  { src: photo3, caption: "Pure elegance 💜", rotate: -2 },
  { src: photo4, caption: "My favorite person 💕", rotate: 3 },
];

const PhotoGallery = () => (
  <section className="py-24 px-6 bg-gradient-romantic">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold text-center text-gradient-love mb-4"
    >
      Moments I Adore
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-center text-muted-foreground font-body italic mb-16 text-lg"
    >
      Every picture tells your story
    </motion.p>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
      {photos.map((photo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60, rotate: photo.rotate * 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.15, duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.03, rotate: 0, transition: { duration: 0.3 } }}
          className="group relative"
        >
          <div className="bg-card rounded-2xl overflow-hidden shadow-romantic">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <p className="font-body text-foreground italic">{photo.caption}</p>
              <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                <Heart className="text-primary cursor-pointer" size={20} fill="hsl(var(--primary))" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PhotoGallery;
