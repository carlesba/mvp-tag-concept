import React from 'react'

const App = React.createClass({
  render () {
    console.table(this.props.data)
    return (
      <div>
        <div>searcher</div>
        <div>content</div>
      </div>
    )
  }
})

export default App
