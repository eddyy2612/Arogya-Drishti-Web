import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

const goals = ["Weight Loss", "Weight Gain", "Hormonal Balance", "Kids Health", "Other"];

const TrialForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll reach out within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-sm";

  return (
    <section id="free-trial" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Start Your Free 3-Day Trial
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Fill out the form below and we'll create a personalized plan just for you.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
              <input required type="text" maxLength={100} placeholder="Your full name" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
              <input required type="email" maxLength={255} placeholder="your@email.com" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
              <input required type="tel" maxLength={15} placeholder="+91 XXXXX XXXXX" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Goal *</label>
              <select required className={inputClass}>
                <option value="">Select your goal</option>
                {goals.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1.5">Message (optional)</label>
              <textarea
                rows={3}
                maxLength={1000}
                placeholder="Tell us about your health goals..."
                className={`${inputClass} resize-none`}
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2 disabled:opacity-70"
          >
            <Send size={18} />
            {loading ? "Submitting..." : "Start My Free 3-Day Trial"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default TrialForm;
