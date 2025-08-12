import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Creative Technologist & Student';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl animate-pulse float"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          Hi, I'm <span className="gradient-text">Serish</span>
        </h1>
        
        <div className="h-16 mb-8">
          <p className="font-inter text-2xl md:text-3xl text-muted-foreground">
            {displayText}
            <span className="typing"></span>
          </p>
        </div>

        <p className="font-inter text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          A passionate student exploring the intersection of technology, creativity, and innovation. 
          From Arduino circuits to modern web development, I bring ideas to life through code and design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-gradient-button text-primary-foreground hover:scale-105 transition-transform duration-300 glow-blue font-medium px-8 py-3"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium px-8 py-3"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-inter">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;