import React from 'react'

export const List = ({ items }) => {
  const renderItem = item => {
    if (!item.href) {
      return <li key={ item.key }>{ item.content }</li>
    }

    return (
      <li key={ item.key }>
        <a
          href={ item.href }
          target="_blank"
          rel="noopener"
        >
          { item.content }
        </a>
      </li>
    )
  }

  return (
    <ul>
      { items.map(renderItem) }
    </ul>
  )
}
