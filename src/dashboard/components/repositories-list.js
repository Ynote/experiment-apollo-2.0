import React from 'react'
import { ComponentWithData } from '../../common/components/component-with-data'
import { List } from '../../common/components/list'
import { repositoriesQuery } from '../../queries/repositories.graphql'
import { graphql } from 'react-apollo'

const ListWithData = ({ data }) => {
  const render = data => {
    const repos = data.organization.repositories.nodes
    const items = repos.map(node => ({
      key: node.id,
      content: node.name,
      href: node.url,
    }))

    return <List items={ items } />
  }

  const props = { data, render }

  return (
    <div>
      <h2>Last updated repositories</h2>
      <ComponentWithData { ...props } />
    </div>
  )
}

export const RepositoriesList = graphql(repositoriesQuery)(ListWithData)
