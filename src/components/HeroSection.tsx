import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Wellness and health coaching"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary-foreground/90 font-heading text-lg md:text-xl tracking-widest uppercase mb-4"
        >
          Welcome to Trinity Nourishment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.20 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight"
        >
          Your Ultimate Destination for Health, Weight Loss & Wellness Support
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Personalized Nutrition & Lifestyle Coaching That Actually Works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.60 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#free-trial"
            className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Start Your 3-Day Free Trial
          </a>
          <a
            href="#"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
