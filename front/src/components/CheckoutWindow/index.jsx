import { useState, useEffect } from "react";
import Advantage2 from "../../assets/images/advantage2.svg";

function OrderDisplay(props) {
  const [orderData, setOrderData] = useState({});
  useEffect(() => {
    const uploadData = localStorage.getItem("orderData");
    if (uploadData) {
      setOrderData(JSON.parse(uploadData));
    }
  }, []);
  return (
    <>
      <img src={Advantage2} alt="delivery" />
      <h3>Summary</h3>
      <div className="description">
        <h4>
          {orderData.firstName} {orderData.lastName}
        </h4>
        <h5>{orderData.phone}</h5>
        <h5>{orderData.address}</h5>
        <h5>${orderData.summary}</h5>
      </div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
      <p>
        Please note there is a 3-5 business day processing period for all
        orders. Excludes weekends as we are closed.
      </p>
      <span className="button-left" onClick={props.onClick}>
        <span className="icon-cross"></span>
      </span>
    </>
  );
}

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CheckoutWindow(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <OrderDisplay onClick={props.onClick} />
  );
}
