'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';
import { Product } from '@/types/types';
import Image from 'next/image';

interface HeroParallaxProps {
    products: Product[];
}

interface ProductCardProps {
    product: Product;
    translate: MotionValue<number>;
}

// Product Card Component for Hero Parallax
const ProductCard = ({ product, translate }: ProductCardProps) => {
    return (
        <motion.div
            style={{ x: translate }}
            whileHover={{ y: -20 }}
            key={product.name}
            className="group/product h-96 w-[30rem] relative shrink-0"
        >
            <div className="block group-hover/product:shadow-2xl">
                <Image
                    src={product.thumbnail || ''}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
                    alt={product.name}
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold">
                {product.name}
            </h2>
            <p className="absolute bottom-4 right-4 opacity-0 group-hover/product:opacity-100 text-white font-bold">
                ¥{product.price}
            </p>
        </motion.div>
    );
};

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

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <div
            ref={ref}
            className="py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
                <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
                    厚木高校 <br /> 戸陵祭2025
                </h1>
                <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">文化祭</p>
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
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.name} />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
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
        </div>
    );
};

export default HeroParallax;
