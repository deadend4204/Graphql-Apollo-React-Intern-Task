import { gql } from '@apollo/client';

const getReposList = gql`
query repositories($after:String) { 
    viewer { 
      id
         repositories(first:5 after:$after) {
           edges {
             node {
               id
            name
            url
            createdAt
             }
          cursor
           }
        pageInfo {
          endCursor
          hasNextPage
        }
         }
    }
  }
`;

export default getReposList
