'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types/types';
import ProductCard from './ProductCard';

interface TopProductsCarouselProps {
    products: Product[];
}

const TopProductsCarousel = ({ products }: TopProductsCarouselProps) => {
    const topProducts = [...products].sort((a, b) => b.sales - a.sales).slice(0, 6); // TOP6

    return (
        <div className="w-full py-10 bg-neutral-50 dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-neutral-800 dark:text-neutral-200">
                    人気商品ランキング
                </h2>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">
                    売上上位の人気商品をご紹介します
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="hover:scale-105 transition-transform"
                        >
                            <ProductCard product={product} rank={index + 1} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProductsCarousel;
