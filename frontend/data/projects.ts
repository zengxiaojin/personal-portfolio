export type Project = {
    title: string;
    status: string;
    type: string;
    description: string;
    problem: string;
    solution: string;
    result: string;
    points: string[];
    techs: string[];
    links: {
        github?: string;
        demo?: string;
    };
};

export const projects: Project[] = [
    {
        title: "ポートフォリオサイト",
        status: "開発中",
        type: "Frontend",
        description:
            "日本でのITエンジニア就職を目的として制作している個人ポートフォリオサイトです。自己紹介、技術スタック、プロジェクト経験、連絡先を整理し、採用担当者が短時間でスキルを判断できる構成を目指しています。",
        problem:
            "学習内容や制作物を整理せずに提示すると、採用担当者が短時間でスキルや成長過程を判断しにくいという課題があります。",
        solution:
            "Next.js と TypeScript を使用し、プロフィール、技術スタック、プロジェクト情報をデータとして分離し、再利用しやすいコンポーネント構成で実装しています。",
        result:
            "単なる自己紹介ページではなく、学習内容、設計意識、実装力を整理して伝えられるポートフォリオとして改善を進めています。",
        points: [
            "コンポーネント分割による保守性の向上",
            "data ディレクトリによる情報管理",
            "日本語での技術説明と求職向け構成",
        ],
        techs: ["Next.js", "TypeScript", "React", "CSS"],
        links: {
            github: "",
            demo: "",
        },
    },
    {
        title: "Java Web アプリケーション",
        status: "制作予定",
        type: "Backend",
        description:
            "Java、Spring Boot、MySQL を使用して、ログイン機能、CRUD機能、データベース連携を備えたWebアプリケーションを制作予定です。",
        problem:
            "バックエンド開発では、単に文法を理解するだけでなく、ユーザー管理、データ処理、DB連携を一つのアプリケーションとして組み合わせる力が必要です。",
        solution:
            "Spring Boot を使用して、ユーザー登録、ログイン、CRUD、MySQL 連携を含む基本的なWebアプリケーションを設計・実装する予定です。",
        result:
            "Javaを使ったサーバーサイド開発、データベース設計、基本的なWebアプリケーション構成を実践的に証明することを目指しています。",
        points: [
            "ユーザー登録・ログイン機能",
            "データの作成・表示・更新・削除",
            "MySQL を使用したデータ管理",
        ],
        techs: ["Java", "Spring Boot", "MySQL"],
        links: {
            github: "",
            demo: "",
        },
    },
];