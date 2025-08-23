'use client';

import { motion } from 'motion/react';
import { Product } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';

interface TopProductsCarouselProps {
    products: Product[];
}

const TopProductsCarousel = ({ products }: TopProductsCarouselProps) => {
    // Sort products by sales in descending order and take top 6
    const topProducts = [...products].sort((a, b) => b.sales - a.sales).slice(0, 6);

    return (
        <div className="w-full py-10 bg-neutral-50 dark:bg-neutral-900">
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
                            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                        >
                            <Link href={`products/${product.id}`}>
                                <div className="relative">
                                    <Image
                                        width="600"
                                        height="600"
                                        src={product.thumbnail || ''}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <Badge variant="default" className="absolute top-4 left-4 px-2 font-bold text-sm">
                                        #{index + 1}
                                    </Badge>
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
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProductsCarousel;
