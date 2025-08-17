'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, Product } from '@/types/types';
import Navigation from './Navigation';
import HeroParallax from './HeroParallax';
import ProjectTabs from './ProjectTabs';
import TopProductsCarousel from './TopProductsCarousel';
import ProductsList from './ProductsList';
import ProjectsList from './ProjectsList';
import ProjectDetail from './ProjectDetail';
import ProductDetail from './ProductDetail';
import FestivalTimetable from './FestivalTimetable';
import SitePolicy from './SitePolicy';
import Footer from './Footer';
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

    // Handle back to home from project detail
    const handleBackToHome = () => {
        setSelectedProject(null);
        setSelectedProduct(null);
        setCurrentPage('home');
    };

    // Handle back to products from product detail
    const handleBackToProducts = () => {
        setSelectedProduct(null);
        setCurrentPage('products');
    };

    // Render current page content
    const renderPageContent = () => {
        switch (currentPage) {
            case 'home':
                return (
                    <>
                        <HeroParallax products={mockProducts} />
                        <ProjectTabs projects={mockProjects} onProjectSelect={handleProjectSelect} />
                        <TopProductsCarousel products={mockProducts} onProductSelect={handleProductSelect} />
                    </>
                );

            case 'products':
                return (
                    <ProductsList
                        products={mockProducts}
                        projects={mockProjects}
                        onProductSelect={handleProductSelect}
                    />
                );

            case 'projects':
                return <ProjectsList projects={mockProjects} onProjectSelect={handleProjectSelect} />;

            case 'timetable':
                return <FestivalTimetable />;

            case 'project-detail':
                return selectedProject ? (
                    <ProjectDetail
                        project={selectedProject}
                        products={mockProducts}
                        onBack={handleBackToHome}
                        onProductSelect={handleProductSelect}
                    />
                ) : null;

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

            case 'policy':
                return <SitePolicy />;

            default:
                return <div>ページが見つかりません</div>;
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950">
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

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

            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default SchoolFestivalApp;
