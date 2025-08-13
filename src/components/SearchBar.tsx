import { Filter, Search } from "lucide-react";
import { Input } from "./ui/input";
import type { SearchBarProps } from "@/lib/types";

function SearchBar({
  query,
  setQuery,
  dept,
  setDept,
  departments,
}: SearchBarProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-xl">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          aria-label="Search employees"
          placeholder="Search by name, title, or department"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" aria-hidden />
        <label htmlFor="dept-select" className="sr-only">
          Filter by department
        </label>
        <select
          id="dept-select"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {["All", ...departments].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
