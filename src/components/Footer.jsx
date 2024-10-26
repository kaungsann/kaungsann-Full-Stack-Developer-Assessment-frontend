import PropTypes from "prop-types";
import logo from "../assets/images/logo.png";
import { LogOut } from "lucide-react";
import { useLogoutMutation } from "../services/authApi";
import { removeCredentials } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import ConfirmModal from "./ConfirmModalBox";
import { useDisclosure } from "@nextui-org/react";
import { resetStore } from "../store";
import { toast } from "sonner";

function Footer({ className, blockImg }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, tokens } = useAuth();
  const [logout] = useLogoutMutation();

  const dispatch = useDispatch();
  const handleLogout = () => {
    logout(tokens.refresh.token)
      .unwrap()
      .then(() => {
        console.log("logout is working");
        dispatch(removeCredentials());
        dispatch(resetStore());
      })
      .catch((err) => {
        console.log(err);
        toast.error(`😞 ${err.data.message}`, {
          duration: 3000,
        });
      });
  };
  return (
    <>
      <div className={`${className}`}>
        {blockImg && (
          <img
            src={logo}
            className="w-12 h-8 lg:w-18 lg:h-10 md:hidden 2xl:block"
          />
        )}

        <div className="lg:ml-4">
          <h2 className="text-md font-bold font-sans">{user?.username}</h2>
          <span className="text-sm font-semibold font-sans opacity-75">
            {user?.email}
          </span>
        </div>
        <LogOut
          size={20}
          className="ml-4 cursor-pointer hover:opacity-75
        "
          onClick={onOpen}
        />
      </div>

      <ConfirmModal
        isOpen={isOpen}
        title="Confirm Logout"
        onClose={onClose}
        onConfirm={handleLogout}
        message="Are you sure you want to log out? 😭"
        confirmText="Log out"
        cancelText="Cancel"
      />
    </>
  );
}

Footer.propTypes = {
  className: PropTypes.string.isRequired,
  blockImg: PropTypes.bool.isRequired,
};

export default Footer;
