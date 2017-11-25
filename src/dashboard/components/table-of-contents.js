import React from 'react'
import { compose } from 'react-apollo'
import { ComponentWithMultipleData }
  from '../../common/components/component-with-data'
import { repositoriesQuery } from '../../queries/repositories.graphql'
import { needsReviewPullRequestsQuery }
  from '../../queries/pull-requests.graphql'
import { graphql } from 'react-apollo'
import { ListWithCount } from '../../common/components/list-with-count'


class ListWithData extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: {},
    }

    this.renderTableOfContents = this.renderTableOfContents.bind(this)
  }

  queryIsLoaded(query) {
    return !query.loading && !query.error
  }

  updateRepositoriesQuery(nextProps, newLists) {
    if (this.queryIsLoaded(nextProps.repositoriesQuery)) {
      if (newLists.repositoriesQuery) return newLists

      newLists['repositoriesQuery'] = {
        title: 'Last updated repositories',
        count: nextProps.repositoriesQuery.organization.repositories.nodes.length,
      }
    }

    return newLists
  }

  updateNeedsReviewPullRequestsQuery(nextProps, newLists) {
    if (this.queryIsLoaded(nextProps.needsReviewPullRequestsQuery)) {
      if (newLists.needsReviewPullRequestsQuery) return newLists

      newLists['needsReviewPullRequestsQuery'] = {
        title: 'Needs review PR on KissKissBankBank',
        count: nextProps.needsReviewPullRequestsQuery.repository.pullRequests.nodes.length,
      }
    }

    return newLists
  }

  componentWillReceiveProps(nextProps) {
    const oldLists = this.state.lists
    let newLists = Object.assign({}, oldLists)

    newLists = this.updateRepositoriesQuery(nextProps, newLists)
    newLists = this.updateNeedsReviewPullRequestsQuery(nextProps, newLists)

    this.setState({ lists: newLists })
  }

  renderTableOfContents(_datas) {
    if (!this.state.lists) return null

    return <ListWithCount lists={ Object.values(this.state.lists) } />
  }

  render() {
    const datas = [
      this.props.repositoriesQuery,
      this.props.needsReviewPullRequestsQuery,
    ]

    return(
      <div>
        <h2>Table of contents</h2>
        <ComponentWithMultipleData
          datas={ datas }
          render={ this.renderTableOfContents }
        />
      </div>
    )
  }
}

export const TableOfContents = compose(
  graphql(repositoriesQuery, { name: 'repositoriesQuery'}),
  graphql(needsReviewPullRequestsQuery, { name: 'needsReviewPullRequestsQuery' }),
)(ListWithData)
