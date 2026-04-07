import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Crown, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    duration: '3 months trial',
    icon: Star,
    features: [
      'Edit availability',
      '1 profile photo',
      '1 YouTube link',
      'Show/hide contact info',
      'Basic search visibility',
    ],
    color: 'border-muted',
  },
  {
    name: 'Premium',
    price: '₹999',
    duration: 'per 6 months',
    icon: Crown,
    features: [
      'Everything in Basic',
      'Multiple media uploads',
      'Post advertisements',
      'Priority in search results',
      'Advanced analytics',
      'Featured badge',
    ],
    color: 'border-primary spotlight-glow',
    popular: true,
  },
  {
    name: 'Featured',
    price: '₹1,999',
    duration: 'per year',
    icon: Crown,
    features: [
      'Everything in Premium',
      'Top placement in listings',
      'Highlighted profile',
      'Featured badge',
      'Detailed analytics dashboard',
      'Priority customer support',
    ],
    color: 'border-accent',
  },
];

export const MembershipSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gradient">
            Membership Plans
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Choose the plan that fits your professional needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <Card
                key={plan.name}
                className={`relative p-4 md:p-8 ${plan.color} bg-card hover:scale-105 transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 md:mb-6">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{plan.duration}</p>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-sm md:text-base ${plan.popular ? 'spotlight-glow' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
