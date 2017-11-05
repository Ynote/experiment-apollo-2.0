import React, { Component } from 'react'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider, graphql } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import gql from 'graphql-tag'
import { githubConfig } from './config/github'

const repositoriesQuery = gql `
  query {
    organization(login: "KissKissBankBank") {
      repositories(last: 10) {
        edges {
          node {
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

const RepositoriesList = ({ data }) => {
  if (data.loading) return null
  if (data.error) { console.log(data.error) }

  const repos = data.organization.repositories.edges

  return (
    <ul>
      {
        repos.map(edge => <li key={ edge.node.id }>{ edge.node.name }</li>)
      }
    </ul>
  )
}

const RepositoriesListWithData = graphql(repositoriesQuery)(RepositoriesList)
const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
const middlewareLink = setContext(() => ({
  headers: {
    authorization: `bearer ${githubConfig.token}`
  }
}))

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client }>
        <RepositoriesListWithData />
      </ApolloProvider>
    )
  }
}

export default App;
