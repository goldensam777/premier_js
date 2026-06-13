// Niveau 1 — Atomes
// Unités indivisibles. Aucun composant en dessous de ce niveau.

export type AtomUI =
  | "Button"
  | "Badge"
  | "Input"
  | "Select"
  | "Checkbox"
  | "Radio"
  | "Switch"
  | "Label"
  | "Separator"
  | "Icon"

export type AtomFeedback =
  | "Spinner"
  | "Skeleton"
  | "Toast"
  | "Tooltip"
  | "Modal"

export type AtomMedia =
  | "Avatar"
  | "ScrollArea"
  | "Card"
  | "Dropdown"

// Union de tous les atomes
export type Atom = AtomUI | AtomFeedback | AtomMedia
