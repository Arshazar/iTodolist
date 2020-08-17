import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TodoList } from '../components/index'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            // throw new Error('Unknown filter: ' + filter)
            return null
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos.present, state.visibilityFilter),
})

const mapDispatchToProps = {
    onToggleTodo: toggleTodo,
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList
