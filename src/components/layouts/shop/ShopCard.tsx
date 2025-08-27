'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CircleArrowRight } from 'lucide-react';
import { Shop } from '@/types';

interface ShopCardProps {
    shop: Shop;
}

const ShopCard = ({ shop }: ShopCardProps) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <motion.div
            key={shop.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden relative border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500"
        >
            <Link
                href={`/shops/${shop.id}`}
                className="block group transition-all duration-300 transform outline-none focus-visible:outline-4 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-xl"
                aria-label={`${shop.name} の詳細ページへ`}
            >
                <div className="relative overflow-hidden border-4 border-transparent group-focus-visible:border-blue-500 rounded-xl transition-colors duration-300">
                    <Image
                        width={600}
                        height={600}
                        src={imageError || !shop.thumbnail ? '/images/placeholder.png' : shop.thumbnail}
                        alt={`${shop.name} のサムネイル画像`}
                        className="w-full h-60 object-cover group-hover:scale-105 group-focus-visible:scale-105 transition-transform"
                        onError={handleImageError}
                    />
                    {shop.className && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {shop.className}
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">{shop.name}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">
                        {shop.description}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold text-blue-600">3年{shop.className}組</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground underline">
                        <span className="text-xs font-thin">クリックして詳細を見る</span>
                        <div className="transition-transform duration-300 group-hover:translate-x-1">
                            <CircleArrowRight size={20} />
                            <span className="sr-only">詳細ページへ移動する矢印アイコン</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ShopCard;
