import ProjectsList from '@/components/layouts/shop/ShopsList';
import { getData } from '@/lib/fetch';
import { mockProjects } from '@/lib/mock-data';

export default async function Page() {
    const shops = await getData('api/shops');
    console.log(shops);

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-200">
                お店一覧
            </h1>
            <ProjectsList shops={mockProjects} />
        </div>
    );
}
