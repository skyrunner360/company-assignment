import { Building2, Moon, SunMedium, Users2 } from "lucide-react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import type { SidebarProps } from "@/lib/types";

function Sidebar({
  departments,
  activeDept,
  setActiveDept,
  dark,
  setDark,
}: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Users2 className="h-5 w-5" aria-hidden />
          Directory
        </div>
        <div className="flex items-center gap-2">
          <SunMedium className="h-4 w-4" aria-hidden />
          <Switch
            checked={dark}
            onCheckedChange={setDark}
            aria-label="Toggle dark mode"
          />
          <Moon className="h-4 w-4" aria-hidden />
        </div>
      </div>

      <nav className="space-y-1">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Departments
        </div>
        {["All", ...departments].map((d) => (
          <Button
            key={d}
            variant={activeDept === d ? "default" : "ghost"}
            className="w-full justify-start rounded-xl"
            onClick={() => setActiveDept(d)}
            aria-current={activeDept === d ? "page" : undefined}
          >
            <Building2 className="mr-2 h-4 w-4" aria-hidden />
            {d}
          </Button>
        ))}
      </nav>

      <div className="mt-auto text-xs text-muted-foreground">
        <div className="font-medium">Tips</div>
        <p>
          Use the search to filter by name, title, or department. Click chevrons
          in the org chart to expand/collapse.
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
