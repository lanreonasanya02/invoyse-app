export default function SideLink() {
  const iconName = "beans";
  return (
    <a href={`/${page}`} className="menu">
      <span className="menu-link">
        <iconName size={18} className="menu-icon" />
        <span>Schedule</span>
      </span>
    </a>
  );
}
