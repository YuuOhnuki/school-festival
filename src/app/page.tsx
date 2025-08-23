import HeroParallax from '@/components/hero/HeroParallax';
import ProjectTabs from '@/components/layouts/project/ProjectTabs';
import TopProductsCarousel from '@/components/TopProductsCarousel';
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
