export function Backdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <span
        className="absolute -left-[10%] top-[8%] h-[28rem] w-[28rem] animate-float rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--orb-one)" }}
      />
      <span
        className="absolute right-[-5%] top-[35%] h-[22rem] w-[22rem] animate-float rounded-full opacity-50 blur-3xl [animation-delay:-4s]"
        style={{ background: "var(--orb-two)" }}
      />
      <span
        className="absolute bottom-[5%] left-[30%] h-[20rem] w-[20rem] animate-float rounded-full opacity-40 blur-3xl [animation-delay:-8s]"
        style={{ background: "var(--orb-three)" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,hsl(var(--background))_95%)]" />
    </div>
  );
}
