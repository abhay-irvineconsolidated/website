export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = NavLink & {
  /** One-line description shown at the top of the dropdown. */
  summary?: string;
  items?: NavLink[];
};
