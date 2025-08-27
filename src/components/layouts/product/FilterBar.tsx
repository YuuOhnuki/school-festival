'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shop } from '@/types';
import React from 'react';

interface FilterBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    sortBy: 'name' | 'price' | 'sales';
    setSortBy: (sort: 'name' | 'price' | 'sales') => void;
    filterShop: number | null;
    setFilterShop: (id: number | null) => void;
    shops: Shop[];
}

const FilterBar = ({
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    filterShop,
    setFilterShop,
    shops,
}: FilterBarProps) => {
    return (
        <div className="mb-4 flex flex-col xl:flex-row gap-2 justify-center" role="search">
            <Input
                type="text"
                placeholder="商品名で検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
                aria-label="商品名を検索"
            />
            <div className="flex gap-2">
                <Select value={sortBy} onValueChange={(value) => setSortBy(value as 'name' | 'price' | 'sales')}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="並び替え" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="sales">売上順</SelectItem>
                        <SelectItem value="name">名前順</SelectItem>
                        <SelectItem value="price">価格順</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    value={filterShop !== null ? String(filterShop) : 'all'}
                    onValueChange={(value) => setFilterShop(value === 'all' ? null : parseInt(value, 10))}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="プロジェクトで絞り込み" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">全て</SelectItem>
                        {shops &&
                            shops.map((shop) => (
                                <SelectItem key={shop.id} value={String(shop.id)}>
                                    {shop.className}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default FilterBar;
