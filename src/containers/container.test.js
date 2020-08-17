import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import AddTodo from './AddTodo'
import Link from './Link'
import ShowTodo from './ShowTodo'
import VisibleTodoList from './VisibleTodoList'

const addTodo = () => ({ type: 'ADD_TODO' })
const toggleTodo = () => ({ type: 'TOGGLE_TODO' })
const removeTodo = () => ({ type: 'REMOVE_TODO' })
const mockStore = configureStore()

let wrapper

it('renders AddTodo', () => {
    const mockProps = {
        addTodo: jest.fn(),
    }
    let store = mockStore(mockProps)
    store.dispatch(addTodo())
    wrapper = shallow(<AddTodo store={store} />)

    expect(wrapper).toMatchSnapshot()
})

it('renders ShowTodo component', () => {
    const mockProps = {
        toggleTodo: jest.fn(),
        removeTodo: jest.fn(),
    }
    let store = mockStore(mockProps)
    store.dispatch(toggleTodo())
    store.dispatch(removeTodo())
    wrapper = shallow(<ShowTodo store={store} />)

    expect(wrapper).toMatchSnapshot()
})

it('renders Undo component', () => {
    const mockProps = {
        onUndo: jest.fn(),
    }
    let store = mockStore(mockProps)
    wrapper = shallow(<ShowTodo store={store} />)

    expect(wrapper).toMatchSnapshot()
})

it('renders VisibleTodoList component', () => {
    let todos = [
        {
            text: 'first',
            completed: true,
        },
        {
            text: 'two',
            completed: false,
        },
    ]
    const mockProps = {
        todos: todos,
        visibilityFilter: ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'],
    }
    let store = mockStore(mockProps)
    wrapper = shallow(<VisibleTodoList store={store} />)

    expect(wrapper).toMatchSnapshot()
})
