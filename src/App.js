import React, { Component } from 'react'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'
import { Config } from './common/utils/config'
import { RepositoriesList } from './lists/components/repositories-list'

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
const middlewareLink = setContext(() => ({
  headers: {
    authorization: `bearer ${Config.getGithubToken()}`
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
        <RepositoriesList />
      </ApolloProvider>
    )
  }
}

export default App;
