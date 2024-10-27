import PropTypes from "prop-types";
import authImg from "../assets/images/auth.png";

import AuthForm from "../components/AuthForm";

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
          <img src={authImg} alt="auth-image" className="w-full h-3/4" />
        </div>
      </main>
    </>
  );
}

AuthPage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AuthPage;
