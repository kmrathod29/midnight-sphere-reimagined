import DotGrid from "./DotGrid";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dot Grid Background */}

      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={18}
          baseColor="#2F293A"
          activeColor="#1060E9"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-[var(--bg)]/60 z-10" />

      {/* Content */}

      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1
            className="
            max-w-6xl
            text-6xl
            font-bold
            md:text-8xl
            "
          >
            Transforming Ideas Into{" "}
            <span className="text-[var(--accent)]">Digital Products</span>
          </h1>

          <p
            className="
            mt-6
            text-lg
            text-[var(--text-secondary)]
            "
          >
            Modern websites, mobile apps and scalable digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
