import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function LoginForm({ login, password }) {
  const [isCorrect, setIsCorrect] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { setIsLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login,
      password,
    },
  });

  function toggleVisible() {
    setIsVisible((prevState) => !prevState);
  }

  function onSubmit(data) {
    if (data.login === login && data.password === password) {
      setIsLogged(true);
      navigate("/");
    } else {
      setIsCorrect(false);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div>
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
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type={isVisible ? "text" : "password"}
          id="password"
          {...register("password", {
            required: true,
            pattern:
              /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~\-={}[\]|\\:;"'<>,.?/])(?=.*[^\s]).{8,}$/,
            minLength: 10,
            maxLength: 20,
          })}
        />
        <span onClick={toggleVisible}>
          {isVisible ? (
            <span className="icon-eye-blocked"></span>
          ) : (
            <span className="icon-eye"></span>
          )}
        </span>
        {errors.password && (
          <p>
            Write a password (contains at least: 8 characters, 1 lowercase, 1
            uppercase letter, 1 number, 1 special character, no spaces).
          </p>
        )}
      </div>
      {isCorrect ? <p></p> : <p>Wrong login/password</p>}
      {!errors.login && !errors.password && (
        <input type="submit" value="Submit" className="button" />
      )}
    </form>
  );
}
