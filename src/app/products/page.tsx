import ProductsList from '@/components/ProductsList';
import { mockProducts, mockProjects } from '@/lib/mock-data';

const page = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-2 text-neutral-800 dark:text-neutral-200">
                商品一覧
            </h1>
            <ProductsList products={mockProducts} projects={mockProjects} />
        </div>
    );
};

export default page;
