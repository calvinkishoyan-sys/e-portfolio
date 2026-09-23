"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> initializing secure session...",
  "> loading credentials... OK",
  "> scanning environment... clear",
];

const NAME = "calvin simel";

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedName, setTypedName] = useState("");

  // Reveal boot lines one at a time
  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const timeout = setTimeout(() => {
      setVisibleLines((n) => n + 1);
    }, 400);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  // Once boot lines are done, type out the name
  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) return;
    if (typedName.length >= NAME.length) return;
    const timeout = setTimeout(() => {
      setTypedName(NAME.slice(0, typedName.length + 1));
    }, 80);
    return () => clearTimeout(timeout);
  }, [visibleLines, typedName]);

  return (
    <section className="min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-2xl font-mono">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <p key={i} className="text-text-secondary text-sm mb-1">
            {line}
          </p>
        ))}

        {visibleLines >= BOOT_LINES.length && (
          <>
            <p className="text-accent text-sm mt-4 mb-2">$ whoami</p>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
              {typedName}
              <span className="inline-block w-2 h-10 md:h-14 bg-accent ml-1 animate-pulse" />
            </h1>
            <p className="text-text-secondary mt-4 text-lg font-sans">
              Cybersecurity student building a foundation in network defense,
              cryptography, and secure systems.
            </p>
          </>
        )}
      </div>
    </section>
  );
}