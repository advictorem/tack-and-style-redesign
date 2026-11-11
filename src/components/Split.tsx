import type { CSSProperties, ElementType } from "react";

type Props = { text: string; as?: ElementType; className?: string; id?: string; delay?: number };

/**
 * Word-by-word masked reveal for headlines.
 * Wrap a phrase in *asterisks* to set it in the italic accent style; use \n for a line break.
 */
export default function Split({ text, as: Tag = "h2", className = "", id, delay }: Props) {
  let i = 0;
  const parts = text.split(/(\*[^*]+\*|\n)/).filter(Boolean);
  const words = (chunk: string) =>
    chunk.split(/\s+/).filter(Boolean).map((word) => {
      const index = i++;
      return (
        <span key={index}>
          <span className="w"><span style={{ "--i": index } as CSSProperties}>{word}</span></span>{" "}
        </span>
      );
    });
  return (
    <Tag id={id} className={`split ${className}`} data-split style={delay ? ({ "--d": delay } as CSSProperties) : undefined}>
      {parts.map((part, k) =>
        part === "\n" ? <br key={k} /> : part.startsWith("*") ? <em key={k}>{words(part.slice(1, -1))}</em> : <span key={k}>{words(part)}</span>,
      )}
    </Tag>
  );
}
