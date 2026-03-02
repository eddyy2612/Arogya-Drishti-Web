import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/dietician-about.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={aboutImage}
              alt="Health coach profile"
              className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              My Self
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mt-6">
              <p>
                Hi, I am a <strong className="text-foreground">Certified Wellness & Nutrition Coach</strong> with 
                over a decade of experience. I have trained 500+ people who are now living a healthy lifestyle 
                from the comfort of their homes.
              </p>
              <p>
                I personally experienced the difficulty of weight management — trying every door 
                but not getting results. After discovering the right nutrition approach, I reduced 
                25 kg and transformed myself into a health coach.
              </p>
              <p>
                Whether it's <strong className="text-foreground">weight loss, hormonal balance, 
                children's nutrition, or lifestyle transformation</strong> — I will help you find 
                your sustainable path to long-term health results.
              </p>
              <p>
                <strong className="text-foreground">No crash dieting. No shortcuts. Just science-backed, 
                sustainable change.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
