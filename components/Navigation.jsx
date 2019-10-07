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
    <nav className="p-6 bg-white opacity-75 md:sticky md:top-0">
      <div className="container mx-auto">
        {links.map((link, index) => (
          <a key={index} className="p-3" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
