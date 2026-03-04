import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Transformation", href: "#transformation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-forest text-forest-foreground text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-forest-foreground/80 hover:text-forest-foreground transition-colors">
            <Phone size={12} /> +91 98765 43210
          </a>
          <a href="mailto:hello@arogyadadrishti.com" className="flex items-center gap-1.5 text-forest-foreground/80 hover:text-forest-foreground transition-colors">
            <Mail size={12} /> Trinitynourishment@gmail.com
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-background shadow-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <img 
              src="/src/assets/trinity.png" 
              alt="Trinity Nourishment Logo"
              className="h-8 w-8"
            />
            <a href="#home" className="font-heading text-2xl font-bold text-primary">
              Trinity Nourishment
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://www.arogyadrishti.co.in/"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free Trial
            </a>
            <a
              href="https://app.wellnessz.in/public/book-appointment/6894fabee26989ec71e4f5d5"
              className="border border-primary text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="flex flex-col items-center gap-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#free-trial"
                  onClick={() => setMobileOpen(false)}
                  className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold"
                >
                  Start Free Trial
                </a>
                <a
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="border border-primary text-primary px-6 py-2.5 rounded-full text-sm font-semibold"
                >
                  Book Appointment
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
