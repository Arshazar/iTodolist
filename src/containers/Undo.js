import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let Undo = ({ canUndo, onUndo }) => (
    <button onClick={onUndo} disabled={!canUndo}>
        Unremove
    </button>
)

const mapStateToProps = state => ({
    canUndo: state.todos.past.length > 0,
})

const mapDispatchToProps = {
    onUndo: UndoActionCreators.undo,
}

Undo = connect(mapStateToProps, mapDispatchToProps)(Undo)

export default Undo
