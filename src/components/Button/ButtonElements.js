import styled from 'styled-components'

export const Container = styled.button`
    width: fit-content;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #FD5263;
    color: #FFFFFF;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01BF71;
        color: #000000;
    }
`