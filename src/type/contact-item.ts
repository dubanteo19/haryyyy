import type { ReactNode } from "react";

export interface ContactItem {
  id: number;
  label: string;
  icon: ReactNode;
  href: string;
  borderColor?: string;
}
