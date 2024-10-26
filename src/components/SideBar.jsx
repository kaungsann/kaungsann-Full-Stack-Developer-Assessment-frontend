import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { sidebarLinks } from "../constants/index";
import Footer from "./Footer";

const SideBar = () => {
  const location = useLocation();

  return (
    <section className="sidebar bg-white dark:bg-[#020817]">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="mb-8 cursor-pointer flex items-center gap-2">
          <img src={logo} alt="win-track-logo" className="max-w-20 max-h-12" />
          <h1 className="text-lg 2xl:text-xl  font-sans font-bold">Talk</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            location.pathname === item.route ||
            location.pathname.startsWith(`${item.route}/`);

          return (
            <Link
              to={item.route}
              key={item.label}
              className={`sidebar-link
                 ${isActive ? "bg-[#6366f1]" : ""}`}
            >
              <div className="relative size-6">
                <img
                  src={item.imgURL}
                  alt={item.label}
                  className={`${
                    isActive ? "brightness-[6] invert-0" : ""
                  } w-16 h-5`}
                />
              </div>
              <p className={`sidebar-label ${isActive ? "text-white" : ""}`}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <Footer
        className="w-full flex justify-between items-center"
        blockImg={true}
      />
    </section>
  );
};

export default SideBar;
