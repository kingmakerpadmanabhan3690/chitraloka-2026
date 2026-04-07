import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface Newcomer {
  id: string;
  name: string;
  talent: string;
  image: string;
}

const newcomers: Newcomer[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    talent: 'Actress',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop',
  },
  {
    id: '2',
    name: 'Arjun Mehta',
    talent: 'Cinematographer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    id: '3',
    name: 'Ananya Desai',
    talent: 'Choreographer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
];

export const NewcomersSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-12 md:py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
              Rising Stars
            </h2>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Fresh talent ready to make their mark in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newcomers.map((newcomer, idx) => (
            <Card
              key={newcomer.id}
              className="overflow-hidden card-shadow hover:scale-105 transition-all duration-300 bg-card border-border animate-slide-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={newcomer.image}
                  alt={newcomer.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground border-0">
                  New Talent
                </Badge>
              </div>
              <div className="p-4 md:p-6 text-center space-y-2 md:space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{newcomer.name}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{newcomer.talent}</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base">
                  View Profile
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
