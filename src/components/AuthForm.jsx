import PropTypes from "prop-types";
// import { useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import ThemeButton from "../components/ThemeButton";
function AuthForm({ type }) {
  return (
    <>
      <section className="relative w-full flex flex-col justify-center items-center">
        <div className="absolute top-3 right-6">
          <ThemeButton />
        </div>
        <header className="w-3/4 lg:w-2/4	mx-auto p-4">
          <img src={logo} alt="logo" className="w-60 h-40 mx-auto mb-8" />
          <h2 className="text-slate-600 text-center font-sans text-2xl mb-12 font-bold">
            Win Tracker
          </h2>

          <form action="" className="w-full">
            {type === "login" ? (
              <>
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  className="w-full my-12"
                />
                <CustomInput
                  name="password"
                  label="Password"
                  placeholder="*****"
                  className="w-full mb-12"
                />

                <CustomButton
                  color="primary"
                  variant="solid"
                  name="Sign In"
                  className="w-full mb-6 p-6"
                />
              </>
            ) : (
              <>
                <CustomInput
                  name="name"
                  label="Name"
                  placeholder="enter your name"
                  className="w-full my-12"
                />
                <CustomInput
                  name="email"
                  label="Name"
                  placeholder="example@gmail.com"
                  className="w-full mb-12"
                />
                <CustomInput
                  name="password"
                  label="Password"
                  placeholder="****"
                  className="w-full mb-12"
                />

                <CustomButton
                  name="Sign Up"
                  color="primary"
                  variant="solid"
                  className="w-full mb-6 p-6"
                />
              </>
            )}
          </form>

          <div>
            <span className="text-md text-slate-600 font-serif">
              {type === "login" ? "New User?" : "Do you have already account?"}
            </span>
            <Link to={type === "login" ? "/register" : "/login"}>
              <span className="text-md ml-2 font-semibold text-blue-600 cursor-pointer">
                {type === "login" ? "SignUp" : "SignIn"}
              </span>
            </Link>
          </div>
        </header>
      </section>
    </>
  );
}
AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthForm;
