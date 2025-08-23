export default function Page() {
    return (
        <div className="w-full max-w-7xl mx-auto py-5 px-4">
            <div className="mb-4">
                <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                    サイトポリシー
                </h1>
                <p className="text-sm md:text-base font-extralight py-2">
                    本ウェブサイト（以下，「本サイト」といいます。）は、本サイトの運営者（以下，「運営者」といいます。）が管理・運営しています。本サイトのご利用にあたっては、以下のポリシーをご確認ください。
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <h2 className="text-2xl font-medium text-primary border-b">著作権について</h2>
                    <p className="text-sm md:text-base font-extralight py-2 pl-2 leading-5">
                        本サイトに掲載されているコンテンツ（文章、画像、動画、デザインなど）に関する著作権は、特段の記載がない限り、すべて本サイトの運営者に帰属します。これらのコンテンツを無断で使用（複製、改変、転載、配布など）することは、法律で認められている場合を除き、禁止します。
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-medium text-primary border-b">免責事項</h2>
                    <p className="text-sm md:text-base font-extralight py-2 pl-2 leading-5">
                        本サイトに掲載されている情報の正確性については万全を期していますが、運営者は利用者が本サイトの情報を用いて行う一切の行為について、いかなる責任も負いません。また、本サイトからリンクやバナーによって他のウェブサイトに移動した場合、移動先のウェブサイトの内容や運営について、運営者は一切の責任を負いません。
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-medium text-primary border-b">リンクについて</h2>
                    <p className="text-sm md:text-base font-extralight py-2 pl-2 leading-5">
                        本サイトへのリンクは原則として自由ですが、以下の点にご注意ください。
                    </p>
                    <ul className="list-disc text-sm md:text-base font-extralight py-2 pl-6 leading-5">
                        <li>リンクを設定する際は、本サイトへのリンクであることを明記してください。</li>
                        <li>公序良俗に反するサイトからのリンクはご遠慮ください。</li>
                        <li>
                            本サイトのコンテンツが、リンク元のウェブサイトの一部であるかのように表示されるフレームリンクはご遠慮ください。
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-medium text-primary border-b">アクセシビリティについて</h2>
                    <p className="text-sm md:text-base font-extralight py-2 pl-2 leading-5">
                        本サイトは、誰もが利用しやすいよう、ウェブアクセシビリティに配慮したサイト設計を目指しています。ウェブアクセシビリティに関するご意見や改善点がありましたら、お気軽にお問い合わせください。
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-medium text-primary border-b">Cookie（クッキー）ポリシー</h2>
                    <p className="text-sm md:text-base font-extralight py-2 pl-2 leading-5">
                        本サイトでは、利用者の利便性向上、およびアクセス状況の分析のためにCookieを使用しています。
                    </p>
                    <ul className="list-disc text-sm md:text-base font-extralight py-2 pl-6 leading-6">
                        <li>
                            <strong className="font-semibold">Cookieとは</strong>
                            <br />
                            Cookieとは、ウェブサイトを閲覧した際に、ブラウザを通じてお使いの端末に保存される小さなテキストファイルです。これには個人を特定する情報は含まれません。
                        </li>
                        <li>
                            <strong className="font-semibold">利用目的</strong>
                            <br />
                            本サイトでは、Google
                            Analyticsなどのアクセス解析ツールを使用し、サイトの利用状況（どのページがよく見られているか、利用者の地域など）を把握するためにCookieを利用しています。これにより、コンテンツの改善や、より良いウェブサイト体験の提供に役立てています。
                        </li>
                        <li>
                            <strong className="font-semibold">Cookieの管理</strong>
                            <br />
                            利用者はブラウザの設定を変更することで、Cookieの受け入れを拒否したり、削除したりすることができます。ただし、Cookieを無効にした場合、一部のサービスが正しく機能しない可能性がありますので、あらかじめご了承ください。
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-medium text-primary border-b">お問い合わせ窓口</h2>
                    <p className="text-sm md:text-base font-extralight py-2 pl-2 leading-5">
                        本サイトポリシーに関するご質問やご意見は、下記の窓口までご連絡ください。
                        <br />
                        Eメールアドレス: 013600023062z6gc@gl.pen-kanagawa.ed.jp
                    </p>
                </div>
            </div>
        </div>
    );
}
