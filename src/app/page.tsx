import HeroParallax from '@/components/layouts/hero/HeroParallax';
import ProjectTabs from '@/components/layouts/shop/ShopTabs';
import TopProductsCarousel from '@/components/layouts/product/TopProductsCarousel';
import { mockProducts, mockProjects } from '@/lib/mock-data';

export default function Page() {
    return (
        <div>
            <HeroParallax products={mockProducts} />
            <ProjectTabs projects={mockProjects} />
            <TopProductsCarousel products={mockProducts} />
        </div>
    );
}
