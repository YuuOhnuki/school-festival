'use client';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">厚木高校戸陵祭2025</h3>
                        <p className="text-neutral-400">文化祭の説明</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">リンク</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                                    ホーム
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors">
                                    プロジェクト一覧
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-neutral-400 hover:text-white transition-colors">
                                    商品一覧
                                </Link>
                            </li>
                            <li>
                                <Link href="/timetable" className="text-neutral-400 hover:text-white transition-colors">
                                    タイムテーブル
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
                    <p>&copy; {new Date().getFullYear()} Ohnuki Yuu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
