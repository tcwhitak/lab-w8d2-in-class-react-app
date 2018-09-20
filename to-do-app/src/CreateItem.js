import React, { Component } from 'react'

class CreateItem extends Component {
  constructor (props) {
    super()
    this.state = {
      text: '',
      item: props.items
    }
  }

  updateText (event) {
    this.setState({
      text: event.target.value
    })
  }

  addItemPressed (itemText) {
    this.props.addItem(itemText)
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <div className='CreateItem'>
        <input onChange={(event) => this.updateText(event)} value={this.state.text} />
        <button onClick={() => { this.addItemPressed(this.state.text) }}>Add Item</button>
      </div>
    )
  }
}

export default CreateItem
