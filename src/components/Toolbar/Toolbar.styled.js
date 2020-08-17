import styled from 'styled-components'

export const StyledToolbar = styled.div`
    margin: 0;
    text-align-last: end;

    button {
        border: 0;
        border-radius: 0;
        cursor: pointer;
        border-radius: 0;
        padding: 12px;
        color: white;
        background-color: ${({ theme }) => theme.primaryButtonColour};

        &:hover {
            background-color: navy;
        }
    }
`
