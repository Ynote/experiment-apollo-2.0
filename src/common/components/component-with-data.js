import React from 'react'

export const ComponentWithData = ({ data, render }) => {
  if (data.loading) return null
  if (data.error) return <div>{ data.error }</div>

  return <div>{ render(data) }</div>
}

export class ComponentWithMultipleData extends React.Component {
  isLoading() {
    return this.props.datas.filter(data => data.loading).length > 0
  }

  hasError() {
    return this.props.datas.filter(data => data.error).length > 0
  }

  renderError() {
    return this.props.datas.map((data, index) => {
      return (
        <div key={ index }>{ data.error }</div>
      )
    })
  }

  render() {
    if (!this.props.datas) return null
    if (this.isLoading()) return null

    if (this.hasError()) {
      return (
        <div>
          { this.renderError() }
        </div>
      )
    }

    return <div>{ this.props.render(this.props.datas) }</div>
  }
}
