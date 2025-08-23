import { ArrowBigDownDash } from 'lucide-react';
import { motion } from 'motion/react';

const ScrollDownIndicator = () => {
    return (
        <motion.div
            className="absolute top-180 md:top-200 xl:top-280 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center space-y-2 z-10"
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: [0, 10, 0],
                opacity: [1, 0.5, 1],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            <ArrowBigDownDash size={64} />
            <span className="text-xl font-bold">Scroll</span>
        </motion.div>
    );
};

export default ScrollDownIndicator;
