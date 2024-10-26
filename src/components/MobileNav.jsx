import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { sidebarLinks } from "../constants/index";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-100 dark:bg-[#020817]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="dark:bg-[#020817] bg-gray-100">
        <div className="w-full justify-end">
          <Footer
            className="flex justify-between items-center"
            blockImg={false}
          />
        </div>

        {sidebarLinks.map((item) => {
          const isActive =
            location.pathname === item.route ||
            location.pathname.startsWith(`${item.route}/`);

          return (
            <NavbarMenuItem key={item.label}>
              <Link
                to={item.route}
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
                    isActive ? "text-white" : "text-black dark:text-white"
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
