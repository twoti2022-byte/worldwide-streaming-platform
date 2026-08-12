export function Toast({ message }: { message: string }) {
  return <div role="status" className="ui-toast">{message}</div>;
}
