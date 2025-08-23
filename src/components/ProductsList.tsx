'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Product, Project } from '@/types/types';
import Image from 'next/image';

interface ProductsListProps {
    products: Product[];
    projects: Project[];
}

const ProductsList = ({ products, projects }: ProductsListProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'name' | 'price' | 'sales'>('sales');
    const [filterProject, setFilterProject] = useState<number | null>(null);

    // Filter and sort products
    const filteredProducts = products
        .filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filterProject === null || product.projectId === filterProject),
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'price':
                    return a.price - b.price;
                case 'sales':
                    return b.sales - a.sales;
                default:
                    return 0;
            }
        });

    return (
        <div>
            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-4 justify-center">
                <input
                    type="text"
                    placeholder="商品名で検索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                />

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'sales')}
                    className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                >
                    <option value="sales">売上順</option>
                    <option value="name">名前順</option>
                    <option value="price">価格順</option>
                </select>

                <select
                    value={filterProject || ''}
                    onChange={(e) => setFilterProject(e.target.value ? parseInt(e.target.value) : null)}
                    className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                >
                    <option value="">全てのプロジェクト</option>
                    {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                            3{project.className}
                        </option>
                    ))}
                </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
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
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">
                                {product.description}
                            </p>
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

export default ProductsList;
