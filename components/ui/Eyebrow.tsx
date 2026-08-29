export default function Eyebrow({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-lime" />
      {index && <span className="eyebrow !text-signal-dim">{index}</span>}
      <span className="eyebrow">{children}</span>
    </div>
  );
}
