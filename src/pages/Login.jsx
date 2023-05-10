import React from "react";
import FormLogin from "../components/Login/FormLogin";
import * as LogginStyles from "../styles/Login/logginStyle";

const Login = () => {
  window.scrollTo(0, 0);

  return (
    <LogginStyles.DivFormLoggin>
      <FormLogin />
    </LogginStyles.DivFormLoggin>
  );
};

export default Login;
