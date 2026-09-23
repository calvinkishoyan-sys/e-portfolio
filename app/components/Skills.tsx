const SKILLS = [
  { name: "Network Security", level: 70, status: "monitoring" },
  { name: "Cryptography", level: 55, status: "learning" },
  { name: "Penetration Testing", level: 60, status: "monitoring" },
  { name: "Linux & Systems", level: 80, status: "operational" },
  { name: "Python for Security", level: 75, status: "operational" },
  { name: "Web App Security", level: 65, status: "monitoring" },
];

const STATUS_COLOR: Record<string, string> = {
  operational: "text-accent",
  monitoring: "text-alert",
  learning: "text-text-secondary",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 border-t border-border">
      <p className="font-mono text-accent text-sm mb-2">02 // skills</p>
      <h2 className="font-mono text-3xl md:text-4xl font-bold mb-10">
        Scan Report
      </h2>

      <div className="space-y-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="border border-border rounded-md p-4 bg-surface"
          >
            <div className="flex justify-between items-center font-mono text-sm mb-2">
              <span className="text-text-primary">{skill.name}</span>
              <span className={STATUS_COLOR[skill.status]}>
                [{skill.status}]
              </span>
            </div>
            <div className="w-full h-2 bg-surface-alt rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}