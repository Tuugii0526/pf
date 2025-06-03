"use client";
import { NavT } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLink = ({ nav }: { nav: NavT }) => {
  const pathname = usePathname();
  return (
    <Link href={nav.href}>
      <p
        className={`text-[30px] relative after:absolute after:bottom-0 after:right-0 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-all after:origin-left after:h-[3px] after:bg-header-foreground ${
          nav?.href == pathname ? " underline-offset-8 underline " : ""
        }`}
      >
        {nav.label}
      </p>
    </Link>
  );
};
