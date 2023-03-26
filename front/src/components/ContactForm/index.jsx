import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const [localStorageData, setLocalStorageData] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setLocalStorageData(JSON.parse(savedData));
    }
  }, []);
  useEffect(() => {
    setValue("firstName", localStorageData.firstName);
    setValue("lastName", localStorageData.lastName);
    setValue("email", localStorageData.email);
    setValue("phone", localStorageData.phone);
  }, [localStorageData, setValue]);

  function onSubmit(data) {
    localStorage.setItem("messageData", JSON.stringify(data));
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
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
      <label htmlFor="message">What’s on your mind?</label>
      <textarea
        id="message"
        rows={9}
        cols={35}
        {...register("message", {
          required: true,
          minLength: 120,
        })}
      ></textarea>
      {errors.message && <p>Message must be more than 120 symbols</p>}
      {!errors.firstName &&
        !errors.lastName &&
        !errors.email &&
        !errors.phone &&
        !errors.message && (
          <input type="submit" value="Submit" className="button" />
        )}
    </form>
  );
}
