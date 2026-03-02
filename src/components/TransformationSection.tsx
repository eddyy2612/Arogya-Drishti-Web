import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const transformations = [
  { name: "Priya", location: "Mumbai", age: 34, lost: "12 kg", months: 3 },
  { name: "Rahul", location: "Delhi", age: 40, lost: "25 kg", months: 7 },
  { name: "Ananya", location: "Lucknow", age: 28, lost: "10 kg", months: 3 },
  { name: "Vikas", location: "Pune", age: 36, lost: "23 kg", months: 10 },
  { name: "Meera", location: "Jaipur", age: 43, lost: "18 kg", months: 11 },
  { name: "Deepak", location: "Chennai", age: 38, lost: "15 kg", months: 5 },
];

const TransformationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="transformation" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-wide uppercase">
            Transformation
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground italic font-heading">
            "Not Just Weight Loss – A Life Upgrade"
          </p>
          <a
            href="#free-trial"
            className="inline-block mt-6 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Know more
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {transformations.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card border border-border rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/5] bg-muted flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-primary">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-foreground text-lg">{item.name}</p>
                  <p className="text-muted-foreground text-xs">{item.location}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest to-transparent p-4 pt-12">
                <div className="flex justify-between items-end text-primary-foreground">
                  <div>
                    <p className="text-xs opacity-80">Age {item.age}</p>
                    <p className="font-bold text-lg">{item.lost}</p>
                  </div>
                  <p className="text-xs opacity-80">In {item.months} months</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
