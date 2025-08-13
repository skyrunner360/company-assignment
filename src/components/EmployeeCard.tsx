import type { Employee } from "@/lib/types";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import Avatar from "./ui/avatar";
import { Building2 } from "lucide-react";

function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
    >
      <Card className="group overflow-hidden rounded-2xl border border-border/60 shadow-sm transition hover:shadow-md">
        <CardContent className="flex items-center gap-4 p-4">
          <Avatar
            src={
              employee.photo ||
              `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(
                employee.name
              )}`
            }
            alt={`${employee.name} avatar`}
          />
          <div className="min-w-0">
            <div className="truncate text-base font-semibold leading-tight">
              {employee.name}
            </div>
            <div className="truncate text-sm text-muted-foreground">
              {employee.title}
            </div>
            <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
              <Building2 className="h-3 w-3" aria-hidden />
              {employee.department}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default EmployeeCard;
