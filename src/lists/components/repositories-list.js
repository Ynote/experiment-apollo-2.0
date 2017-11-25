import React from 'react'
import { ListWithData } from '../../common/components/list-with-data'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

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

const List = ({ data }) => {
  const itemsFromData = data => {
    const repos = data.organization.repositories.edges

    return repos.map(edge => ({
      key: edge.node.id,
      content: edge.node.name
    }))
  }

  const props = {
    data,
    itemsFromData,
  }

  return <ListWithData { ...props } />
}

export const RepositoriesList = graphql(repositoriesQuery)(List)
