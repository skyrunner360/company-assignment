function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
      <Icon className="h-4 w-4" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
export default SectionTitle;
