import type { Employee } from "@/lib/types";
import { useMemo } from "react";
import SectionTitle from "./ui/sectionTitle";
import { Users2 } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import EmployeeCard from "./EmployeeCard";

function EmployeeGrid({ employees }: { employees: Employee[] }) {
  const grouped = useMemo(() => {
    const map: Record<string, Employee[]> = {};
    employees.forEach((e) => {
      map[e.department] ||= [];
      map[e.department].push(e);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [employees]);

  if (!employees.length) {
    return (
      <div className="rounded-2xl border border-dashed p-10 text-center text-sm text-muted-foreground">
        No employees match the current filters.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {grouped.map(([dept, list]) => (
        <section
          key={dept}
          aria-label={`${dept} department`}
          className="space-y-3"
        >
          <SectionTitle icon={Users2}>{dept}</SectionTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <AnimatePresence initial={false}>
              {list.map((e) => (
                <EmployeeCard key={e.id} employee={e} />
              ))}
            </AnimatePresence>
          </div>
        </section>
      ))}
    </div>
  );
}

export default EmployeeGrid;
