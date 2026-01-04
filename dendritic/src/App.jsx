import { useMemo } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/ag/app/dendritic-learning/id6747594225';

const features = [
  {
    label: 'Web Sets',
    title: 'Break away from linear learning',
    description: 'Map knowledge as interconnected webs so you can see how ideas branch, loop, and reinforce each other.',
    imageAlign: 'left',
  },
  {
    label: 'Write',
    title: 'Write to remember',
    description: 'Capture insights quickly, link them to concepts, and revisit them with spaced practice that sticks.',
    imageAlign: 'right',
  },
  {
    label: 'Themes',
    title: 'See patterns across topics',
    description: 'Surface the threads that connect your courses and projects-spot gaps before they become weak points.',
    imageAlign: 'left',
  },
];

const AppStoreBadge = ({ className = '' }) => (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noreferrer"
    className={`group inline-flex items-center gap-3 rounded-xl border border-emerald-300/40 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-100 shadow-[0_12px_35px_-22px_rgba(16,185,129,0.9)] transition hover:-translate-y-0.5 hover:border-emerald-300/80 hover:bg-emerald-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${className}`}
    aria-label="Download Dendritic Learning on the App Store"
  >
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/20 text-white">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19.665 13.109c-.03-2.396 1.962-3.547 2.052-3.604-1.118-1.634-2.853-1.858-3.468-1.883-1.471-.155-2.88.872-3.624.872-.758 0-1.907-.851-3.132-.827-1.608.023-3.093.934-3.92 2.366-1.665 2.883-.423 7.126 1.169 9.465.774 1.115 1.689 2.373 2.89 2.328 1.17-.045 1.607-.753 3.021-.753 1.399 0 1.81.753 3.042.73 1.259-.022 2.053-1.136 2.822-2.257.896-1.316 1.262-2.59 1.277-2.655-.028-.011-2.447-.94-2.489-3.782ZM16.98 5.86c.653-.794 1.094-1.889.972-2.98-.942.038-2.086.628-2.762 1.412-.606.701-1.14 1.822-.998 2.89 1.054.081 2.134-.531 2.788-1.322Z"
        />
      </svg>
    </span>
    <div className="text-left leading-tight">
      <div className="text-xs text-emerald-200/80">Download on the</div>
      <div className="text-base">App Store</div>
    </div>
  </a>
);

const NeuralBackdrop = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
    viewBox="0 0 1200 900"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(52,211,153,0.35)" />
        <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
      </linearGradient>
    </defs>
    <g stroke="url(#glow)" strokeWidth="1.2" fill="none">
      <path d="M50 120 Q200 60 360 160 T700 180 T1100 140" />
      <path d="M80 340 Q260 300 420 380 T760 360 T1140 420" opacity="0.9" />
      <path d="M120 560 Q320 500 520 580 T880 600 T1160 560" opacity="0.7" />
      {[...Array(30)].map((_, idx) => {
        const x = 40 + idx * 36;
        const y = 140 + ((idx * 53) % 360);
        const y2 = y + 180;
        return <line key={idx} x1={x} y1={y} x2={x + 80} y2={y2} opacity={0.25} />;
      })}
    </g>
  </svg>
);

const PlaceholderFrame = ({ label }) => (
  <img
    src="/dendritic-web-mockup.png"
    alt={`${label} mockup`}
    width={1560}
    height={1040}
    className="w-full max-w-full rounded-2xl object-cover shadow-[0_30px_80px_-50px_rgba(16,185,129,0.7)]"
    loading="lazy"
  />
);

const FeatureBlock = ({ feature }) => {
  const alignRight = feature.imageAlign === 'right';
  const isWebset = feature.label === 'Web Sets';
  const isWrite = feature.label === 'Write';
  const isTheme = feature.label === 'Themes';
  const hasRealImage = isWebset || isWrite || isTheme;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
      <div className={alignRight ? 'md:order-2' : ''}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/70">{feature.label}</span>
        <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{feature.title}</h3>
        <p className="mt-4 text-base text-white/70 lg:text-lg">{feature.description}</p>
      </div>
      <div className={alignRight ? 'md:order-1' : ''}>
        <div
          className={
            hasRealImage
              ? 'relative overflow-hidden rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-2 shadow-[0_20px_60px_-50px_rgba(16,185,129,0.8)]'
              : 'relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 shadow-[0_20px_60px_-50px_rgba(16,185,129,0.8)]'
          }
        >
          {hasRealImage ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-emerald-200/30">
              <img
                src={isWebset ? '/webset.png' : isWrite ? '/write.jpeg' : '/theme.jpeg'}
                alt={`${feature.label} preview`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            </div>
          ) : (
            <>
              <div className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-black to-emerald-500/5" />
              <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen">
                <NeuralBackdrop />
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-emerald-100">
                Preview
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div id="home" className="relative min-h-screen bg-[#040507] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(52,211,153,0.12),transparent_25%),radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.2),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <NeuralBackdrop />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-10 sm:px-8 lg:max-w-6xl lg:px-10">
        <header className="mb-14 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3 text-sm font-semibold text-white">
            <img
              src="/DendriticLearning_icon_transparent.svg"
              alt="Dendritic Learning logo"
              width={34}
              height={34}
              className="h-8 w-auto"
              loading="lazy"
            />
            <span className="tracking-tight">Dendritic Learning</span>
          </div>
        </header>

        <section className="grid grid-cols-1 items-center gap-12 pb-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
              Available now on iPhone & iPad
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
            </div>
            <div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Learn in graphs. Think in connections.
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/70">
                Dendritic Learning helps you capture concepts as webs, not lists. See the neural pathways between ideas and remember faster.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <AppStoreBadge />
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Built by students, for students.
              </div>
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-white/50" />
            </div>
          </div>
          <div className="relative">
            <PlaceholderFrame label="iPad + iPhone experience" />
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm text-white/80 shadow-[0_20px_70px_-60px_rgba(16,185,129,1)] backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-white">
              <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
              Available now on iPhone & iPad
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="h-px w-8 bg-white/15" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-14">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/80">Features</span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Designed for deep, connected learning</h2>
            <p className="max-w-3xl text-base text-white/70 lg:text-lg">
              Everything in Dendritic is tuned for clarity: fewer taps to add context, faster ways to link ideas, and a calm workspace that keeps focus on the graph.
            </p>
          </div>
          <div className="space-y-16">
            {features.map((feature) => (
              <FeatureBlock key={feature.title} feature={feature} />
            ))}
          </div>
        </section>

       

        <section className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-black to-emerald-500/10 px-8 py-12 text-center shadow-[0_40px_120px_-80px_rgba(16,185,129,1)]">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to build your own dendrites?</h2>
          <p className="mt-3 text-base text-white/70 lg:text-lg">
            Download now and start mapping the ideas that matter most.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <AppStoreBadge />
          </div>
        </section>

        <footer className="mt-16 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-10 shadow-[0_20px_80px_-70px_rgba(16,185,129,1)] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <img
                src="/DendriticLearning_icon_transparent.svg"
                alt="Dendritic Learning logo"
                width={36}
                height={36}
                className="h-9 w-auto"
                loading="lazy"
              />
              <span className="tracking-tight">Dendritic Learning</span>
            </div>
            <p className="max-w-xl text-sm text-white/65">
              Built to help students see the neural patterns in their work and stay ahead with intentional, connected learning.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-emerald-300/60 decoration-2 underline-offset-4 hover:text-emerald-100"
              >
                App Store
              </a>
              <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden="true" />
              <a
                href="#"
                className="underline decoration-white/30 decoration-2 underline-offset-4 hover:text-emerald-100"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end sm:gap-6">
            <a
              href="https://www.linkedin.com/company/dendritic-learning/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-emerald-300/60 hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5ZM.24 22h4.52V7.5H.24V22ZM7.6 7.5H12v2h.06c.62-1.2 2.13-2.4 4.38-2.4 4.68 0 5.54 3.1 5.54 7.1V22h-4.52v-6.4c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H7.6V7.5Z"
                />
              </svg>
              LinkedIn
            </a>
            <div className="text-sm text-white/50">© {year} Dendritic</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
