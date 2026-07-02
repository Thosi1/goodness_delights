/**
 * PipingDivider — the site's signature decorative element.
 * A hand-piped icing line, echoing the bakery's own craft (piping bags,
 * buttercream borders). Used beneath section headings and between sections
 * instead of generic rules or numbered markers.
 */
export function PipingDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 18"
      fill="none"
      className={`piping-divider ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 9C16 -2 30 20 44 9C58 -2 72 20 86 9C100 -2 114 20 128 9C142 -2 156 20 170 9C184 -2 198 20 212 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="2" cy="9" r="2.5" fill="currentColor" />
      <circle cx="212" cy="9" r="2.5" fill="currentColor" />
    </svg>
  );
}
