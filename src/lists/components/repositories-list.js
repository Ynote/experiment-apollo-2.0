import React from 'react'
import { ComponentWithData } from '../../common/components/component-with-data'
import { List } from '../../common/components/list'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const repositoriesQuery = gql `
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

const ListWithData = ({ data }) => {
  const render = data => {
    const repos = data.organization.repositories.edges
    const items = repos.map(edge => ({
      key: edge.node.id,
      content: edge.node.name
    }))

    return <List items={ items } />
  }

  const props = { data, render }

  return <ComponentWithData { ...props } />
}

export const RepositoriesList = graphql(repositoriesQuery)(ListWithData)
