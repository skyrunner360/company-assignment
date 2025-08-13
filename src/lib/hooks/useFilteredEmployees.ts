import { useMemo } from "react";
import type { Employee } from "../types";

function useFilteredEmployees(
  employees: Employee[],
  query: string,
  dept: string
) {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    return employees.filter((e) => {
      const matchesQuery =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.department.toLowerCase().includes(q);
      const matchesDept = !dept || dept === "All" || e.department === dept;
      return matchesQuery && matchesDept;
    });
  }, [employees, query, dept]);
}

export default useFilteredEmployees;
