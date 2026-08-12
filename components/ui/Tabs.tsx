export function Tabs({ tabs }: { tabs: readonly string[] }) {
  return <div role="tablist" className="ui-tabs">{tabs.map((tab, index) => <button aria-selected={index === 0} role="tab" key={tab}>{tab}</button>)}</div>;
}
