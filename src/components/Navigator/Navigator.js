import React from 'react'
import FilterButton from '../../containers/FilterButton'
import { VisibilityFilters } from '../../actions'
import { StyledNavigator } from './Navigator.styled'

const Navigator = () => (
    <StyledNavigator>
        <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
            Todos
        </FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterButton>
    </StyledNavigator>
)

export default Navigator
