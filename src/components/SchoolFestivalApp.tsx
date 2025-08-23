'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Product } from '@/types/types';
import HeroParallax from './HeroParallax';
import ProjectTabs from './layouts/project/ProjectTabs';
import TopProductsCarousel from './TopProductsCarousel';
import ProductsList from './layouts/product/ProductsList';
import ProjectsList from './layouts/project/ProjectsList';
import ProjectDetail from './layouts/project/ProjectDetail';
import ProductDetail from './layouts/product/ProductDetail';
import FestivalTimetable from './FestivalTimetable';
import { mockProjects, mockProducts } from '@/lib/mock-data';

const SchoolFestivalApp = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Handle project selection
    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
        setCurrentPage('project-detail');
    };

    // Handle product selection
    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);
        setCurrentPage('product-detail');
    };

    // Handle back to products from product detail
    const handleBackToProducts = () => {
        setSelectedProduct(null);
        setCurrentPage('products');
    };

    // Render current page content
    const renderPageContent = () => {
        switch (currentPage) {
            case 'timetable':
                return <FestivalTimetable />;

            case 'product-detail':
                return selectedProduct ? (
                    <ProductDetail
                        product={selectedProduct}
                        projects={mockProjects}
                        products={mockProducts}
                        onBack={handleBackToProducts}
                        onProductSelect={handleProductSelect}
                    />
                ) : null;

            default:
                return <div>ページが見つかりません</div>;
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            {/* Main content with top padding for fixed navigation */}
            <main className="pt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderPageContent()}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default SchoolFestivalApp;
