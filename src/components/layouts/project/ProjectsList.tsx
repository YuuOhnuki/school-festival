import { Project } from '@/types/types';
import ProjectCard from './ProjectCard';

interface ProjectsListProps {
    projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectsList;
