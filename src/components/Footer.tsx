'use client';

interface FooterProps {
    setCurrentPage: (page: string) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
    return (
        <footer className="bg-neutral-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">厚木高校文化祭2024</h3>
                        <p className="text-neutral-400">
                            学生たちの創造力と情熱が詰まった素晴らしい文化祭をお楽しみください。
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">リンク</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    ホーム
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setCurrentPage('products')}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    商品一覧
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setCurrentPage('projects')}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    プロジェクト一覧
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setCurrentPage('timetable')}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    タイムテーブル
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setCurrentPage('policy')}
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    サイトポリシー
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
                        <div className="text-neutral-400 space-y-1">
                            <p>神奈川県立厚木高等学校</p>
                            <p>〒243-0004</p>
                            <p>神奈川県厚木市水引2-7-1</p>
                            <p>TEL: 046-221-4146</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
                    <p>&copy; 2024 神奈川県立厚木高等学校. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
