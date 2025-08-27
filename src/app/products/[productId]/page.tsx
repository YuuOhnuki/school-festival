import ProductDetail from '@/components/layouts/product/ProductDetail';
import { getData } from '@/lib/fetch';
import { Product } from '@/types';

export default async function Page({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    const products = await getData('api/products');
    const shops = await getData('api/projects');
    const product = products.find((product: Product) => product.id === Number(productId));

    if (!product) return;

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <ProductDetail product={product} shops={shops} products={products} />
        </div>
    );
}
