export type Slate = {
  project: string; // "My YouTube Video"
  segment: string; // "Hook", "Intro", etc.

  take: number; // version counter
  isRolling: boolean;

  duration: number | null;

  timestamp: number;

  notes: string[];

  camera?: string;
};

export type SlateAction =
  | { type: "ROLL" }
  | { type: "CUT" }
  | { type: "NEXT_TAKE" }
  | { type: "ADD_NOTE"; note: string }
  | { type: "SET_PROJECT"; project: string }
  | { type: "RESET" }
  | { type: "TIMESTAMP"; now: number };
