/** Minimal geometric panther-head glyph (brand secondary mark). */
export default function PantherMark({
  className = "",
  color = "var(--color-lime)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 8l9 12c4-2 9-3 13-3s9 1 13 3l9-12-2 17c3 4 5 9 5 14 0 13-12 22-30 22S6 52 6 39c0-5 2-10 5-14L10 8z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* eyes */}
      <path d="M22 34l7-2-1 5-6 1z" fill={color} />
      <path d="M42 34l-7-2 1 5 6 1z" fill={color} />
      {/* nose / muzzle */}
      <path d="M32 44l-4 4h8z" fill={color} />
      <path d="M32 48v6" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* whiskers */}
      <path d="M24 50l-10 3M40 50l10 3" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
