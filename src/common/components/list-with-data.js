import React from 'react'
import { List } from './list'

export const ListWithData = ({ data, itemsFromData }) => {
  if (data.loading) return null
  if (data.error) return <div>{ data.error }</div>

  const items = itemsFromData(data)

  return <List items={ items } />
}
