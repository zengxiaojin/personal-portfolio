import { navLinks } from "../data/navigation";
import { profile } from "../data/profile";

export default function Header() {
    return (
        <header className="siteHeader">
            <a href="#" className="siteLogo">
                {profile.name}
            </a>

            <nav className="siteNav" aria-label="Main navigation">
                {navLinks.map((link) => (
                    <a href={link.href} key={link.href}>
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
}