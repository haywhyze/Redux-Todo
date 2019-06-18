import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleComplete } from '../redux/actionCreators';
import Todo from './Todo';

export class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <div>
        <h3>My Todo Items</h3>
        <ul>
          {
            todos.map(todo => (
              <Todo
                key={todo.id}
                text={todo.value}
                completed={todo.completed}
                id={todo.id}
                toggleComplete={this.props.toggleComplete}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  };
}

export default connect(
  mapStateToProps,
  { toggleComplete },
)(TodoList);
