import React, { Component } from 'react'

export default class TodoForm extends Component {
  todoValueRef = React.createRef();

  render() {
    return (
      <div>
        <form>
          <input ref={this.todoValueRef} type="text" />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
