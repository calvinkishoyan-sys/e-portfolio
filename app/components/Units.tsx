"use client";

import { useState, Fragment } from "react";

type Unit = {
  code: string;
  name: string;
  credits: number;
  grade: "A" | "B" | "C" | "D";
  breakdown?: {
    cat1: number;
    cat2: number;
    exam: number;
  };
};

const UNITS: Unit[] = [
  {
    code: "CS201",
    name: "Data Structures & Algorithms",
    credits: 4,
    grade: "A",
  },
  {
    code: "CS230",
    name: "Networking",
    credits: 3,
    grade: "A",
    breakdown: { cat1: 18, cat2: 17, exam: 58 },
  },
  {
    code: "CS225",
    name: "Operating Systems",
    credits: 4,
    grade: "B",
  },
  {
    code: "CS240",
    name: "Cryptography & Data Protection",
    credits: 3,
    grade: "A",
  },
  {
    code: "CS250",
    name: "Ethical Hacking & Pen Testing",
    credits: 3,
    grade: "A",
  },
  {
    code: "MTH204",
    name: "Discrete Mathematics",
    credits: 3,
    grade: "B",
  },
];

const GRADE_POINTS: Record<Unit["grade"], number> = {
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
};

function computeGPA(units: Unit[]) {
  const totalCredits = units.reduce((sum, u) => sum + u.credits, 0);
  const totalPoints = units.reduce(
    (sum, u) => sum + u.credits * GRADE_POINTS[u.grade],
    0
  );
  return (totalPoints / totalCredits).toFixed(2);
}

const GRADE_COLOR: Record<Unit["grade"], string> = {
  A: "text-accent",
  B: "text-alert",
  C: "text-danger",
  D: "text-danger",
};

export default function Units() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const gpa = computeGPA(UNITS);
  const totalCredits = UNITS.reduce((sum, u) => sum + u.credits, 0);

  return (
    <section id="units" className="px-6 md:px-16 py-24 border-t border-border">
      <p className="font-mono text-accent text-sm mb-2">03 // academic record</p>
      <h2 className="font-mono text-3xl md:text-4xl font-bold mb-10">
        Units &amp; Grades
      </h2>

      {/* Stat cards */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="border border-border rounded-md p-5 bg-surface flex-1 min-w-[140px]">
          <p className="font-mono text-3xl text-accent">{gpa}</p>
          <p className="font-mono text-xs text-text-secondary mt-2">CUMULATIVE GPA</p>
        </div>
        <div className="border border-border rounded-md p-5 bg-surface flex-1 min-w-[140px]">
          <p className="font-mono text-3xl text-accent">{UNITS.length}</p>
          <p className="font-mono text-xs text-text-secondary mt-2">UNITS</p>
        </div>
        <div className="border border-border rounded-md p-5 bg-surface flex-1 min-w-[140px]">
          <p className="font-mono text-3xl text-accent">{totalCredits}</p>
          <p className="font-mono text-xs text-text-secondary mt-2">TOTAL CREDITS</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-border rounded-md">
        <table className="w-full text-sm font-mono">
          <thead>
            <tr className="bg-surface-alt text-text-secondary text-left">
              <th className="px-4 py-3 font-medium">Code</th>
              <th className="px-4 py-3 font-medium">Unit</th>
              <th className="px-4 py-3 font-medium">Credits</th>
              <th className="px-4 py-3 font-medium">Grade</th>
            </tr>
          </thead>
          <tbody>
            {UNITS.map((unit) => {
              const isOpen = expanded === unit.code;
              return (
                <Fragment key={unit.code}>
                  <tr
                    key={unit.code}
                    onClick={() =>
                      unit.breakdown &&
                      setExpanded(isOpen ? null : unit.code)
                    }
                    className={`border-t border-border bg-surface ${
                      unit.breakdown ? "cursor-pointer hover:bg-surface-alt" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-text-secondary">{unit.code}</td>
                    <td className="px-4 py-3 text-text-primary">
                      {unit.name}
                      {unit.breakdown && (
                        <span className="text-accent text-xs ml-2">
                          {isOpen ? "▲" : "▼ details"}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{unit.credits}</td>
                    <td className={`px-4 py-3 font-semibold ${GRADE_COLOR[unit.grade]}`}>
                      {unit.grade}
                    </td>
                  </tr>

                  {isOpen && unit.breakdown && (
                    <tr className="bg-surface-alt border-t border-border">
                      <td colSpan={4} className="px-4 py-4">
                        <div className="flex flex-wrap gap-6 text-xs">
                          <div>
                            <span className="text-text-secondary">CAT 1: </span>
                            <span className="text-text-primary">{unit.breakdown.cat1}%</span>
                          </div>
                          <div>
                            <span className="text-text-secondary">CAT 2: </span>
                            <span className="text-text-primary">{unit.breakdown.cat2}%</span>
                          </div>
                          <div>
                            <span className="text-text-secondary">End Term Exam: </span>
                            <span className="text-text-primary">{unit.breakdown.exam}%</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}