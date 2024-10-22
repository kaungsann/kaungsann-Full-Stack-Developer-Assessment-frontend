import { toast } from "sonner";
import logo from "../assets/images/logo.png";
import { LogOut } from "lucide-react";

function Footer() {
  const handleLogout = () => {
    toast.warning("are you really to logout?");
  };
  return (
    <>
      <div className="flex items-center">
        <img src={logo} className="w-18 h-10" />
        <div className="ml-4">
          <h2 className="text-md font-bold font-sans">Kaung Sann</h2>
          <span className="text-sm font-semibold font-sans opacity-75">
            kaung@gmail.com
          </span>
        </div>
        <LogOut
          size={20}
          className="ml-4 cursor-pointer
        "
          onClick={handleLogout}
        />
      </div>
    </>
  );
}

export default Footer;
