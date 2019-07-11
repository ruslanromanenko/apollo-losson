import gql from "graphql-tag";

export const QUERY_USERS = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;
export const QUERY_TOP_POSTS = gql`
  query {
    allPosts(orderBy: updatedAt_DESC, first: 7) {
      id
      title
      user {
        id
        name
      }
    }
  }
`;
export const QUERY_ALL_POSTS = gql`
  query {
    allPosts {
      id
      title
      user {
        id
        name
      }
    }
  }
`;
export const getQueryUserPosts = id =>
  gql`
      query {
        User(id: "${id}") {
          id
          name          
          posts{
            id
            text
            title
          }
        }
      }
    `;

export const getQueryPost = id =>
  gql`
      query {
        Post(id: "${id}") {
          id
          title
          text
          user{
            id
            name
          }
        }
      }
   `;
export const getQueryUserData = id =>
  gql`
      query {
        User(id: "${id}") {
          id
          name
          email
        }
      }
    `;
