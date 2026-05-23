import { skillCategories } from "../data/skills";

export default function TechStack() {
    return (
        <section className="section" id="tech-stack">
            <h2>Tech Stack</h2>

            <p className="sectionLead">
                フロントエンド、バックエンド、データベース、開発ツールを中心に学習しています。
                現在は、実際のWebアプリケーション制作を通して基礎力を固めています。
            </p>

            <div className="skillCategoryGrid">
                {skillCategories.map((group) => (
                    <div className="skillCategoryCard" key={group.category}>
                        <h3>{group.category}</h3>

                        <div className="skillList">
                            {group.items.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}