import { NavLinks } from "./NavLinks";
import { SelectLanguage } from "./SelectLanguage";

export const DesktopMenu = () => {
  return (
    <div className="flex ">
      <NavLinks />
      <SelectLanguage />
    </div>
  );
};
