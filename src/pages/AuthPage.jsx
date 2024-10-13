import PropTypes from "prop-types";
import authImg from "../assets/images/auth-image.svg";

import AuthForm from "../components/AuthForm";
import ThemeButton from "../components/ThemeButton";
function AuthPage({ type }) {
  return (
    <>
      <main className="flex min-h-screen w-full justify-between">
        {type === "login" ? (
          <AuthForm type="login" />
        ) : (
          <AuthForm type="register" />
        )}

        <div className="auth-asset">
          <img src={authImg} alt="auth-image" className="w-4/5 h-3/4" />
        </div>
      </main>
    </>
  );
}

AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthPage;
