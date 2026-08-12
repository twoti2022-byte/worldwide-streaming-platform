export function LoadingState({ label = 'Loading' }: { label?: string }) {
  return <div aria-live="polite" className="ui-state">{label}…</div>;
}
