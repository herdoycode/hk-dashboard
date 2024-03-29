import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().min(5).max(200).required().label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="auth__page">
      <form onSubmit={handleSubmit(onSubmit)} className="auth__form">
        <input {...register("email")} type="email" placeholder="Email..." />
        {errors.email && (
          <p className="text-danger"> {errors.email.message} </p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password..."
        />
        {errors.password && (
          <p className="text-danger"> {errors.password.message} </p>
        )}
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
