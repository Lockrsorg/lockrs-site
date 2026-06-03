import type { ReactNode } from "react";

interface ProseBlockProps {
  title: string;
  paragraphs: string[];
  children?: ReactNode;
}

export function ProseBlock({ title, paragraphs, children }: ProseBlockProps) {
  return (
    <section className="prose-section animate-fade-up">
      <div className="relative z-10">
        <h2>{title}</h2>
        {paragraphs.map((text) => (
          <p key={text.slice(0, 48)}>{text}</p>
        ))}
        {children}
      </div>
    </section>
  );
}
