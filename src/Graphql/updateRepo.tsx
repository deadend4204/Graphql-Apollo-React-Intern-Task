import { gql } from '@apollo/client';

const updateRepo = gql`mutation updateRepo($repositoryId:String!,$description:String!,$name:String!){
    updateRepository(input:{repositoryId:$repositoryId,description:$description,name:$name}) {
      repository {
        description
        name
      }
    }
  }`;

export default updateRepo
