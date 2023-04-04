import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(sort: "createdAt:desc", pagination: { limit: 480 }) {
      data {
        id
        attributes {
          title
          price
          category
          caffeine
          origin
          collection
          img {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  query GetReviews {
    reviews(sort: "createdAt:desc", pagination: { limit: 240 }) {
      data {
        id
        attributes {
          productTitle
          name
          text
          rating
          productID
        }
      }
    }
  }
`;

export const GET_FULL_PRODUCTS = gql`
  query GetFullProducts {
    products(sort: "createdAt:desc", pagination: { limit: 480 }) {
      data {
        id
        attributes {
          title
          description
          img {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          category
          caffeine
          origin
          collection
          price
          temperature
          steepTime
          servingSize
          ingredients
          flavor
        }
      }
    }
  }
`;
