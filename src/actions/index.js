export const addTodo = text => ({
    type: 'ADD_TODO',
    text,
})

export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text,
})

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id,
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id,
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter,
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}
