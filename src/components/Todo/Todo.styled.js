import styled from 'styled-components'

export const StyledTodo = styled.div`
    li {
        display: flex;
        flex-wrap: row;
        height: 40px;
        border-bottom: solid 1px lightgrey;
        padding: 5px;

        p {
            margin: auto;
            margin-left: 10px;
        }

        &:hover {
            cursor: pointer;
            background: ${({ theme }) => theme.hoverItemColour};
        }
    }
`
