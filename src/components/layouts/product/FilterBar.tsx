'use client';

import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Project } from '@/types/types';
import React from 'react';

interface FilterBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    sortBy: 'name' | 'price' | 'sales';
    setSortBy: (sort: 'name' | 'price' | 'sales') => void;
    filterProject: number | null;
    setFilterProject: (id: number | null) => void;
    projects: Project[];
}

const FilterBar = ({
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    filterProject,
    setFilterProject,
    projects,
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
                    value={filterProject !== null ? String(filterProject) : 'all'}
                    onValueChange={(value) => setFilterProject(value === 'all' ? null : parseInt(value, 10))}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="プロジェクトで絞り込み" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">全て</SelectItem>
                        {projects.map((project) => (
                            <SelectItem key={project.id} value={String(project.id)}>
                                {project.className}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default FilterBar;
