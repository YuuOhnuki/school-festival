import HeroParallax from '@/components/layouts/hero/HeroParallax';
import ProjectTabs from '@/components/layouts/shop/ShopTabs';
import TopProductsCarousel from '@/components/layouts/product/TopProductsCarousel';
import { getData } from '@/lib/fetch';

export default async function Page() {
    const shops = await getData('api/projects');
    const products = await getData('api/products');
    return (
        <div>
            <HeroParallax products={products} />
            <ProjectTabs shops={shops} />
            <TopProductsCarousel products={products} />
        </div>
    );
}
