'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden relative"
        >
            <Link
                href={`/projects/${project.id}`}
                className="block group transition-all duration-300 transform outline-none focus-visible:outline-4 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-xl"
                aria-label={`${project.name} の詳細ページへ`}
            >
                <div className="relative overflow-hidden border-4 border-transparent group-focus-visible:border-blue-500 rounded-xl transition-colors duration-300">
                    <Image
                        width={600}
                        height={600}
                        src={project.thumbnail || ''}
                        alt={`${project.name} のサムネイル画像`}
                        className="w-full h-60 object-cover group-hover:scale-105 group-focus-visible:scale-105 transition-transform"
                    />
                    {project.className && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {project.className}
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 text-neutral-800 dark:text-neutral-200">{project.name}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-bold text-blue-600">3年{project.className}組</span>
                    </div>
                    <span className="text-xs font-thin text-muted-foreground group-hover:underline group-focus-visible:underline">
                        クリックして詳細を見る
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
