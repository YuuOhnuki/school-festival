import ProjectDetail from '@/components/layouts/project/ProjectDetail';
import { mockProducts, mockProjects } from '@/lib/mock-data';

export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {
    const { projectId } = await params;
    const project = mockProjects.find((project) => project.id === Number(projectId));

    if (!project) return;

    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <ProjectDetail project={project} products={mockProducts} />
        </div>
    );
}
