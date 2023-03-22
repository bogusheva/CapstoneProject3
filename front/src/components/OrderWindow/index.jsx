import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Advantage2 from "../../assets/images/advantage2.svg";

export default function OrderWindow(props) {
  const navigate = useNavigate();
  const [localStorageData, setLocalStorageData] = useState({});
  const [orderIsSubmit, setOrderIsSubmit] = useState(false);
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
    setValue("address", localStorageData.address);
  }, [localStorageData]);
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

  function onSubmit(data) {
    setOrderIsSubmit(true);
    const orderData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      orderList: props.cartData,
      summary: props.orderSum,
    };
    localStorage.setItem("orderData", JSON.stringify(orderData));
  }
  function completeOrder() {
    localStorage.removeItem("cart");
    navigate("/");
  }

  return (
    <div className="order-window">
      <h2>Last Step</h2>
      <p>Fill in the contact details before confirming the order</p>
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
        {!errors.firstName &&
          !errors.lastName &&
          !errors.email &&
          !errors.phone &&
          !errors.address && (
            <input type="submit" value="Submit" className="button" />
          )}
      </form>
      <span className="button-left" onClick={props.onClick}>
        X
      </span>
      {orderIsSubmit && (
        <div className="confirm-window">
          <img src={Advantage2} alt="delivery" />
          <h2>Your order is confirmed</h2>
          <p>We're calling you right now!</p>
          <button className="button black" onClick={completeOrder}>
            OK
          </button>
        </div>
      )}
    </div>
  );
}
