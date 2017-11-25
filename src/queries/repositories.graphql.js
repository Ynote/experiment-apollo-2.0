export const repositoriesQuery = gql `
  query {
    organization(login: "KissKissBankBank") {
      repositories(last: 10) {
        edges {
          node {
            id,
            name,
            issues {
              totalCount
            },
            shortDescriptionHTML
          }
        }
      }
    }
  }
`
