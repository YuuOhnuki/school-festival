import ProductDetail from '@/components/layouts/product/ProductDetail';
import { mockProducts, mockProjects } from '@/lib/mock-data';

export default async function Page({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    const product = mockProducts.find((product) => product.id === Number(productId));

    if (!product) return;

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <ProductDetail product={product} projects={mockProjects} products={mockProducts} />
        </div>
    );
}
