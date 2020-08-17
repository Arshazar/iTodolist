import {
    addTodo,
    removeTodo,
    editTodo,
    completeTodo,
    setVisibilityFilter,
} from './index'

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action', () => {
        expect(addTodo('Use Redux')).toEqual({
            type: 'ADD_TODO',
            text: 'Use Redux',
        })
    })

    it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
        expect(setVisibilityFilter('active')).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'active',
        })
    })

    it('toggleTodo should create TOGGLE_TODO action', () => {
        expect(toggleTodo(1)).toEqual({
            type: 'TOGGLE_TODO',
            id: 1,
        })
    })

    it('editTodo should create EDIT_TODO action', () => {
        expect(editTodo(1, 'Use Redux everywhere')).toEqual({
            type: 'EDIT_TODO',
            id: 1,
            text: 'Use Redux everywhere',
        })
    })

    it('removeTodo should create REMOVE_TODO action', () => {
        expect(removeTodo(1)).toEqual({
            type: 'REMOVE_TODO',
            id: 1,
        })
    })

    it('editTodo should create EDIT_TODO action', () => {
        expect(editTodo(1, 'Use Redux everywhere')).toEqual({
            type: 'EDIT_TODO',
            id: 1,
            text: 'Use Redux everywhere',
        })
    })
})
