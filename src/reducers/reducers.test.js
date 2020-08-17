import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const addTodo = () => ({ type: 'ADD_TODO', id, text })
const toggleTodo = () => ({ type: 'TOGGLE_TODO' })
const editTodo = () => ({ type: 'EDIT_TODO' })
const removeTodo = () => ({ type: 'REMOVE_TODO' })

const mockStore = configureStore()

let wrapper

describe('testing reducers', () => {
    it('ADD_TODO', () => {
        const newTodo = {
            id: 2,
            text: 'third',
        }

        expect(todos(newTodo, addTodo)).toEqual({
            history: {
                id: 2,
                present: [],
                text: 'third',
            },
            id: 2,
            present: [],
            text: 'third',
        })
    })

    it('visibility', () => {
        const mockState = [
            {
                id: 0,
                text: 'cero',
                completed: false,
            },
            {
                id: 1,
                text: 'first',
                completed: true,
            },
        ]
        let state
        let showAll = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_ALL',
        }
        let showTodo = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_TODO',
        }
        let showComplete = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETE',
        }
        expect(visibilityFilter(state, showTodo)).toEqual(showTodo.filter)
        expect(visibilityFilter(state, showComplete)).toEqual(
            showComplete.filter
        )
        expect(visibilityFilter(state, 'giberish')).toEqual(showAll.filter)
    })

    it('EDIT_TODO', () => {
        expect(
            todos(
                [
                    {
                        text: 'Run the tests',
                        completed: false,
                        id: 1,
                    },
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 0,
                    },
                ],
                {
                    type: 'EDIT_TODO',
                    text: 'Fix the tests',
                    id: 1,
                }
            )
        ).toEqual([
            {
                text: 'Fix the tests',
                completed: false,
                id: 1,
            },
            {
                text: 'Use Redux',
                completed: false,
                id: 0,
            },
        ])
    })
})
