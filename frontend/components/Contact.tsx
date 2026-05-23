import { profile } from "../data/profile";

export default function Contact() {
    return (
        <section className="section" id="contact">
            <h2>Contact</h2>

            <p className="sectionLead">{profile.contactMessage}</p>

            <div className="contactGrid">
                <div className="contactCard">
                    <span>Email</span>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>

                <div className="contactCard">
                    <span>GitHub</span>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                        {profile.github}
                    </a>
                </div>

                <div className="contactCard">
                    <span>Location</span>
                    <p>{profile.location}</p>
                </div>

                <div className="contactCard">
                    <span>Job Target</span>
                    <p>{profile.jobTarget}</p>
                </div>
            </div>
        </section>
    );
}