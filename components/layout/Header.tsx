const navItems = ['Home', 'Movies', 'Series', 'Discover', 'My List'] as const;

export function Header() {
  return <header className="page-shell nav"><a className="brand" href="/">WSP</a><nav aria-label="Primary navigation" className="nav-links">{navItems.map((item) => <a key={item} href="#foundation">{item}</a>)}</nav></header>;
}
