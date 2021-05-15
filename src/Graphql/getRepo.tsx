import { gql } from '@apollo/client';

const getRepo = gql`
query repository($name:String!) { 
    viewer { 
      repository(name:$name) {
        id
      url
      description
      name
      createdAt
      }
    }
  }
`;

export default getRepo
