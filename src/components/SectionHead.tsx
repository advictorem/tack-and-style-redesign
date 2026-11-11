import type { ReactNode } from "react";
import Split from "./Split";

type Props = { num: string; label: string; title: string; id: string; children?: ReactNode };

/** Numbered editorial section heading: "(02) SELECTED WORK" + oversized headline + quiet aside. */
export default function SectionHead({ num, label, title, id, children }: Props) {
  return (
    <div className="head">
      <div>
        <p className="label"><span>({num})</span> {label}</p>
        <Split className="display-lg" id={id} text={title} />
      </div>
      {children ? <div className="head-aside muted" data-reveal>{children}</div> : null}
    </div>
  );
}
