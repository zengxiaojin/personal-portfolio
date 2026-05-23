import { profile } from "../data/profile";

export default function Hero() {
    return (
        <section className="hero">
            <p className="eyebrow">{profile.role}</p>

            <h1>
                {profile.name}
                <br />
                {profile.title}
            </h1>

            <p className="heroHeadline">{profile.headline}</p>

            <p className="heroText">{profile.description}</p>

            <div className="heroActions">
                <a href="#projects" className="primaryButton">
                    プロジェクトを見る
                </a>

                <a
                    href={profile.github}
                    className="secondaryButton"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHubを見る
                </a>
            </div>

            <ul className="heroStrengths">
                {profile.strengths.map((strength) => (
                    <li key={strength}>{strength}</li>
                ))}
            </ul>
        </section>
    );
}