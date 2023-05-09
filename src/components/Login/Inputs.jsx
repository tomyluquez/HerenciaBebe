import React from "react";
import { InputsStyles, SpanErros } from "../../styles/Login/logginStyle";

const Inputs = (props) => {
  const {
    type,
    placeholder,
    name,
    registerForm,
    validators,
    errors,
    errorMessage,
    value,
  } = props;

  const handleRegister = (name, validator) => {
    return registerForm(name, validator);
  };

  return (
    <>
      <InputsStyles
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        {...handleRegister(name, validators)}
      />
      {errors[name] && errors[name].type === "required" && (
        <SpanErros>El campo es obligatorio</SpanErros>
      )}
      {errors[name] && errors[name].type === "minLength" && (
        <SpanErros>Minimo {validators.minLength} caracteres</SpanErros>
      )}
      {errors[name] && errors[name].type === "maxLength" && (
        <SpanErros>Maximo {validators.maxLength} caracteres</SpanErros>
      )}
      {errors[name] && errors[name].type === "pattern" && (
        <SpanErros>{errorMessage}</SpanErros>
      )}
    </>
  );
};

export default Inputs;
