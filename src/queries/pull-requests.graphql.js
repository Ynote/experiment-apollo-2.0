import gql from 'graphql-tag'

export const needsReviewPullRequestsQuery = gql `
  query {
    repository(name: "KissKissBankBank", owner: "KissKissBankBank") {
      pullRequests(labels: "Needs review", states: OPEN, last: 50) {
        nodes {
          id,
          title,
          url,
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
