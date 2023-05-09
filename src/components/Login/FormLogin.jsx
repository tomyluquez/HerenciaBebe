import React, { useEffect, useState } from "react";
import * as LogginStyles from "../../styles/Login/logginStyle";
import Inputs from "./Inputs";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import users from "../../Services/userWhitEmail";
import userWhitGoogle from "../../Services/userWhitGoogle";
import { FcGoogle } from "react-icons/all";

const FormLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const logginUser = useSelector((state) => state.user.isLogin);

  useEffect(() => {
    if (logginUser) navigate(-1);
  }, [logginUser]);

  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    users(data, isLogin, setError);
  };

  const onSubmitGoogle = () => {
    userWhitGoogle(isLogin, setError);
  };

  return (
    <>
      <LogginStyles.DivForm onSubmit={handleSubmit(onSubmit)}>
        <LogginStyles.Form>
          <LogginStyles.Title>
            {isLogin ? "Ingresa" : "Registrate Gratis"}
          </LogginStyles.Title>
          <LogginStyles.Subtitle>
            {isLogin
              ? "Ingresa con tu email y contraseña"
              : "Crea una cuenta gratis con tu mail"}
          </LogginStyles.Subtitle>
          <LogginStyles.FormContainter>
            {!isLogin && (
              <Inputs
                type="text"
                placeholder="Nombre"
                registerForm={registerForm}
                validators={{ required: true }}
                name="name"
                errors={errors}
              />
            )}
            <Inputs
              type="text"
              placeholder="email"
              registerForm={registerForm}
              validators={{
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              }}
              name="email"
              errors={errors}
              errorMessage="Ingresa un email valido"
            />
            <Inputs
              type="password"
              placeholder="Contraseña"
              registerForm={registerForm}
              validators={{ required: true, minLength: 8 }}
              name="pass"
              errors={errors}
            />
          </LogginStyles.FormContainter>
          {error && isLogin && (
            <span>El usuario o la contraseña son incorrectos</span>
          )}
          {error && !isLogin && (
            <span>El mail ingresado ya esta registrado</span>
          )}
          <LogginStyles.ButtonForm>
            {isLogin ? "Ingresar" : "Registrate"}
          </LogginStyles.ButtonForm>
          {isLogin ? (
            <LogginStyles.ButtonGoogle onClick={onSubmitGoogle}>
              <FcGoogle /> Continuar con Google
            </LogginStyles.ButtonGoogle>
          ) : null}
        </LogginStyles.Form>
        <LogginStyles.FormSection>
          <p>
            {isLogin ? "No tienes una cuenta?" : "Ya tienes una cuenta?"}{" "}
            <a onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Registrate Gratis" : "Iniciar sesion"}
            </a>
          </p>
        </LogginStyles.FormSection>
      </LogginStyles.DivForm>
    </>
  );
};

export default FormLogin;
