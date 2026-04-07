import { Card } from '@/components/ui/card';
import { Camera, Users, Sparkles, Megaphone } from 'lucide-react';

const categories = [
  {
    title: 'Technicians',
    description: 'Camera, Sound, Editing & More',
    icon: Camera,
    link: '#technicians',
  },
  {
    title: 'Artists',
    description: 'Actors, Dancers & Creative Artists',
    icon: Users,
    link: '#artists',
  },
  {
    title: 'Newcomers',
    description: 'Fresh Talent & Rising Stars',
    icon: Sparkles,
    link: '#newcomers',
  },
  {
    title: 'Advertisements',
    description: 'Casting Calls & Opportunities',
    icon: Megaphone,
    link: '#advertisements',
  },
];

export const ExploreCategories = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gradient">
            Explore Categories
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Find exactly what you need for your production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <a
                key={category.title}
                href={category.link}
                className="block animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Card className="p-6 md:p-8 text-center card-shadow hover:scale-105 transition-all duration-300 bg-card border-border group cursor-pointer">
                  <div className="mb-3 md:mb-4 inline-block p-3 md:p-4 rounded-full gradient-spotlight group-hover:spotlight-glow transition-all">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{category.description}</p>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
