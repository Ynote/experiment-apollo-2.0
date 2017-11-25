import React from 'react'
import { ComponentWithData } from '../../common/components/component-with-data'
import { List } from '../../common/components/list'
import { needsReviewPullRequestsQuery }
  from '../../queries/pull-requests.graphql'
import { graphql } from 'react-apollo'

const ListWithData = ({ data }) => {
  const render = data => {
    const prs = data.repository.pullRequests.nodes
    const items = prs.map(node => ({
      key: node.id,
      content: node.title,
      href: node.url,
    }))

    return <List items={ items } />
  }

  const props = { data, render }

  return (
    <div>
      <h2>Needs review</h2>
      <ComponentWithData { ...props } />
    </div>
  )
}

export const NeedsReviewPrList = graphql(
  needsReviewPullRequestsQuery
)(ListWithData)
