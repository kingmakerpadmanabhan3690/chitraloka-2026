import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

interface Ad {
  id: string;
  title: string;
  type: 'casting' | 'equipment' | 'workshop' | 'job';
  location: string;
  date: string;
  image: string;
}

const typeConfig = {
  casting: { label: 'Casting Call', color: 'bg-primary' },
  equipment: { label: 'Equipment Rental', color: 'bg-secondary' },
  workshop: { label: 'Workshop', color: 'bg-accent' },
  job: { label: 'Job Opening', color: 'bg-available' },
};

const advertisements: Ad[] = [
  {
    id: '1',
    title: 'Lead Role - Feature Film',
    type: 'casting',
    location: 'Mumbai',
    date: '2025-11-15',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'ARRI Alexa Mini Available',
    type: 'equipment',
    location: 'Bangalore',
    date: '2025-11-01',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Cinematography Masterclass',
    type: 'workshop',
    location: 'Delhi',
    date: '2025-12-05',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop',
  },
];

export const AdvertisementsSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gradient">
            Opportunities
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Casting calls, equipment rentals, workshops, and job openings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advertisements.map((ad, idx) => (
            <Card
              key={ad.id}
              className="overflow-hidden card-shadow hover:scale-105 transition-all duration-300 bg-card border-border animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${typeConfig[ad.type].color} text-background border-0`}>
                  {typeConfig[ad.type].label}
                </Badge>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-foreground">{ad.title}</h3>
                
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{ad.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{new Date(ad.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <Button className="w-full text-sm md:text-base" variant="outline">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
