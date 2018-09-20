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
    this.editItem = this.editItem.bind(this)
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
    const items = this.state.items.slice()
    items.splice(index, 1)
    this.setState({
      items: items
    })
  }

  editItem (index, newText) {
    // object.assign copies the whole state (at the highest level) into a new object (editingState) for manipulation
    let editingState = Object.assign({}, this.state)
    // copies array of objects within state
    editingState.items = editingState.items.slice()
    // copies editing object within the array
    editingState.items[index] = Object.assign({}, editingState.items[index])
    // edits the target
    editingState.items[index].text = newText
    let newState = editingState.items
    // updates state to new copy of the state
    this.setState({
      items: newState
    })
  }

  render () {
    return (
      <div className='App'>
        <CreateItem items={this.state.items} addItem={this.addItem} />
        {this.state.items.map((item, idx) =>
          <ToDoItem key={`${item.text}${idx}`} index={idx} text={item.text} completed={item.completed} isEditing={item.isEditing}
            deleteItem={this.deleteItem} editItem={this.editItem} />
        ) }

      </div>
    )
  }
}

export default App
