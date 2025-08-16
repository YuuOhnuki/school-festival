import { AppleCardsCarouselDemo } from '@/components/layouts/CardsCarousel';
import { TimelineDemo } from '@/components/layouts/TimeLine';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { getData } from '@/lib/fetch';

export default async function Home() {
    const products = await getData('api/products');
    return (
        <div>
            <HeroParallax products={products} />
            <TimelineDemo />
            <AppleCardsCarouselDemo />
        </div>
    );
}
