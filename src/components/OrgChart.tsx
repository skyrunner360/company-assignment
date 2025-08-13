import { ChevronDown, ChevronRight, Users2 } from "lucide-react";
import { useMemo, useState } from "react";
import Avatar from "./ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import type { Employee } from "@/lib/types";
import useReportsMap from "@/lib/hooks/useReportsMap";
import SectionTitle from "./ui/sectionTitle";

const OrgChartNode = ({
  node,
  reportsByManager,
}: {
  node: Employee;
  reportsByManager: Record<string, Employee[]>;
}) => {
  const [open, setOpen] = useState(true);
  const reports = reportsByManager[String(node.id)] || [];
  const hasReports = reports.length > 0;

  return (
    <li className="relative">
      <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-card p-3 shadow-sm">
        <button
          className={`mt-1 rounded-md p-1 transition hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary ${
            !hasReports ? "invisible" : ""
          }`}
          aria-label={open ? "Collapse reports" : "Expand reports"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
        <div className="flex items-center gap-3">
          <Avatar
            src={
              node.photo ||
              `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                node.name
              )}`
            }
            alt={`${node.name} avatar`}
          />
          <div>
            <div className="text-sm font-semibold leading-tight">
              {node.name}
            </div>
            <div className="text-xs text-muted-foreground">
              {node.title} • {node.department}
            </div>
          </div>
        </div>
      </div>

      {hasReports && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-6 mt-3 space-y-2 border-l pl-4"
            >
              {reports.map((child) => (
                <OrgChartNode
                  key={child.id}
                  node={child}
                  reportsByManager={reportsByManager}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};

export const OrgChart = ({ employees }: { employees: Employee[] }) => {
  const reportsByManager = useReportsMap(employees);
  const roots = useMemo(
    () =>
      (reportsByManager["root"] || []).sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    [reportsByManager]
  );

  if (!employees.length) return null;

  return (
    <div className="space-y-3">
      <SectionTitle icon={Users2}>Org Chart</SectionTitle>
      <ul className="space-y-2">
        {roots.map((r) => (
          <OrgChartNode
            key={r.id}
            node={r}
            reportsByManager={reportsByManager}
          />
        ))}
      </ul>
    </div>
  );
};
