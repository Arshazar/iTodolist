import React from 'react'
import { StyledTodoList } from './TodoList.styled'
import { Todo } from '../index'

const TodoList = ({ todos }) => (
    <StyledTodoList>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} />
        ))}
    </StyledTodoList>
)

export default TodoList
