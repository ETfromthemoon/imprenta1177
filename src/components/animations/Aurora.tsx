export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
    >
      <div className="absolute -left-[15%] top-[5%] size-[55vw] max-w-[700px] rounded-full bg-cyan/20 blur-[100px] animate-aurora-1" />
      <div className="absolute -right-[10%] top-[20%] size-[45vw] max-w-[580px] rounded-full bg-cyan-light/10 blur-[110px] animate-aurora-2" />
      <div className="absolute left-[30%] -top-[10%] size-[35vw] max-w-[460px] rounded-full bg-magenta/8 blur-[120px] animate-aurora-3" />
    </div>
  );
}
