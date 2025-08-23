'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import FestivalTimetable from './FestivalTimetable';

const SchoolFestivalApp = () => {
    const [currentPage, setCurrentPage] = useState('home');

    // Render current page content
    const renderPageContent = () => {
        switch (currentPage) {
            case 'timetable':
                return <FestivalTimetable />;

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
