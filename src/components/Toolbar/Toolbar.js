import React, { useState } from 'react'
import { StyledToolbar } from './Toolbar.styled'
import AddTodo from '../../containers/AddTodo'
import Undo from '../../containers/Undo'

const Toolbar = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <StyledToolbar>
                <button onClick={() => setModal(true)}>Add new</button>
                <Undo />
            </StyledToolbar>
            {modal ? <AddTodo modal={modal} toggle={toggle} /> : <div />}
        </>
    )
}

export default Toolbar
