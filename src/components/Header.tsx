import { Building2, Search } from "lucide-react";
import { Input } from "./ui/input";

function Header({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (v: string) => void;
}) {
  return (
    <header className="flex items-center justify-between gap-3 border-b px-4 py-3">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Building2 className="h-5 w-5" aria-hidden />
        Company Directory
      </div>
      <div className="relative w-full max-w-lg">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          aria-label="Search employees"
          placeholder="Search employees..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-xl pl-9"
        />
      </div>
    </header>
  );
}

export default Header;
