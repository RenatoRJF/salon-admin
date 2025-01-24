export interface NavbarListItem {
  label: string;
  href: string;
  icon?: string;
  isActive?: boolean;
}

export interface NavbarListProps {
  items: NavbarListItem[];
}
