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
            github: "https://github.com/zengxiaojin/personal-portfolio",
            demo: "https://personal-portfolio-five-fawn-11.vercel.app",
        },
    },

    {
        title: "タスク管理アプリ",
        status: "制作予定",
        type: "Backend",
        description:
            "Java Spring Boot と MySQL を使用して開発予定のタスク管理アプリです。タスクの作成・編集・削除・一覧表示、ステータス管理、期限日の設定など、基本的なCRUD機能を実装する予定です。",
        problem:
            "日々のタスクを整理せずに管理すると、作業の優先度や進捗状況が分かりにくくなり、対応漏れや遅延が発生しやすくなります。",
        solution:
            "Spring Boot を使用してREST APIを設計し、MySQLでタスク情報を管理します。タスクのCRUD機能、ステータス管理、期限日管理を実装し、基本的な業務アプリケーションの構成を意識して開発します。",
        result:
            "Javaによるサーバーサイド開発、MySQLを使ったデータ永続化、REST API設計、CRUD処理の実装力を証明するプロジェクトとして制作を進める予定です。",
        points: [
            "タスクの作成・表示・更新・削除",
            "ステータス管理",
            "期限日の設定",
            "MySQL を使用したデータ永続化",
            "REST API によるデータ操作",
        ],
        techs: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "REST API"],
        links: {
            github: "",
            demo: "",
        },
    },

];