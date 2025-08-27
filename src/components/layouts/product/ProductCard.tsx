'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { CircleArrowRight } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    rank?: number;
}

const ProductCard = ({ product, rank }: ProductCardProps) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden relative border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500"
        >
            <Link
                href={`/products/${product.id}`}
                className="block group transition-all duration-300 transform outline-none focus-visible:outline-4 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-xl"
                aria-label={`${product.name} の詳細ページへ`}
            >
                <div className="relative overflow-hidden border-4 border-transparent group-focus-visible:border-blue-500 rounded-xl transition-colors duration-300">
                    <Image
                        width={600}
                        height={600}
                        src={imageError || !product.thumbnail ? '/images/placeholder.png' : product.thumbnail}
                        alt={`${product.name} のサムネイル画像`}
                        className="w-full h-48 object-cover group-hover:scale-105 group-focus-visible:scale-105 transition-transform"
                        onError={handleImageError}
                    />
                    {rank !== undefined && (
                        <Badge variant="default" className="absolute top-4 left-4 px-2 font-bold text-sm">
                            #{rank}
                        </Badge>
                    )}
                    {product.isSoldOut && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white font-bold" aria-hidden="true">
                                売り切れ
                            </span>
                            <span className="sr-only">この商品は現在売り切れです。</span>
                        </div>
                    )}
                </div>
                <div className="p-4 flex justify-between items-center">
                    <div className="flex-1 min-w-0 pr-4">
                        <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">
                            {product.name}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">
                            {product.description}
                        </p>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xl font-bold text-blue-600">¥{product.price}</span>
                            <span className="text-sm text-neutral-500">売上: {product.sales}</span>
                        </div>
                        <div className="flex justify-between items-center text-muted-foreground underline">
                            <span className="text-xs font-thin">クリックして詳細を見る</span>
                            <div className="transition-transform duration-300 group-hover:translate-x-1">
                                <CircleArrowRight size={20} />
                                <span className="sr-only">詳細ページへ移動する矢印アイコン</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
