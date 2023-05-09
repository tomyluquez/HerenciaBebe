import React from "react";
import FormLogin from "../components/Login/FormLogin";
import * as LogginStyles from "../styles/Login/logginStyle";

const Login = () => {
  return (
    <LogginStyles.DivFormLoggin>
      <FormLogin />
    </LogginStyles.DivFormLoggin>
  );
};

export default Login;
