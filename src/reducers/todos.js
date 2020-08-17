import undoable from 'redux-undo'

const initialState = [
    {
        text: 'iTodo initial state',
        completed: false,
        id: 0,
    },
]

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id:
                        state.reduce(
                            (maxId, todo) => Math.max(todo.id, maxId),
                            -1
                        ) + 1,
                    completed: false,
                    text: action.text,
                },
            ]

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return state
                }
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            })

        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)

        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, text: action.text } : todo
            )

        default:
            return state
    }
}

const undoableTodos = undoable(todos, {
    filter: function filterActions(action, currentState, previousHistory) {
        return action.type === 'REMOVE_TODO'
    },
})

export default undoableTodos
