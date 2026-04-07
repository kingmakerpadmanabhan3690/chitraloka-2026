import { useState } from 'react';
import { ProfileCard, Profile } from './ProfileCard';
import { Button } from '@/components/ui/button';

interface FeaturedSectionProps {
  id?: string;
  technicians: Profile[];
  artists: Profile[];
}

export const FeaturedSection = ({ id, technicians, artists }: FeaturedSectionProps) => {
  const [activeTab, setActiveTab] = useState<'technicians' | 'artists'>('technicians');
  
  const profiles = activeTab === 'technicians' ? technicians : artists;

  return (
    <section id={id} className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gradient">
            Featured Professionals
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Discover talented professionals ready to bring your vision to life
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          <Button
            variant={activeTab === 'technicians' ? 'default' : 'outline'}
            size="default"
            onClick={() => setActiveTab('technicians')}
            className={`${activeTab === 'technicians' ? 'spotlight-glow' : ''} text-sm md:text-base`}
          >
            Technicians
          </Button>
          <Button
            variant={activeTab === 'artists' ? 'default' : 'outline'}
            size="default"
            onClick={() => setActiveTab('artists')}
            className={`${activeTab === 'artists' ? 'spotlight-glow' : ''} text-sm md:text-base`}
          >
            Artists
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => (
            <div
              key={profile.id}
              className="animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ProfileCard profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
