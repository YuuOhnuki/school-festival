'use client';

const SitePolicy = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-20">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
                サイトポリシー
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">プライバシーポリシー</h2>
                    <p className="mb-4">
                        当サイトでは、ユーザーの個人情報を適切に保護し、安全に管理することをお約束いたします。
                        収集した情報は、サービス向上のためのみに使用し、第三者に提供することはございません。
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">利用規約</h2>
                    <p className="mb-4">本サイトをご利用いただく際は、以下の規約をお守りください：</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>商品画像や説明文の無断転載を禁止します</li>
                        <li>他のユーザーに迷惑をかける行為は禁止します</li>
                        <li>虚偽の情報を投稿することは禁止します</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">免責事項</h2>
                    <p className="mb-4">
                        当サイトの情報は正確性を保つよう努めておりますが、完全性や正確性を保証するものではありません。
                        サイト利用により生じた損害について、当校は一切の責任を負いかねます。
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
                    <p className="mb-4">ご質問やご不明な点がございましたら、学校までお気軽にお問い合わせください。</p>
                    <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
                        <p>
                            <strong>神奈川県立厚木高等学校</strong>
                        </p>
                        <p>〒243-0004 神奈川県厚木市水引2-7-1</p>
                        <p>TEL: 046-221-4146</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SitePolicy;
