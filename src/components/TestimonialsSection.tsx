import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Archana",
    text: "I've been a member of this family for the last 1 year. Other than losing 16 kg weight, my complete family is healthy and happy. The coaches take care of you to their best possible level. Amazing transformation with guarantee happens here!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "I lost 12 kgs in 3 months without feeling starved. The meal plans are so easy to follow and the support is incredible! My energy levels have completely changed.",
    rating: 5,
  },
  {
    name: "Shikha Srivastava",
    text: "Before joining I was worried about PCOD, Migraine, and Hyperactivity. In 3 months, I resolved all my problems and also lost 10kg healthy fat. Today I'm enjoying a medicine-free, happy and healthy life.",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    text: "As a parent, I was worried about my child's picky eating. The customized plan made healthy eating fun and easy for the whole family. Truly life-changing experience!",
    rating: 5,
  },
  {
    name: "Meera Devi",
    text: "The hormonal balance program changed my life. Better sleep, clearer skin, and I feel more balanced than ever before. After one year, all my problems have subsided.",
    rating: 5,
  },
  {
    name: "Preeti Sharma",
    text: "I had slip disc, gas, acidity, and body pain problems. After one year, all my problems have subsided and as a bonus, I have lost 18 kg of fat. Thank you coach!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-background border border-border rounded-2xl p-8 md:p-10 text-center shadow-md"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/50 mx-auto mb-5 flex items-center justify-center">
              <span className="text-3xl font-heading font-bold text-primary">
                {testimonials[current].name.charAt(0)}
              </span>
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
              {testimonials[current].text}
            </p>
            <p className="font-heading font-bold text-foreground text-lg">
              {testimonials[current].name}
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-primary text-sm font-semibold hover:underline"
            >
              Check It From Here
            </a>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
