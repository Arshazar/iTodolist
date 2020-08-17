import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Input,
    Form,
    FormGroup,
} from 'reactstrap'
import { editTodo, removeTodo, toggleTodo } from '../actions'

const ShowTodo = ({ dispatch, completed, modal, toggle, id, text }) => {
    let [todoText, changeText] = useState(text)

    const onToggleTodo = () => {
        dispatch(toggleTodo(id))
        toggle(false)
    }

    const onTextChange = event => {
        changeText(event.target.value)
    }

    const onEditTodo = () => {
        if (!todoText.trim()) {
            return
        }
        dispatch(editTodo(id, todoText))
        toggle(false)
    }

    const onRemoveTodo = () => {
        dispatch(removeTodo(id))
        toggle(false)
    }

    return (
        <div>
            <Modal
                isOpen={modal}
                toggle={toggle}
                centered={true}
                className="h-50 col-lg-4 col-md-6 col-sm-10"
                fade={true}
            >
                <ModalHeader>Your todo</ModalHeader>
                <Form>
                    <ModalBody>
                        <FormGroup>
                            <Input
                                style={{ boxSizing: 'border-box' }}
                                type="textarea"
                                id="todo-text"
                                placeholder={text}
                                onChange={onTextChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="primary" onClick={onEditTodo}>
                            Save
                        </Button>
                        <Button color="danger" onClick={onRemoveTodo}>
                            Remove
                        </Button>
                        {!completed ? (
                            <Button color="success" onClick={onToggleTodo}>
                                Complete
                            </Button>
                        ) : (
                            <Button color="warning" onClick={onToggleTodo}>
                                Incomplete
                            </Button>
                        )}
                        <Button onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
}

export default connect()(ShowTodo)
