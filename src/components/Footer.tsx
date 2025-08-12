import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-space-dark border-t border-card-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-orbitron text-2xl font-bold gradient-text">
              SERISH
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Creative Technologist & Student passionate about innovation, design, and technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:dexter125555@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                dexter125555@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-orbitron font-semibold text-foreground mb-4">
              Let's Connect
            </h4>
            <p className="text-muted-foreground mb-4">
              Ready to collaborate on exciting projects? I'd love to hear from you.
            </p>
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-card-border">
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span>© 2024 Serish. Built with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>and modern technology.</span>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;