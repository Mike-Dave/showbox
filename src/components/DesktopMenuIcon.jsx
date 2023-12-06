import { NavLink } from "react-router-dom";

export function DesktopMenuIcon() {
  return (
    <ul className="p-4 space-ys-2 hidden md:flex mx-12">
      <li>
        <NavLink to="/mychoices" className="text-orangeColor">
          My Choices
        </NavLink>
      </li>
    </ul>
  );
}
