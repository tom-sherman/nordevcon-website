const links = [
  { href: "/#hero", label: "Home" },
  { href: "/#speakers", label: "Speakers" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#location", label: "Location" },
  { href: "/#nearby", label: "Information" },
  { href: "/#sponsors", label: "Sponsors" }
];

export default function Navgation() {
  return (
    <nav className="bg-white md:sticky md:top-0 overflow-x-auto">
      <div className="section">
        {links.map((link, index) => (
          <a
            key={index}
            className="py-6 mr-6 font-bold hover:underline"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
