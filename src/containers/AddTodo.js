import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Input,
    Label,
    Form,
    FormGroup,
} from 'reactstrap'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch, modal, toggle }) => {
    let [todoText, changeText] = useState('')

    const onTextChange = event => {
        changeText(event.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if (!todoText.trim()) {
            return
        }
        dispatch(addTodo(todoText))
        changeText('')
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
                <ModalHeader>Add todo</ModalHeader>
                <Form>
                    <ModalBody>
                        <FormGroup>
                            <Label for="writing">Write your todo</Label>
                            <Input
                                style={{ boxSizing: 'border-box' }}
                                type="textarea"
                                id="todo-text"
                                onChange={onTextChange}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter className="justify-content-between">
                        <Button color="primary" onClick={onSubmit}>
                            Add
                        </Button>
                        <Button className="ml-5" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    )
}

export default connect()(AddTodo)
