export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,228,72,0.10),transparent_55%)]" />
      <div className="absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-green/10 blur-[140px]" />
      <div className="absolute -right-40 top-2/3 h-[32rem] w-[32rem] rounded-full bg-plasma/10 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
        }}
      />
    </div>
  )
}
