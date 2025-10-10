// components/BackgroundSphere.tsx

export function BackgroundSphere() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -z-10 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div className="absolute inset-0 animate-spin-slow [animation-direction:reverse]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          className="w-full h-full"
        >
          <defs>
            <path
              id="line"
              d="M500,0 V1000"
              stroke="url(#gradient)"
              strokeWidth="1"
            />
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 45 }).map((_, i) => (
            <use
              key={i}
              href="#line"
              transform={`rotate(${i * 4} 500 500)`}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}