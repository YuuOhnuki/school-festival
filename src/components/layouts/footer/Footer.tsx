import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">厚木高校戸陵祭2025</h3>
                        <p className="text-neutral-400">文化祭の説明</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">リンク</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                                        ホーム
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/shops" className="text-neutral-400 hover:text-white transition-colors">
                                        お店一覧
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        商品一覧
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/timetable"
                                        className="text-neutral-400 hover:text-white transition-colors"
                                    >
                                        タイムテーブル
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-700 my-4 py-2 text-center text-neutral-400">
                    <nav className="grid grid-flow-col gap-2 py-2">
                        <div>
                            <Link href="/privacypolicy" className="hover:text-white transition-colors underline">
                                プライバシーポリシー
                            </Link>
                        </div>
                        <div>
                            <Link href="/sitepolicy" className="hover:text-white transition-colors underline">
                                サイトポリシー
                            </Link>
                        </div>
                    </nav>
                    <p className="text-left py-2">&copy; {new Date().getFullYear()} Ohnuki Yuu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
