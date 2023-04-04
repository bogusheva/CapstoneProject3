import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../context/AuthContext";

export default function RegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setIsLogged } = useContext(AuthContext);

  function onSubmit(data) {
    localStorage.setItem("formData", JSON.stringify(data));
    setIsLogged(true);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <label htmlFor="login">Login</label>
      <input
        type="text"
        id="login"
        {...register("login", {
          required: true,
          minLength: 10,
          maxLength: 20,
        })}
      />
      {errors.login && <p>Write a login (10-20 chars).</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: true,
          pattern:
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~\-={}[\]|\\:;"'<>,.?/])(?=.*[^\s]).{8,}$/,
          minLength: 10,
          maxLength: 20,
        })}
      />
      {errors.password && (
        <p>
          Write a password (contains at least: 8 characters, 1 lowercase, 1
          uppercase letter, 1 number, 1 special character, no spaces).
        </p>
      )}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        {...register("firstName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
          minLength: 2,
          maxLength: 20,
        })}
      />
      {errors.firstName && <p>This field is required</p>}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        {...register("lastName", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
          minLength: 2,
        })}
      />
      {errors.lastName && <p>This field is required</p>}
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        id="email"
        {...register("email", {
          required: true,
          pattern: /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/i,
        })}
      />
      {errors.email && <p>Wrong email pattern</p>}
      <label htmlFor="phone">Phone number</label>
      <input
        type="text"
        id="phone"
        {...register("phone", {
          required: true,
          pattern: /^\+?\d{1,3}[- ]?\d{2,3}[- ]?\d{2,3}[- ]?\d{2,3}$/,
        })}
      />
      {errors.phone && <p>Only 0-9 numbers, more than 12 numbers</p>}
      <label htmlFor="address">Delivery address</label>
      <textarea
        id="address"
        rows={4}
        cols={35}
        {...register("address", {
          required: true,
          minLength: 10,
        })}
      ></textarea>
      {errors.address && (
        <p>
          Write Flat/house number, Street, City, State, Postal code, Country
        </p>
      )}
      {!errors.login &&
        !errors.password &&
        !errors.firstName &&
        !errors.lastName &&
        !errors.email &&
        !errors.phone &&
        !errors.address && (
          <input type="submit" value="Submit" className="button" />
        )}
    </form>
  );
}
