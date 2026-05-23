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

            <p className="heroText">{profile.description}</p>

            <div className="heroActions">
                <a href="#projects" className="primaryButton">
                    プロジェクトを見る
                </a>

                <a href="#contact" className="secondaryButton">
                    お問い合わせ
                </a>
            </div>
        </section>
    );
}