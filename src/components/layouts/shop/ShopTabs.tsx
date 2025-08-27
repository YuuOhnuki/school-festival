'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shop } from '@/types';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ShopTabsProps {
    shops: Shop[];
}

const ShopTabs = ({ shops }: ShopTabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
                お店紹介
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {shops.map((shop, index) => (
                    <button
                        key={shop.id}
                        onClick={() => setActiveTab(index)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                            activeTab === index
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600'
                        }`}
                    >
                        3{shop.className}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <Image
                                width="600"
                                height="600"
                                src={shops[activeTab].thumbnail || ''}
                                alt={shops[activeTab].name}
                                className="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                                {shops[activeTab].name}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                {shops[activeTab].description}
                            </p>
                            <Link href={`/shops/${shops[activeTab].id}`}>
                                <Button variant="default" className="p-6 font-medium w-full cursor-pointer">
                                    詳細を見る
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ShopTabs;
