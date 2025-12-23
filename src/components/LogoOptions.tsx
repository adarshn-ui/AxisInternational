interface LogoOptionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function LogoOption({ title, description, children }: LogoOptionProps) {
  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
      <div className="flex items-center justify-center min-h-[120px] w-full">
        {children}
      </div>
      <div className="text-center">
        <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
          {title}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export function LogoOptions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4" style={{ fontWeight: 700 }}>
            Logo Options for Axis International
          </h1>
          <p className="text-xl text-gray-600">
            Minimal designs with geometric axis concepts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Option 1: Crossed Axes */}
          <LogoOption
            title="Option 1: Crossed Axes"
            description="Intersecting lines representing X & Y axes"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <line x1="24" y1="4" x2="24" y2="44" stroke="#2563EB" strokeWidth="2" opacity="0.3" />
                  <line x1="4" y1="24" x2="44" y2="24" stroke="#2563EB" strokeWidth="2" opacity="0.3" />
                  <circle cx="24" cy="24" r="4" fill="#E63946" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-4xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Axis
                </span>
                <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}>
                  International<span className="text-red-600">.</span>
                </span>
              </div>
            </div>
          </LogoOption>

          {/* Option 2: Letter X as Axis */}
          <LogoOption
            title="Option 2: Letter X as Axis"
            description="The X in 'Axis' highlighted as geometry"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-5xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}>
                A<span style={{ color: '#2563EB', position: 'relative' }}>
                  x
                  <svg style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <line x1="8" y1="8" x2="24" y2="24" stroke="#E63946" strokeWidth="1.5" opacity="0.6" />
                    <line x1="24" y1="8" x2="8" y2="24" stroke="#2563EB" strokeWidth="1.5" opacity="0.4" />
                  </svg>
                </span>is
              </span>
              <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}>
                International<span className="text-red-600">.</span>
              </span>
            </div>
          </LogoOption>

          {/* Option 3: Geometric Grid */}
          <LogoOption
            title="Option 3: Geometric Grid"
            description="Grid pattern representing coordinate system"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="4" y="4" width="40" height="40" stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.2" />
                  <line x1="24" y1="4" x2="24" y2="44" stroke="#2563EB" strokeWidth="1" opacity="0.2" />
                  <line x1="4" y1="24" x2="44" y2="24" stroke="#2563EB" strokeWidth="1" opacity="0.2" />
                  <line x1="14" y1="4" x2="14" y2="44" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
                  <line x1="34" y1="4" x2="34" y2="44" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
                  <line x1="4" y1="14" x2="44" y2="14" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
                  <line x1="4" y1="34" x2="44" y2="34" stroke="#2563EB" strokeWidth="0.5" opacity="0.15" />
                  <circle cx="24" cy="24" r="3" fill="#E63946" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-4xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300, letterSpacing: '0.05em' }}>
                  Axis
                </span>
                <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300, letterSpacing: '0.12em' }}>
                  International<span className="text-red-600">.</span>
                </span>
              </div>
            </div>
          </LogoOption>

          {/* Option 4: Three Directional Lines */}
          <LogoOption
            title="Option 4: Three Axes (3D)"
            description="X, Y, Z axes in isometric view"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <line x1="24" y1="24" x2="24" y2="6" stroke="#2563EB" strokeWidth="2.5" opacity="0.4" />
                  <line x1="24" y1="24" x2="40" y2="36" stroke="#2563EB" strokeWidth="2.5" opacity="0.3" />
                  <line x1="24" y1="24" x2="8" y2="36" stroke="#2563EB" strokeWidth="2.5" opacity="0.25" />
                  <circle cx="24" cy="24" r="4" fill="#E63946" />
                  <circle cx="24" cy="6" r="2" fill="#2563EB" opacity="0.5" />
                  <circle cx="40" cy="36" r="2" fill="#2563EB" opacity="0.5" />
                  <circle cx="8" cy="36" r="2" fill="#2563EB" opacity="0.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-4xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, letterSpacing: '-0.02em' }}>
                  Axis
                </span>
                <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}>
                  International<span className="text-red-600">.</span>
                </span>
              </div>
            </div>
          </LogoOption>

          {/* Option 5: Underline as Axis */}
          <LogoOption
            title="Option 5: Underline Axis"
            description="Horizontal axis beneath the wordmark"
          >
            <div className="flex flex-col">
              <span className="text-5xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}>
                Axis
              </span>
              <div className="relative h-3 mt-1">
                <div className="absolute left-0 top-0 h-0.5 bg-blue-600 opacity-30" style={{ width: '100%' }} />
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-red-600" style={{ transform: 'translateY(-3px)' }} />
                <div className="absolute right-0 top-0 w-1.5 h-1.5 rounded-full bg-blue-600 opacity-40" style={{ transform: 'translateY(-2.5px)' }} />
              </div>
              <span className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}>
                International<span className="text-red-600">.</span>
              </span>
            </div>
          </LogoOption>

          {/* Option 6: Rotated Square */}
          <LogoOption
            title="Option 6: Rotated Axes"
            description="Diamond representing rotated axis system"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="24" y="24" width="24" height="24" transform="rotate(45 24 24)" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.25" />
                  <line x1="24" y1="7" x2="24" y2="41" stroke="#2563EB" strokeWidth="1" opacity="0.2" />
                  <line x1="7" y1="24" x2="41" y2="24" stroke="#2563EB" strokeWidth="1" opacity="0.2" />
                  <circle cx="24" cy="24" r="3.5" fill="#E63946" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-4xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700, letterSpacing: '-0.03em' }}>
                  AXIS
                </span>
                <span className="text-xs text-gray-600 mt-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300, letterSpacing: '0.2em' }}>
                  INTERNATIONAL<span className="text-red-600">.</span>
                </span>
              </div>
            </div>
          </LogoOption>

          {/* Option 7: Letter A as Triangle Axis */}
          <LogoOption
            title="Option 7: A-Frame Axis"
            description="Letter A with geometric axis framework"
          >
            <div className="flex flex-col leading-tight">
              <div className="relative">
                <span className="text-5xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>
                  <span className="relative inline-block">
                    A
                    <svg style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: -1 }} width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <line x1="20" y1="5" x2="20" y2="35" stroke="#2563EB" strokeWidth="1.5" opacity="0.2" />
                      <line x1="5" y1="25" x2="35" y2="25" stroke="#2563EB" strokeWidth="1.5" opacity="0.2" />
                    </svg>
                  </span>xis
                </span>
              </div>
              <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}>
                International<span className="text-red-600">.</span>
              </span>
            </div>
          </LogoOption>

          {/* Option 8: Minimal Dot & Line */}
          <LogoOption
            title="Option 8: Minimal Point & Axis"
            description="Ultra-minimal origin point with axis line"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <line x1="16" y1="0" x2="16" y2="32" stroke="#2563EB" strokeWidth="1.5" opacity="0.25" />
                  <circle cx="16" cy="16" r="5" fill="#E63946" opacity="0.9" />
                  <circle cx="16" cy="16" r="2" fill="white" opacity="0.8" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-4xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300, letterSpacing: '0.05em' }}>
                  Axis
                </span>
                <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 300, letterSpacing: '0.12em' }}>
                  International<span className="text-red-600">.</span>
                </span>
              </div>
            </div>
          </LogoOption>

          {/* Option 9: Compass Axes */}
          <LogoOption
            title="Option 9: Compass Rose"
            description="Four cardinal directions as axes"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <line x1="24" y1="4" x2="24" y2="20" stroke="#2563EB" strokeWidth="2" opacity="0.3" />
                  <line x1="24" y1="28" x2="24" y2="44" stroke="#2563EB" strokeWidth="2" opacity="0.2" />
                  <line x1="4" y1="24" x2="20" y2="24" stroke="#2563EB" strokeWidth="2" opacity="0.3" />
                  <line x1="28" y1="24" x2="44" y2="24" stroke="#2563EB" strokeWidth="2" opacity="0.2" />
                  <circle cx="24" cy="24" r="6" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.2" />
                  <circle cx="24" cy="24" r="3" fill="#E63946" />
                  <polygon points="24,4 26,10 24,12 22,10" fill="#2563EB" opacity="0.4" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-4xl text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Axis
                </span>
                <span className="text-sm text-gray-600 mt-0.5" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 400, letterSpacing: '0.08em' }}>
                  International<span className="text-red-600">.</span>
                </span>
              </div>
            </div>
          </LogoOption>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All designs incorporate geometric axis concepts - intersecting lines, grids, origin points, and directional elements
          </p>
        </div>
      </div>
    </div>
  );
}