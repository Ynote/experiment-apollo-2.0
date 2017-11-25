import React from 'react'
import { ComponentWithData } from '../../common/components/component-with-data'
import { List } from '../../common/components/list'
import { repositoriesQuery } from '../../queries/repositories.graphql'
import { graphql } from 'react-apollo'

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
