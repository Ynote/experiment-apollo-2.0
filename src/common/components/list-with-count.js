import React from 'react'

export const ListWithCount = ({ lists }) => {
  const renderListCount = (list, index) => {
    return (
      <div key={ `list-${index}` }>
        <dt>{ list.title }</dt>
        <dd>{ list.count }</dd>
      </div>
    )
  }

  return (
    <dl>
      { lists.map(renderListCount) }
    </dl>
  )
}
