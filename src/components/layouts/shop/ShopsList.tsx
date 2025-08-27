import { Shop } from '@/types';
import ShopCard from './ShopCard';

interface ShopsListProps {
    shops: Shop[];
}

const ShopsList = ({ shops }: ShopsListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shops.map((shop) => (
                <ShopCard key={shop.id} shop={shop} />
            ))}
        </div>
    );
};

export default ShopsList;
