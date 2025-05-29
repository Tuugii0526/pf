import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            <ThemeToggle />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export { MobileMenu };
