import { gql } from "@apollo/client";

export const GET_FULL_PRODUCTS = gql`
  query GetFullProducts {
    products {
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

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      data {
        id
        attributes {
          title
          price
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
    reviews {
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
