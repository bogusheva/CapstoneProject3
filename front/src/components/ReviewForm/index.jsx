import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewForm() {
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
      productTitle: "",
      rating: "5",
      description: "",
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
  }, [localStorageData, setValue]);

  function onSubmit(data) {
    localStorage.setItem("reviewData", JSON.stringify(data));
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
      <label htmlFor="productTitle">
        Product what you've recently bought here
      </label>
      <input
        type="text"
        id="productTitle"
        {...register("productTitle", {
          required: true,
          minLength: 6,
        })}
      />
      {errors.productTitle && <p>Write product title</p>}
      <label htmlFor="rating">Your rating</label>
      <input
        type="number"
        id="rating"
        {...register("rating", {
          required: true,
          defaultValue: 5,
          min: 0,
          max: 5,
        })}
      />
      {errors.rating && <p>Only 0-5 is allowed</p>}
      <label htmlFor="description">What do you think about this product?</label>
      <textarea
        id="description"
        rows={9}
        cols={35}
        {...register("description", {
          required: true,
          minLength: 10,
        })}
      ></textarea>
      {errors.description && <p>Write review more than 2 words please</p>}
      {!errors.firstName &&
        !errors.lastName &&
        !errors.productTitle &&
        !errors.rating &&
        !errors.description && (
          <input type="submit" value="Submit" className="button" />
        )}
    </form>
  );
}
