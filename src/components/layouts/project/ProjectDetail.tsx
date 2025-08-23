'use client';

import { motion } from 'motion/react';
import { Project, Product } from '@/types/types';
import Image from 'next/image';

interface ProjectDetailProps {
    project: Project;
    products: Product[];
}

const ProjectDetail = ({ project, products }: ProjectDetailProps) => {
    // Get products for this project
    const projectProducts = products.filter((product) => product.projectId === project.id);

    return (
        <div>
            <button className="mb-8 flex items-center text-blue-600 hover:text-blue-700 font-medium">← 戻る</button>

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
                このプロジェクトの商品
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                    >
                        <div className="relative">
                            <Image
                                width="600"
                                height="600"
                                src={product.thumbnail || ''}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            {product.isSoldOut && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <span className="text-white font-bold">売り切れ</span>
                                </div>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">
                                {product.name}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-blue-600">¥{product.price}</span>
                                <span className="text-sm text-neutral-500">売上: {product.sales}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
