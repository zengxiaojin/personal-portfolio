import { profile } from "../data/profile";

export default function Contact() {
    return (
        <section className="section" id="contact">
            <h2>Contact</h2>

            <div className="contactList">
                <p>
                    Email:{" "}
                    <a href={`mailto:${profile.email}`}>
                        {profile.email}
                    </a>
                </p>

                <p>
                    GitHub:{" "}
                    <a href={profile.github} target="_blank" rel="noreferrer">
                        {profile.github}
                    </a>
                </p>
            </div>
        </section>
    );
}