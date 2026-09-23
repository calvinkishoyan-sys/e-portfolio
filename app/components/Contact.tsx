const CONTACT = {
  email: "calvinkishoyan@gmail.com",
  phone: "+254 716509319",
  github: "github.com/calvinkishoyan-sys",
  linkedin: "linkedin.com/in/calvinkishoyan",
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-24 border-t border-border">
      <p className="font-mono text-accent text-sm mb-2">04 // contact</p>
      <h2 className="font-mono text-3xl md:text-4xl font-bold mb-10">
        Get In Touch
      </h2>

      <div className="border border-border rounded-md bg-surface divide-y divide-border font-mono text-sm max-w-xl">
        <a
          href={`mailto:${CONTACT.email}`}
          className="flex justify-between px-5 py-4 hover:bg-surface-alt transition-colors"
        >
          <span className="text-text-secondary">email</span>
          <span className="text-accent">{CONTACT.email}</span>
        </a>
        <a
          href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
          className="flex justify-between px-5 py-4 hover:bg-surface-alt transition-colors"
        >
          <span className="text-text-secondary">phone</span>
          <span className="text-accent">{CONTACT.phone}</span>
        </a>
        <a
          href={`https://${CONTACT.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between px-5 py-4 hover:bg-surface-alt transition-colors"
        >
          <span className="text-text-secondary">github</span>
          <span className="text-accent">{CONTACT.github}</span>
        </a>
        <a
          href={`https://${CONTACT.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between px-5 py-4 hover:bg-surface-alt transition-colors"
        >
          <span className="text-text-secondary">linkedin</span>
          <span className="text-accent">{CONTACT.linkedin}</span>
        </a>
      </div>

      <p className="font-mono text-xs text-text-secondary mt-16">
        end of transmission //
      </p>
    </section>
  );
}