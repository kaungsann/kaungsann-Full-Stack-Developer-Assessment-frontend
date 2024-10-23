import ThemeButton from "./ThemeButton";
import { useAuth } from "../hooks/useAuth";

function HeaderBox() {
  const { user } = useAuth();
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-2xl font-sans font-bold">Hello,</span>
          <span className="text-[#6366F1] ml-2 font-bold font-sans text-2xl">
            {user?.username} 👋
          </span>
        </div>

        <ThemeButton />
      </div>
    </>
  );
}

export default HeaderBox;
