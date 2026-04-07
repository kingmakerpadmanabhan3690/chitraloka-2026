import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import hero5 from '@/assets/hero-5.jpg';
import hero6 from '@/assets/hero-6.jpg';

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gradient">
              CHITRALOKA
            </h1>
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl text-primary">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="font-display italic">The Gateway to Talent</p>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>

          <div className="space-y-2 md:space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground px-2">
              Find Media, Television and Film Industry Professionals
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Connect with skilled technicians and talented artists for your productions.
              Browse availability, book directly, and bring your vision to life.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto w-full px-2">
            <div className="relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 md:w-5 md:h-5" />
              <Input
                placeholder="Search by Name, Department, or Place…"
                className="pl-10 md:pl-12 h-12 md:h-14 bg-card/80 backdrop-blur-sm border-border text-sm md:text-base text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 px-2">
            <Button
              variant="default"
              size="default"
              onClick={() => scrollToSection('technicians')}
              className="spotlight-glow text-sm md:text-base"
            >
              Technicians
            </Button>
            <Button
              variant="default"
              size="default"
              onClick={() => scrollToSection('artists')}
              className="spotlight-glow text-sm md:text-base"
            >
              Artists
            </Button>
            <Button
              variant="outline"
              size="default"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base"
            >
              Login
            </Button>
            <Button
              variant="secondary"
              size="default"
              onClick={() => scrollToSection('newcomers')}
              className="text-sm md:text-base"
            >
              Newcomers
            </Button>
            <Button
              variant="secondary"
              size="default"
              onClick={() => scrollToSection('advertisements')}
              className="text-sm md:text-base"
            >
              Ads
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
