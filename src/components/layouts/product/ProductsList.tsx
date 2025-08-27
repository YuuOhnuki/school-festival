'use client';

import { useState } from 'react';
import { Product, Shop } from '@/types';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';

interface ProductsListProps {
    products: Product[];
    shops: Shop[];
}

const ProductsList = ({ products, shops }: ProductsListProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<'name' | 'price' | 'sales'>('sales');
    const [filterShop, setFilterShop] = useState<number | null>(null);

    // Filter and sort products
    const filteredProducts = products
        .filter(
            (product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filterShop === null || product.shopId === filterShop),
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'price':
                    return a.price - b.price;
                case 'sales':
                    return b.sales - a.sales;
                default:
                    return 0;
            }
        });

    return (
        <div>
            <FilterBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
                filterShop={filterShop}
                setFilterShop={setFilterShop}
                shops={shops}
            />

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="list">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            ) : (
                <div className="flex items-center justify-center p-8 text-neutral-500 dark:text-neutral-400">
                    <p>該当する商品が見つかりませんでした。</p>
                </div>
            )}
        </div>
    );
};

export default ProductsList;
