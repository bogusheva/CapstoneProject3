import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App";
import "./index.scss";
// const stripe = require("stripe")(
//   "sk_test_51MpW2dEogIvFMQFvyjSb1CkePcBmecZo3PAHzhmvsjjCNvHh68AENJSse170BCb0ZZX3Q44v9cKAR8rYcgeUAutu00vHuBIFPA"
// );
// import Stripe from "stripe";

// const stripe = new Stripe(
//   "sk_test_51MpW2dEogIvFMQFvyjSb1CkePcBmecZo3PAHzhmvsjjCNvHh68AENJSse170BCb0ZZX3Q44v9cKAR8rYcgeUAutu00vHuBIFPA"
// );

const graphQlUrl = process.env.REACT_APP_API_URL + "/graphql";

const client = new ApolloClient({
  uri: graphQlUrl,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
