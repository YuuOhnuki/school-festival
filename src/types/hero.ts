import { MotionValue } from 'motion';
import { Product } from './types';

export interface HeroParallaxProps {
    products: Product[];
}

export interface ProductCardProps {
    product: Product;
    translate: MotionValue<number>;
}
