import { Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 md:space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">CHITRALOKA</h3>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground italic">The Gateway to Talent</p>
          <div className="pt-3 md:pt-4 border-t border-border">
            <p className="text-xs md:text-sm text-muted-foreground px-2">
              © 2025 Chitraloka. Connecting Media, Television and Film Industry Professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
