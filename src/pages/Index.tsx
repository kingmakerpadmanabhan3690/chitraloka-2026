import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { NewcomersSection } from '@/components/NewcomersSection';
import { AdvertisementsSection } from '@/components/AdvertisementsSection';
import { MembershipSection } from '@/components/MembershipSection';
import { ExploreCategories } from '@/components/ExploreCategories';
import { Footer } from '@/components/Footer';
import { sampleTechnicians, sampleArtists } from '@/data/sampleProfiles';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSection
        id="featured"
        technicians={sampleTechnicians}
        artists={sampleArtists}
      />
      <NewcomersSection id="newcomers" />
      <AdvertisementsSection id="advertisements" />
      <MembershipSection />
      <ExploreCategories />
      <Footer />
    </div>
  );
};

export default Index;
