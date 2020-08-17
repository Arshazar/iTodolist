import React, { useState } from 'react'
import { StyledTodo } from './Todo.styled'
import ShowTodo from '../../containers/ShowTodo'

const Todo = ({ completed, text, id }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <StyledTodo>
                <li
                    onClick={() => setModal(true)}
                    style={{
                        backgroundColor: completed ? '#86fcbd' : '',
                    }}
                >
                    <p>{text}</p>
                </li>
            </StyledTodo>
            {modal ? (
                <ShowTodo
                    completed={completed}
                    id={id}
                    text={text}
                    modal={modal}
                    toggle={toggle}
                />
            ) : (
                <div />
            )}
        </>
    )
}

export default Todo
