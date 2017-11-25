import gql from 'graphql-tag'

export const needsReviewPullRequestsQuery = gql `
  query {
    repository(name: "KissKissBankBank", owner: "KissKissBankBank") {
      pullRequests(labels: "Needs review", last: 10) {
        nodes {
          id,
          title,
          author {
            avatarUrl
            login
            resourcePath
            url
          },
        }
      }
    }
  }
`
