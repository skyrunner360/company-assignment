export interface Employee {
  id: number;
  name: string;
  title: string;
  department: string;
  photo?: string;
  managerId: number | null;
}

export interface SearchBarProps {
  query: string;
  setQuery: (value: string) => void;
  dept: string;
  setDept: (value: string) => void;
  departments: string[];
}

export interface SidebarProps {
  dark: boolean;
  setDark: (value: boolean) => void;
  departments: string[];
  activeDept: string;
  setActiveDept: (value: string) => void;
}
