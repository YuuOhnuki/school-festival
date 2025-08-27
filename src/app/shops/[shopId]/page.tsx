import ProjectDetail from '@/components/layouts/shop/ShopDetail';
import { mockProducts, mockProjects } from '@/lib/mock-data';

export default async function Page({ params }: { params: Promise<{ shopId: string }> }) {
    const { shopId } = await params;
    const shop = mockProjects.find((project) => project.id === Number(shopId));

    if (!shop) return;

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <ProjectDetail shop={shop} products={mockProducts} />
        </div>
    );
}
