import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, TrendingUp, Heart, Activity, Baby } from "lucide-react";

const services = [
  {
    icon: TrendingDown,
    title: "Weight Loss",
    description: "Sustainable, science-backed plans tailored to your metabolism and lifestyle for lasting fat loss.",
  },
  {
    icon: TrendingUp,
    title: "Healthy Weight Gain",
    description: "Build healthy mass with nutrient-dense meal plans and expert guidance for your body type.",
  },
  {
    icon: Heart,
    title: "Hormonal Balance",
    description: "Restore your body's natural rhythm through targeted nutrition and lifestyle strategies.",
  },
  {
    icon: Activity,
    title: "PCOS / Thyroid Support",
    description: "Specialized dietary plans to manage symptoms, reduce inflammation, and improve well-being.",
  },
  {
    icon: Baby,
    title: "Children's Nutrition",
    description: "Age-appropriate nutrition plans for growing kids and picky eaters to build healthy habits early.",
  },
];

const ProblemsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            We provide a one-stop solution for any type of weight management, health, and wellness needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-background border border-border rounded-xl p-7 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              <a href="#free-trial" className="inline-block mt-4 text-primary text-sm font-semibold hover:underline">
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
