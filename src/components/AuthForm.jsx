import PropTypes from "prop-types";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import ThemeButton from "../components/ThemeButton";
import { useForm } from "react-hook-form";
import { useLoginMutation, useRegisterMutation } from "../services/authApi";
import { setCredentials } from "../features/authSlice";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
function AuthForm({ type }) {
  const [regist, { isLoading: isRegisterLoading, error: isRegisterError }] =
    useRegisterMutation();
  const [login, { isLoading: isLoginLoading, error: isLoginError }] =
    useLoginMutation();

  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //user register handle
  const handleRegisterFormSubmit = async (data) => {
    try {
      const credentials = await regist(data).unwrap();

      if (credentials) {
        toast.success("Registration successful! 👏", {
          duration: 5000,
        });
        navigateTo("/login");
      }
    } catch (err) {
      toast.error(`😞 ${err.message || isRegisterError.data.message}`, {
        duration: 3000,
      });
    }
  };

  //user login handle
  const handleLoginFormSubmit = async (data) => {
    try {
      delete data?.username;
      const credentials = await login(data).unwrap();
      console.log("login success daata is a", credentials);
      if (credentials) {
        toast.success("login successful! 👏", {
          duration: 5000,
        });
        reset(data);
        dispatch(setCredentials(credentials));
        navigateTo("/channels/list");
      }
    } catch (error) {
      toast.error(`😞 ${error.message || isLoginError.data.message}`, {
        duration: 3000,
      });
    }
  };
  return (
    <>
      <section className="relative w-full flex flex-col justify-center items-center">
        <div className="absolute top-3 right-6">
          <ThemeButton />
        </div>
        <header className="w-3/4 lg:w-2/4	mx-auto p-4">
          <img src={logo} alt="logo" className="w-60 h-40 mx-auto mb-8" />

          {type === "login" ? (
            <>
              <form
                action=""
                className="w-full"
                onSubmit={handleSubmit(handleLoginFormSubmit)}
              >
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  className="w-full my-12"
                  register={register}
                  error={errors.email}
                />
                <CustomInput
                  name="password"
                  label="Password"
                  placeholder="*****"
                  className="w-full mb-12"
                  register={register}
                  error={errors.password}
                />

                <CustomButton
                  variant="solid"
                  name="Sign In"
                  className="w-full mb-6 p-6 b bg-[#6366f1] text-white"
                  loading={isLoginLoading}
                  type="submit"
                />
              </form>
            </>
          ) : (
            <>
              <form
                action=""
                className="w-full"
                onSubmit={handleSubmit(handleRegisterFormSubmit)}
              >
                <CustomInput
                  name="username"
                  label="UserName"
                  placeholder="enter username"
                  className="w-full my-12"
                  register={register}
                  error={errors.username}
                />
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  className="w-full mb-12"
                  register={register}
                  error={errors.email}
                />
                <CustomInput
                  name="password"
                  label="Password"
                  placeholder="****"
                  className="w-full mb-12"
                  register={register}
                  error={errors.password}
                />

                <CustomButton
                  name="Sign Up"
                  variant="solid"
                  className="w-full mb-6 p-6 bg-[#6366f1] text-white"
                  loading={isRegisterLoading}
                  type="submit"
                />
              </form>
            </>
          )}

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
