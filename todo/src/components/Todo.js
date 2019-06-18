import React, { Component } from 'react'

export default class Todo extends Component {
  toggleComplete = (id, completed) => {
    const isCompleted = !completed
    this.props.toggleComplete(id, isCompleted);
  }
  render() {
    const { text, completed, id } = this.props;
    return (
      <li
        onClick={() => this.toggleComplete(id, completed)}
      >
        {text}
      </li>
    )
  }
}
