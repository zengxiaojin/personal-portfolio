import { profile } from "../data/profile";

export default function About() {
    return (
        <section className="section" id="about">
            <h2>About</h2>

            <p className="sectionLead">{profile.about}</p>

            <div className="aboutGrid">
                {profile.aboutCards.map((card) => (
                    <article className="aboutCard" key={card.title}>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}