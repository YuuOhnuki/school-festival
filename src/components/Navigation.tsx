'use client';

interface NavigationProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
    const navItems = [
        { id: 'home', label: 'ホーム' },
        { id: 'products', label: '商品一覧' },
        { id: 'projects', label: 'プロジェクト一覧' },
        { id: 'timetable', label: 'タイムテーブル' },
        { id: 'policy', label: 'サイトポリシー' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-neutral-900 dark:text-white">厚木高校戸陵祭</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        currentPage === item.id
                                            ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                                            : 'text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
