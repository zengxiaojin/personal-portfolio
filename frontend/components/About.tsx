import { profile } from "../data/profile";

export default function About() {
    return (
        <section className="section" id="about">
            <h2>About</h2>

            <p>{profile.about}</p>
        </section>
    );
}