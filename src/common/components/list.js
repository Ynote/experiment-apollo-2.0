import React from 'react'

export const List = ({ items }) => (
  <ul>
    { items.map(item => <li key={ item.key }>{ item.content }</li>) }
  </ul>
)
