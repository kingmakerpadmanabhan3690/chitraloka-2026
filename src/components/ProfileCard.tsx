import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export type AvailabilityStatus = 'available' | 'limited' | 'unavailable';

export interface Profile {
  id: string;
  name: string;
  department: string;
  place: string;
  image: string;
  availability: AvailabilityStatus;
  rating?: number;
}

interface ProfileCardProps {
  profile: Profile;
}

const availabilityConfig = {
  available: { color: 'bg-available', label: 'Available' },
  limited: { color: 'bg-limited', label: 'Limited' },
  unavailable: { color: 'bg-unavailable', label: 'Not Available' },
};

export const ProfileCard = ({ profile }: ProfileCardProps) => {
  const availability = availabilityConfig[profile.availability];

  return (
    <Card className="group overflow-hidden card-shadow hover:scale-105 transition-all duration-300 border-border bg-card">
      <Link to={`/profile/${profile.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Availability Badge */}
          <div className="absolute top-4 right-4">
            <Badge className={`${availability.color} text-background border-0`}>
              {availability.label}
            </Badge>
          </div>

          {/* Heart Icon */}
          <button className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </Link>

      <div className="p-3 md:p-4 space-y-2">
        <Link to={`/profile/${profile.id}`}>
          <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {profile.name}
          </h3>
        </Link>
        
        <p className="text-xs md:text-sm text-muted-foreground">{profile.department}</p>
        
        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
          <span>{profile.place}</span>
        </div>

        {profile.rating && (
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
            <span className="text-xs md:text-sm font-medium text-foreground">{profile.rating}</span>
          </div>
        )}

        <Button className="w-full mt-2 spotlight-glow text-xs md:text-sm" size="sm">
          Book Now
        </Button>
      </div>
    </Card>
  );
};
