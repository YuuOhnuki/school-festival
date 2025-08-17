'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '@/types/types';
import Image from 'next/image';

interface ProjectTabsProps {
    projects: Project[];
    onProjectSelect: (project: Project) => void;
}

const ProjectTabs = ({ projects, onProjectSelect }: ProjectTabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
                プロジェクト紹介
            </h2>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {projects.map((project, index) => (
                    <button
                        key={project.id}
                        onClick={() => setActiveTab(index)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            activeTab === index
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600'
                        }`}
                    >
                        3{project.className}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <Image
                                width="600"
                                height="600"
                                src={projects[activeTab].thumbnail || ''}
                                alt={projects[activeTab].name}
                                className="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                                {projects[activeTab].name}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                {projects[activeTab].description}
                            </p>
                            <button
                                onClick={() => onProjectSelect(projects[activeTab])}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                            >
                                詳細を見る
                            </button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectTabs;
