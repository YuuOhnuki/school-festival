import ProjectDetail from '@/components/layouts/shop/ShopDetail';
import { getData } from '@/lib/fetch';
import { Shop } from '@/types';

export default async function Page({ params }: { params: Promise<{ shopId: string }> }) {
    const { shopId } = await params;
    const shops = await getData('api/projects');
    const products = await getData('api/products');
    const shop = shops.find((shop: Shop) => shop.id === Number(shopId));

    if (!shop) return;

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <ProjectDetail shop={shop} products={products} />
        </div>
    );
}
