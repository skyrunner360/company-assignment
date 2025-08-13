import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import useDarkMode from "./lib/hooks/useDarkMode";
import useFilteredEmployees from "./lib/hooks/useFilteredEmployees";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import EmployeeGrid from "./components/EmployeeGrid";
import { OrgChart } from "./components/OrgChart";
import type { Employee } from "./lib/types";

export default function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const { dark, setDark } = useDarkMode();

  const departments = useMemo(
    () => Array.from(new Set(employees.map((e) => e.department))).sort(),
    [employees]
  );

  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("All");

  const filtered = useFilteredEmployees(employees, query, dept);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((data) => data.json())
      .then((d) => setEmployees(d));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid h-screen grid-rows-[auto,1fr]">
        <Header query={query} setQuery={setQuery} />
        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr]">
          <div className="border-r bg-muted/30">
            <Sidebar
              departments={departments}
              activeDept={dept}
              setActiveDept={setDept}
              dark={dark}
              setDark={setDark}
            />
          </div>
          <main className="ml-64 flex-1 p-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
            <div className="md:flex space-x-2">
              <section className="space-y-4">
                <SearchBar
                  query={query}
                  setQuery={setQuery}
                  dept={dept}
                  setDept={setDept}
                  departments={departments}
                />
                <ScrollArea className="h-[calc(100vh-140px)] rounded-2xl border p-4">
                  <EmployeeGrid employees={filtered} />
                </ScrollArea>
              </section>
              <aside className="hidden min-h-0 flex-col gap-4 mt-12 rounded-2xl border p-4 lg:flex">
                <ScrollArea className="h-[calc(100vh-170px)] pr-2">
                  <OrgChart employees={filtered} />
                </ScrollArea>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
