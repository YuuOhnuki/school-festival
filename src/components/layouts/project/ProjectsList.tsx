'use client';

import { motion } from 'motion/react';
import { Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsListProps {
    projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl ">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                    <Link href={`/projects/${project.id}`}>
                        <div className="relative">
                            <Image
                                width="600"
                                height="600"
                                src={project.thumbnail || ''}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                3{project.className}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                                {project.name}
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-blue-600 font-medium">クリックして詳細を見る</span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectsList;
