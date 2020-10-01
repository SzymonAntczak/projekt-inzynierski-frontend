import gql from 'graphql-tag';

export const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      _id,
      name,
      owner
    }
  }
`;