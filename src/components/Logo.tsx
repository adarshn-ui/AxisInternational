interface LogoProps {
  variant?: 'default' | 'white' | 'minimal';
  className?: string;
  size?: 'normal' | 'large';
  centerAlign?: boolean;
}

export function Logo({ variant = 'default', className = '', size = 'normal', centerAlign = false }: LogoProps) {
  const isWhite = variant === 'white';
  const isLarge = size === 'large';

  return (
    <div className="relative flex items-center">
      {/* Text with improved typography - Option 8 style */}
      <div className={`flex flex-col leading-tight ${centerAlign ? 'items-center' : 'items-start'}`}>
        <span 
          className={`${isLarge ? 'text-7xl' : 'text-5xl'} ${isWhite ? 'text-white' : 'text-gray-900'}`}
          style={{ 
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', 
            fontWeight: 300, 
            letterSpacing: '0.02em',
            lineHeight: '0.85',
            transform: 'scaleY(0.92)'
          }}
        >
          Ax<span style={{ color: '#DC4405' }}>i</span>s
        </span>
        <span 
          className={`${isLarge ? 'text-3xl' : 'text-xl'} ${isWhite ? 'text-gray-300' : 'text-gray-600'} mt-1`}
          style={{ 
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', 
            fontWeight: 300, 
            letterSpacing: '0.12em' 
          }}
        >
          International<span 
            className="text-red-600" 
            style={{ 
              fontSize: '1.8em',
              lineHeight: '0',
              verticalAlign: 'baseline',
              fontWeight: 700
            }}
          >.</span>
        </span>
      </div>
    </div>
  );
}