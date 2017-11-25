import React from 'react'

export const ComponentWithData = ({ data, render }) => {
  if (data.loading) return null
  if (data.error) return <div>{ data.error }</div>

  return <div>{ render(data) }</div>
}

