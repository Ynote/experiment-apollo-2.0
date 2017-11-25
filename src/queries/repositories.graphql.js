import gql from 'graphql-tag'

export const repositoriesQuery = gql `
  query {
    organization(login: "KissKissBankBank") {
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id,
          name,
          url,
          issues {
            totalCount
          },
          shortDescriptionHTML
        }
      }
    }
  }
`
