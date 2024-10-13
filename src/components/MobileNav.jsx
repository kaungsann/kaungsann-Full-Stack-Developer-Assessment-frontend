import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { sidebarLinks } from "../constants/sidebarLinks";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        {sidebarLinks.map((item) => {
          const isActive =
            location.pathname === item.route ||
            location.pathname.startsWith(`${item.route}/`);

          return (
            <NavbarMenuItem key={item.label}>
              <Link
                href={item.route}
                className={`w-2/4 my-3 rounded-lg flex py-3  ${
                  isActive ? "bg-blue-500" : ""
                }`}
              >
                <div className="relative size-6 ml-4">
                  <img
                    src={item.imgURL}
                    alt={item.label}
                    className={`${isActive ? "brightness-[3] invert-0" : ""}`}
                  />
                </div>
                <p
                  className={`ml-6 sidebar-label ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default MobileNav;
