import Link from "next/link";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#speakers", label: "Speakers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#location", label: "Location" },
  { href: "#nearby", label: "Information" },
  { href: "#sponsors", label: "Sponsors" }
];

export default function Navgation() {
  return (
    <nav className="p-6 bg-white opacity-75 fixed">
      {links.map(link => (
        <a className="p-3" href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
