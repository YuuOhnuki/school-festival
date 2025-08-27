import ProductsList from '@/components/layouts/product/ProductsList';
import { getData } from '@/lib/fetch';

export default async function Page() {
    const shops = await getData('api/projects');
    const products = await getData('api/products');
    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-200">
                商品一覧
            </h1>
            <ProductsList products={products} shops={shops} />
        </div>
    );
}
