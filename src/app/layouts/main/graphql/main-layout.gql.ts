import gql from 'graphql-tag';

export const GQL_GET_RESTAURANT_LIST = gql`
  query GetRestaurantList {
    restaurants {
      _id,
      name,
      owner
    }
  }
`;