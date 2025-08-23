'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import ProductCard from './ProductCard';
import { HeroParallaxProps } from '@/types/hero';
import ScrollDownIndicator from './ScrollDownIndicator';

const HeroParallax = ({ products }: HeroParallaxProps) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 800]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -800]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 300]), springConfig);

    return (
        <div
            ref={ref}
            className="py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 text-center">
                <h1 className="text-4xl md:text-7xl font-bold dark:text-white">厚木高校戸陵祭2025</h1>
                <p className="text-2xl md:text-4xl mt-4 dark:text-neutral-200">文化祭</p>
            </div>
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.name} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-10 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.name} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.name} />
                    ))}
                </motion.div>
            </motion.div>

            {/* fixedに変更し、画面の最下部に固定表示する */}
            <ScrollDownIndicator />
        </div>
    );
};

export default HeroParallax;
