import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from './Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    },
})

const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterButton
