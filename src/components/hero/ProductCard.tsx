import { motion } from 'motion/react';
import Image from 'next/image';
import { ProductCardProps } from '@/types/hero';

const ProductCard = ({ product, translate }: ProductCardProps) => {
    return (
        <motion.div
            style={{ x: translate }}
            whileHover={{ y: -15 }}
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

export default ProductCard;
