import { Project, Product } from '@/types/types';
import Image from 'next/image';

import { BackButton } from '@/components/BackButton';
import ProductCard from '../product/ProductCard';

interface ProjectDetailProps {
    project: Project;
    products: Product[];
}

const ProjectDetail = ({ project, products }: ProjectDetailProps) => {
    const projectProducts = products.filter((product) => product.projectId === project.id);

    return (
        <div>
            <BackButton />

            <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <Image
                        width="600"
                        height="600"
                        src={project.thumbnail || ''}
                        alt={project.name}
                        className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
                        {project.name}
                    </h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">{project.description}</p>
                    <div className="space-y-2">
                        <p>
                            <span className="font-semibold">クラス:</span> {project.className}
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-neutral-800 dark:text-neutral-200">
                このお店の商品
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
