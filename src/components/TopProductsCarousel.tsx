'use client';

import { motion } from 'motion/react';
import { Product } from '@/types/types';
import Image from 'next/image';

interface TopProductsCarouselProps {
    products: Product[];
    onProductSelect?: (product: Product) => void;
}

const TopProductsCarousel = ({ products, onProductSelect }: TopProductsCarouselProps) => {
    // Sort products by sales in descending order and take top 6
    const topProducts = [...products].sort((a, b) => b.sales - a.sales).slice(0, 6);

    const handleProductClick = (product: Product) => {
        if (onProductSelect) {
            onProductSelect(product);
        }
    };

    return (
        <div className="w-full py-20 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-200">
                    人気商品ランキング
                </h2>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">
                    売上上位の人気商品をご紹介します
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                                onProductSelect ? 'cursor-pointer hover:scale-105 transition-transform' : ''
                            }`}
                            onClick={() => handleProductClick(product)}
                        >
                            <div className="relative">
                                <Image
                                    width="600"
                                    height="600"
                                    src={product.thumbnail || ''}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    #{index + 1}
                                </div>
                                {product.isSoldOut && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">売り切れ</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                                    {product.name}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-blue-600">¥{product.price}</span>
                                    <span className="text-sm text-neutral-500">売上: {product.sales}個</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProductsCarousel;
