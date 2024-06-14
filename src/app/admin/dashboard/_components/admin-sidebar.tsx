"use client";

import React, { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/use-window-size";
import { MobileAdminSidebar } from "./mobile-admin-sidebar";
import { DesktopAdminSidebar } from "./desktop-admin-sidebar";

export const AdminSidebar = () => {
  const { width } = useWindowSize();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHideSidebar, setshowHideSidebar] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setshowHideSidebar("-translate-y-20");
      } else {
        setshowHideSidebar("shadow-md border-b bg-primary-foreground");
      }
    } else {
      setshowHideSidebar("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (width < 800) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, [width]);

  return (
    <>
      {mobileMenu ? (
        <MobileAdminSidebar showHideSidebar={showHideSidebar} />
      ) : (
        <DesktopAdminSidebar showHideSidebar={showHideSidebar} />
      )}
    </>
  );
};
