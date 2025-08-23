'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <motion.button
            onClick={handleGoBack}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <ArrowLeft />
            戻る
        </motion.button>
    );
};
