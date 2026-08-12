export function ErrorState({ message }: { message: string }) {
  return <div role="alert" className="ui-state ui-error">{message}</div>;
}
