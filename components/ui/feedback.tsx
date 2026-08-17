export const Badge = ({ children }: { children: React.ReactNode }) => <span className="badge">{children}</span>;
export const LoadingState = () => <p role="status">Loading…</p>;
export const ErrorState = ({ message }: { message: string }) => <p role="alert">{message}</p>;
export const EmptyState = ({ message }: { message: string }) => <p>{message}</p>;
export const Dialog = ({ children }: { children: React.ReactNode }) => <div role="dialog" aria-modal="true">{children}</div>;
export const Avatar = ({ label }: { label: string }) => <div aria-label={label}>{label.slice(0,1)}</div>;
export const Dropdown = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
export const Tabs = ({ children }: { children: React.ReactNode }) => <div role="tablist">{children}</div>;
export const Toast = ({ message }: { message: string }) => <div role="status">{message}</div>;
