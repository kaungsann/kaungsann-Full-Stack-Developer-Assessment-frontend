import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { sidebarLinks } from "../constants/index";
import { Plus, UsersRound } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const SideBar = () => {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <section className="sidebar bg-white dark:bg-[#020817]">
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="mb-8 cursor-pointer flex flex-col items-center gap-2"
        >
          <img src={logo} alt="talk-logo" className="max-w-32 max-h-18" />
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            location.pathname === item.route ||
            location.pathname.startsWith(`${item.route}/`);

          return (
            <Link
              to={item.route}
              key={item.label}
              className={`flex flex-col items-center mb-6 ${
                isActive ? "text-[#6366f1]" : ""
              }`}
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

      <div className="w-full flex flex-col justify-center items-center">
        {user && user.role === "admin" && (
          <Link
            to="/users/list"
            className="flex justify-center cursor-pointer hover:opacity-75 items-center w-12 h-12 rounded-full mb-10 bg-[#6366f1]"
          >
            <UsersRound />
          </Link>
        )}
        <Link
          to="/channels/create"
          className="flex justify-center cursor-pointer hover:opacity-75 items-center w-12 h-12 rounded-full mb-10 bg-[#6366f1]"
        >
          <Plus className="text-3xl text-white" />
        </Link>
      </div>
    </section>
  );
};

export default SideBar;
