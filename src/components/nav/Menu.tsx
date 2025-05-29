"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Fragment } from "react";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export const Menu = () => {
  const isMobile = useIsMobile();
  return <Fragment>{isMobile ? <MobileMenu /> : <DesktopMenu />}</Fragment>;
};
