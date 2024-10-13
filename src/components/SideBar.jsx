import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { sidebarLinks } from "../constants/sidebarLinks";

const SideBar = () => {
  const location = useLocation();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="mb-8 cursor-pointer flex items-center gap-2">
          <img src={logo} alt="win-track-logo" className="w-20 h-12" />
          <h1 className="text-lg font-serif font-semibold">Win Tracker</h1>
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
    </section>
  );
};

export default SideBar;
