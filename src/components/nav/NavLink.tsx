"use client";
import { NavT } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLink = ({ nav }: { nav: NavT }) => {
  const pathname = usePathname();
  return (
    <Link href={nav.href}>
      <p className={`${nav?.href == pathname ? "text-blue-800" : ""}`}>
        {nav.label}
      </p>
    </Link>
  );
};
