export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 border-t border-border">
      <p className="font-mono text-accent text-sm mb-2">01 // about</p>
      <h2 className="font-mono text-3xl md:text-4xl font-bold mb-10">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-text-secondary text-lg leading-relaxed">
            I&apos;m a Computer Science student focused on cybersecurity —
            interested in how systems get attacked, and more importantly,
            how they get defended. This portfolio tracks my academic
            progress and the areas of security I&apos;m building toward.
          </p>
        </div>

        <div className="font-mono text-sm space-y-3">
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-text-secondary">program</span>
            <span className="text-text-primary">B.Sc. developer</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-text-secondary">focus</span>
            <span className="text-text-primary">Cybersecurity</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-text-secondary">status</span>
            <span className="text-text-primary">Year 3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">location</span>
            <span className="text-text-primary">Eldoret, Kenya</span>
          </div>
        </div>
      </div>
    </section>
  );
}