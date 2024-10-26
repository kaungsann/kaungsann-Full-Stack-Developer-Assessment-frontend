import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { sidebarLinks } from "../constants/index";

const SideBar = () => {
  const location = useLocation();

  return (
    <section className="sidebar bg-white dark:bg-[#020817]">
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="mb-8 cursor-pointer flex flex-col items-center gap-2"
        >
          <img src={logo} alt="talk-logo" className="max-w-20 max-h-12" />
          <h1 className="text-lg 2xl:text-xl font-sans font-bold">Talk</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            location.pathname === item.route ||
            location.pathname.startsWith(`${item.route}/`);

          return (
            <Link
              to={item.route}
              key={item.label}
              className={`flex flex-col items-center mb-6
                 ${isActive ? "text-[#6366f1]" : ""}`}
            >
              <div>
                <img
                  src={item.imgURL}
                  alt={item.label}
                  className={`${
                    isActive ? "brightness-[6] invert-0" : ""
                  } w-20 h-12`}
                />
              </div>
              <p className={`${isActive ? "text-white" : ""}`}>{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
