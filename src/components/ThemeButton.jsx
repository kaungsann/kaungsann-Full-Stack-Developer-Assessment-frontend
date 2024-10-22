import { Moon, Sun } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice"; // Import the toggle action
import { toast } from "sonner";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme); // Access the theme from Redux store

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    toast.success(`change mode ${theme === "light" ? "Dark" : "Light"}`, {
      duration: 3000,
    });
  };

  return (
    <button
      onClick={handleToggleTheme}
      className={`w-10 h-10 rounded-full border bottom-2 border-white shadow-md flex justify-center items-center
       cursor-pointer ${theme == "light" ? "bg-white" : "bg-[#020817]"}`}
    >
      {theme === "light" ? (
        <Sun color="black" size={20} />
      ) : (
        <Moon color="white" size={20} />
      )}
    </button>
  );
};

export default Theme;
