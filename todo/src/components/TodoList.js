import React, { Component } from 'react'
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h3>My Todo Items</h3>
        <div>
          <Todo />
        </div>
      </div>
    )
  }
}
