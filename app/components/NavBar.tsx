const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#units", label: "units" },
  { href: "#contact", label: "contact" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <div className="px-6 md:px-16 h-14 flex items-center justify-between font-mono text-sm">
        <span className="text-accent">$ portfolio</span>
        <div className="flex gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}