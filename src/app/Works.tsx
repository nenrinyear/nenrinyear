type Work = {
    title: string;
    date: string;
    description: string;
    techStack: string[];
    link?: {
        name: string;
        url: string;
    }[];
}

const Works = [
    {
        title: "所属大学公式イベントでの発表",
        date: "2024/07",
        description: "情報理工学部で行われている「ランチタイムトーク」というイベントで、JANOG54の参加報告をしました。",
        link: [
            {
                name: "2024年度ランチタイムトーク", url: "http://info.cse.kyoto-su.ac.jp/?page_id=11695"
            },
        ],
    },
    {
        title: "所属サークル新入生制作体験にてチーム制作",
        date: "2024/06",
        description: "所属しているサークルの新入生制作体験にて、新入生同士でチームを組み、Webアプリケーションを制作しました。私はチームリーダーとして、フロントエンドの雛形実装、制作リポジトリの管理、スケジュール管理、認証機能の実装を担当しました。",
        techStack: ["Next.js", "Firebase", "DB"],
        link: [
            {
                name: "shareable-todolist", url: "https://shareable-todo.nenrin.me/"
            }, {
                name: "GitHub", url: "https://github.com/nenrinyear/shareable-todolist"
            }
        ]
    },
    {
        title: "関西の某大学のバス予約システムにおける自動予約バッチ",
        date: "2024/05",
        description: "このプログラムは、毎日23:58に起動し、0時になった瞬間に予約可能なバスをスクレイピングで取得し、あらかじめ指定された時間に近いバスを予約するプログラムです。元々Python+Seleniumでスクレイピングをしていたものを高速化、軽量化するためにRustで書き直しました",
        techStack: ["Rust", "reqwest", "tokio"],
    },
    {
        title: "映像クリエイターに関するサービス",
        date: "2023/07 〜",
        description: "映像製作者に特化したサービスを2023年より少人数開発中です。フロントエンドはNext.jsにバックエンドはVercel、メディアファイル保存にCloudflare R2、認証はNextAuth(Auth.js)で決済管理にStripeを使用しています。",
        techStack: ["Next.js", "NextAuth", "Vercel", "R2", "Stripe"],
    },
    {
        title: "映像イベントのサイト・システム作成",
        date: "2023/04",
        description: "映像イベントのドメイン取得・サイト制作・メールシステム制作・運営システム制作を行いました。フロントエンドはNext.js, 認証はNextAuth(Auth.js)とFirebase Authentication、バックエンドはVercel、CMSにmicroCMS、またメール周りでMySQL・PHP・Postfixを使用しました。",
        techStack: ["Next.js", "NextAuth", "Firebase", "microCMS", "Vercel", "DB", "Postfix"],
        link: [
            {
                name: "cvf-contest.net", url: "https://cvf-contest.net/"
            }, {
                name: "GitHub", url: "https://github.com/nenrinyear/cvf-contest"
            },
        ],
    },
    {
        title: "高校の部活動における合奏記録共有アプリ",
        date: "2022/06",
        description: "高校の吹奏楽部に所属していた際、合奏記録を共有するためのアプリを作成しました。バックエンドは主にプレーンなPHPと、ワードクラウド画像生成でPythonを使用して実装しました。また、LINEBot開発の将来性を見据え、OAuthProviderにLINEを採用しています。",
        techStack: ["PHP", "DB", "Python"],
    },
    {
        title: "高校の部活動における蔵書管理アプリ",
        date: "2022/05",
        description: "高校の吹奏楽部に所属していた際、部室に保管されているCDやDVDなどの蔵書をQRコードで管理するシステムを突貫工事で開発しました。バックエンドは主にPHPで実装しました。",
        techStack: ["PHP", "DB", "JavaScript"],
    },
    {
        title: "複数チーム一括進行型人狼ゲーム進行補助アプリ",
        date: "2019/03",
        description: "中学の部活動で、上級生の卒業送別会があり、そこで企画立案から実装までを行いました。複数ゲームを同時進行する人狼ゲームのゲームマスター(勝敗判定、占い判定、投票管理など)を実装したアプリです。フロントエンドはjQuery、バックエンドはFirebase RealtimeDatabaseで実装しました。",
        techStack: ["jQuery", "Firebase"],
    },
    {
        title: "災害用伝言板サイト作成",
        date: "2017/11",
        description: "Webアプリ入門として、位置情報取得機能と、mapbox(当時はYOLP)によるマップ表示機能を追加した災害用伝言板を作成しました。",
        techStack: ["PHP", "DB", "JavaScript", "mapbox"],
    }
] as Work[];


export default function WorksList() {
    return (
        <div>
            <h2
                id="works"
                className="
                    text-3xl
                    font-bold
                    mb-4
                    pt-[64px]
                    pb-2
                    border-b-2
                    border-gray-300
                "
            >
                <a
                    href="#works"
                    className="
                        text-3xl
                        font-bold
                        mt-4
                        mb-4
                        pb-2
                    "
                >
                    Works
                </a>
            </h2>
            <div className="overflow-x-auto">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {Works.map((work, i) => (
                        <li key={work.title}>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <time className="font-mono italic">{work.date}</time>
                                <div className="text-lg font-black">{work.title}</div>
                                {work.description}
                                <div className="flex flex-row flex-wrap">
                                    {work.techStack? work.techStack.map((tech, i) => (
                                        <span key={i} className="text-sm bg-gray-200 dark:bg-gray-800 rounded-full px-2 py-1 m-1">{tech}</span>
                                    )) : null}
                                </div>
                                {work.link && Array.isArray(work.link) && (
                                    <div className="flex flex-row flex-wrap">
                                        {work.link.map((link, i) => (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline m-1">{link.name}</a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}