'use client';

import { motion } from 'motion/react';
import { Project } from '@/types/types';

interface ProjectsListProps {
    projects: Project[];
    onProjectSelect: (project: Project) => void;
}

const ProjectsList = ({ projects, onProjectSelect }: ProjectsListProps) => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
                プロジェクト一覧
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                        onClick={() => onProjectSelect(project)}
                    >
                        <div className="relative">
                            <img
                                src={project.thumbnail || ''}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {project.className}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                                {project.name}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-neutral-500">年度: {project.academicYear}</span>
                                <span className="text-blue-600 font-medium">詳細を見る →</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
