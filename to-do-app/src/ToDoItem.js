import React, { Component } from 'react'

class ToDoItem extends Component {
  constructor (props) {
    super()
    this.state = {
      text: props.text,
      completed: props.completed,
      isEditing: props.isEditing
    }
  }

  startEdit () {
    this.setState({ isEditing: true })
  }

  finishEdit (newText) {
    const index = this.props.index
    this.props.editItem(index, newText)
    this.setState({ isEditing: false })
  }

  updateText (event) {
    this.setState({
      text: event.target.value
    })
  }

  render () {
    const isEditing = this.state.isEditing
    return (
      <React.Fragment>
        {!isEditing
          ? <div>
            <div>
              {this.state.text}
            </div>
            <button onClick={() => { this.startEdit() }}>edit</button>
            <button onClick={() => { this.props.deleteItem(this.props.index) }}>delete</button>
          </div>

          : <div>
            <input onChange={(event) => this.updateText(event)} value={this.state.text} />
            <button onClick={() => { this.finishEdit(this.state.text) }}>Done</button>
          </div>

        }

      </React.Fragment>
    )
  }
}

export default ToDoItem
