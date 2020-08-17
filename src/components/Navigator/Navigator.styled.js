import styled from 'styled-components'

export const StyledNavigator = styled.div`
    margin: 0;
    backface-visibility: hidden;

    button {
        border: 0;
        border-radius: 0;
        padding: 12px;
        color: white;
        background-color: ${({ theme }) => theme.primaryButtonColour};

        &:active {
            background-color: navy;
        }

        &:hover {
            background-color: navy;
        }
    }
`
