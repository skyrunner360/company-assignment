import { useMemo } from "react";
import type { Employee } from "../types";

function useReportsMap(employees: Employee[]) {
  return useMemo(() => {
    const byManager: Record<string, Employee[]> = {};
    employees.forEach((e) => {
      const key = String(e.managerId ?? "root");
      byManager[key] ||= [];
      byManager[key].push(e);
    });

    Object.values(byManager).forEach((list) =>
      list.sort(
        (a, b) => a.title.localeCompare(b.title) || a.name.localeCompare(b.name)
      )
    );
    return byManager;
  }, [employees]);
}

export default useReportsMap;
