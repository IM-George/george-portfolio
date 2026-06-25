export function SectionLabel({ index, children }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm font-bold text-green">{index}</span>
      <span className="h-px flex-1 bg-ring" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-mist">{children}</span>
    </div>
  )
}
