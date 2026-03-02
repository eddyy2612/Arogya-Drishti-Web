import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-forest/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Your Health Journey Starts Today.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Join our community and start your transformation with a free 3-day trial. No commitments, just results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#free-trial"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
