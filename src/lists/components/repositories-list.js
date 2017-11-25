import React, { Component } from 'react'
import { List as PresentationalList } from '../../common/components/list'
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
  if (data.loading) return null
  if (data.error) { console.log(data.error) }

  const repos = data.organization.repositories.edges
  const items = repos.map(edge => ({
    key: edge.node.id,
    content: edge.node.name
  }))

  return <PresentationalList items={ items } />
}

export const RepositoriesList = graphql(repositoriesQuery)(List)
