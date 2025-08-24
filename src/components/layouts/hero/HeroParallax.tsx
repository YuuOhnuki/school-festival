'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useMediaQuery } from 'react-responsive';
import ProductCard from './ProductCard';
import { HeroParallaxProps } from '@/types/hero';
import ScrollDownIndicator from './ScrollDownIndicator';

// React Hookのルールに従い、カスタムHookとして定義
const useParallaxAnimation = (scrollYProgress: import('motion').MotionValue<number>, isReducedMotion: boolean) => {
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    // --- ここが修正箇所です ---
    // フック自体は常に呼び出す
    const animatedTranslateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 800]), springConfig);
    const animatedTranslateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -800]), springConfig);
    const animatedRotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const animatedOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const animatedRotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const animatedTranslateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 300]), springConfig);

    // 条件に応じて返す値を決定
    const translateX = isReducedMotion ? 0 : animatedTranslateX;
    const translateXReverse = isReducedMotion ? 0 : animatedTranslateXReverse;
    const rotateX = isReducedMotion ? 0 : animatedRotateX;
    const opacity = isReducedMotion ? 1 : animatedOpacity;
    const rotateZ = isReducedMotion ? 0 : animatedRotateZ;
    const translateY = isReducedMotion ? 0 : animatedTranslateY;

    return {
        translateX,
        translateXReverse,
        rotateX,
        opacity,
        rotateZ,
        translateY,
    };
};

const HeroParallax = ({ products }: HeroParallaxProps) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);

    const isReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    // カスタムHookを呼び出して、アニメーションの値を取得
    const { translateX, translateXReverse, rotateX, opacity, rotateZ, translateY } = useParallaxAnimation(
        scrollYProgress,
        isReducedMotion,
    );

    return (
        <div
            ref={ref}
            className="py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
            role="region"
            aria-label="スクロールに応じて動くプロダクトギャラリー"
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
            >
                <ul className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
                    {firstRow.map((product) => (
                        <li key={product.name}>
                            <ProductCard
                                product={product}
                                translate={translateX as import('framer-motion').MotionValue<number>}
                            />
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-row mb-10 space-x-20">
                    {secondRow.map((product) => (
                        <li key={product.name}>
                            <ProductCard
                                product={product}
                                translate={translateXReverse as import('framer-motion').MotionValue<number>}
                            />
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <li key={product.name}>
                            <ProductCard
                                product={product}
                                translate={translateX as import('framer-motion').MotionValue<number>}
                            />
                        </li>
                    ))}
                </ul>
            </motion.div>

            <ScrollDownIndicator />
        </div>
    );
};

export default HeroParallax;
