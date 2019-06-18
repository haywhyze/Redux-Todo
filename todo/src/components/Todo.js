import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  text-decoration: ${props => props.completed ? "line-through" : "none"};
`;
export default class Todo extends Component {
  toggleComplete = (id, completed) => {
    const isCompleted = !completed
    this.props.toggleComplete(id, isCompleted);
  }
  render() {
    const { text, completed, id } = this.props;
    return (
      <>
      <StyledLi
        completed={completed}
        onClick={() => this.toggleComplete(id, completed)}
      >
        {text}
      </StyledLi>
      </>
    )
  }
}
