export function Avatar({ label }: { label: string }) {
  return <span aria-label={label} className="ui-avatar">{label.slice(0, 2).toUpperCase()}</span>;
}
