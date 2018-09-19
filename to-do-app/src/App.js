import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import CreateItem from './CreateItem'

class App extends Component {
  constructor () {
    super()
    this.state = {
      items: [
        {
          text: 'how do we handle state',
          completed: false,
          isEditing: false
        },
        {
          text: 'edit capability',
          completed: false,
          isEditing: false
        },
        {
          text: 'delete capability',
          completed: false,
          isEditing: false
        }
      ]
    }
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem (itemText) {
    const items = this.state.items.slice()
    const newItem = {
      text: itemText,
      completed: false,
      isEditing: false
    }
    let includeNewItem = items.concat(newItem)
    this.setState({
      items: includeNewItem
    })
  }

  deleteItem (index) {
    console.log(index)
    const items = this.state.items.slice()
    console.log('items before splice', items.slice())
    items.splice(index, 1)
    console.log('items', items)
    this.setState({
      items: items
    })
  }

  render () {
    console.log('Apps State', this.state)
    return (
      <div className='App'>
        <CreateItem items={this.state.items} addItem={this.addItem} />
        {this.state.items.map((item, idx) =>
          <ToDoItem key={`${item.text}${idx}`} index={idx} text={item.text} completed={item.completed} isEditing={item.isEditing}
            deleteItem={this.deleteItem} />
        ) }

      </div>
    )
  }
}

export default App
