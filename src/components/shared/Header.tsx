import { Menu } from "../nav/Menu";
import { NavLinks } from "../nav/NavLinks";

export const Header = () => {
  return (
    <div className="flex flex-col  **:text-header-foreground">
      <NavLinks />
      <Menu />
    </div>
  );
};
