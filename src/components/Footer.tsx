import { Instagram, Facebook, Youtube, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest text-forest-foreground py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-3">Trinity Nourishment</h3>
            <p className="text-forest-foreground/70 text-sm leading-relaxed">
              Your one-stop solution for weight management, health, and wellness. 
              Sustainable lifestyle transformation through personalized nutrition coaching.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-3">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Transformation", href: "#transformation" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Free Trial", href: "#free-trial" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-forest-foreground/70 hover:text-forest-foreground transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-3">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <a href="mailto:hello@arogyadadrishti.com" className="flex items-center gap-2 text-forest-foreground/70 hover:text-forest-foreground transition-colors">
                <Mail size={15} /> Trinitynourishment@gmail.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-forest-foreground/70 hover:text-forest-foreground transition-colors">
                <Phone size={15} /> +91 98765 43210
              </a>
            </div>

            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-forest-foreground/10 flex items-center justify-center text-forest-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-forest-foreground/10 text-center text-forest-foreground/50 text-xs">
          © {new Date().getFullYear()} Trinity Nourishment. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
